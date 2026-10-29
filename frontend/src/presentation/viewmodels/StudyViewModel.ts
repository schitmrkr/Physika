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
  private readonly unsubscribe: () => void;

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
    this.unsubscribe = repository.subscribe(() => void this.refresh());
    void this.refresh();
  }

  async refresh(): Promise<void> {
    const study = await this.repository.findById(this.studyId);

    if (!study) {
      this.setState({ study: null, subject: null, related: [], headings: [], loading: false, error: 'This study is no longer in the vault.' });
      return;
    }

    const all = await this.repository.list();
    const related = all
      .filter((entry) => entry.id !== study.id && entry.subjectId === study.subjectId)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .slice(0, 3);

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

  dispose(): void {
    this.unsubscribe();
    super.dispose();
  }
}
