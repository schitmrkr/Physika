import type { Study } from '../../domain/entities/Study';
import type { Subject } from '../../domain/entities/Subject';
import type { StudyRepository } from '../../domain/repositories/StudyRepository';
import { subjectById } from '../../domain/taxonomy/subjects';
import { downloadStudy } from '../../shared/lib/download';
import { extractHeadings, type NoteHeading } from '../../shared/lib/text';
import { ViewModel } from '../core/ViewModel';

export interface StudyState {
  study: Study | null;
  subject: Subject | null;
  related: Study[];
  headings: NoteHeading[];
  loading: boolean;
  error: string | null;
}

export class StudyViewModel extends ViewModel<StudyState> {
  private unsubscribe: (() => void) | null = null;

  constructor(
    private readonly repository: StudyRepository,
    private readonly studyId: string,
  ) {
    super({
      study: null,
      subject: null,
      related: [],
      headings: [],
      loading: true,
      error: null,
    });
    void this.refresh();
  }

  connect(): void {
    if (this.unsubscribe) return;
    this.unsubscribe = this.repository.subscribe(() => void this.refresh());
  }

  disconnect(): void {
    this.unsubscribe?.();
    this.unsubscribe = null;
  }

  async refresh(): Promise<void> {
    const study = await this.repository.findById(this.studyId);

    if (!study) {
      this.setState({ study: null, subject: null, related: [], headings: [], loading: false, error: 'This study is no longer in the vault.' });
      return;
    }

    const all = await this.repository.list();
    const thread = all
      .filter((entry) => entry.subjectId === study.subjectId)
      .sort(
        (a, b) =>
          (a.sortOrder ?? 0) - (b.sortOrder ?? 0) ||
          a.createdAt.localeCompare(b.createdAt) ||
          a.title.localeCompare(b.title),
      );
    const currentIndex = thread.findIndex((entry) => entry.id === study.id);
    const related = currentIndex >= 0 ? thread.slice(currentIndex + 1, currentIndex + 4) : [];

    if (related.length < 3) {
      const chosen = new Set(related.map((entry) => entry.id));
      const pool = thread.filter((entry) => entry.id !== study.id && !chosen.has(entry.id));

      for (let index = pool.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
      }

      related.push(...pool.slice(0, 3 - related.length));
    }

    this.setState({
      study,
      subject: subjectById(study.subjectId) ?? null,
      related,
      headings: extractHeadings(study.content),
      loading: false,
      error: null,
    });
  }

  async toggleFavorite(): Promise<void> {
    const study = this.state.study;
    if (!study) return;
    await this.repository.update(study.id, { favorite: !study.favorite });
  }

  async remove(): Promise<void> {
    if (!this.state.study) return;
    await this.repository.remove(this.state.study.id);
  }

  exportMarkdown(): void {
    const { study, subject } = this.state;
    if (!study) return;
    downloadStudy(study, subject?.name ?? 'Unfiled');
  }
}
