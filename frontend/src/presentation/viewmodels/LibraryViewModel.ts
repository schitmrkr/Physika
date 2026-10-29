import type { Study, StudySort } from '../../domain/entities/Study';
import type { SubjectReading } from '../../domain/entities/Subject';
import type { StudyRepository } from '../../domain/repositories/StudyRepository';
import { buildSubjectReadings } from '../../domain/services/VaultAnalytics';
import { ViewModel } from '../core/ViewModel';

export interface LibraryState {
  studies: Study[];
  readings: SubjectReading[];
  query: string;
  subjectId: string | null;
  sort: StudySort;
  favoritesOnly: boolean;
  loading: boolean;
}

export class LibraryViewModel extends ViewModel<LibraryState> {
  private readonly unsubscribe: () => void;

  constructor(
    private readonly repository: StudyRepository,
    initialSubject: string | null = null,
    initialQuery = '',
  ) {
    super({
      studies: [],
      readings: [],
      query: initialQuery,
      subjectId: initialSubject,
      sort: 'recent',
      favoritesOnly: false,
      loading: true,
    });
    this.unsubscribe = repository.subscribe(() => void this.refresh());
    void this.refresh();
  }

  get visibleStudies(): Study[] {
    const { studies, query, subjectId, sort, favoritesOnly } = this.state;
    const needle = query.trim().toLowerCase();

    const filtered = studies.filter((study) => {
      if (subjectId && study.subjectId !== subjectId) return false;
      if (favoritesOnly && !study.favorite) return false;
      if (!needle) return true;

      const haystack = [
        study.title,
        study.abstract,
        study.chapter,
        study.tags.join(' '),
        study.content,
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(needle);
    });

    return filtered.sort((a, b) => {
      if (sort === 'title') return a.title.localeCompare(b.title);
      if (sort === 'oldest') return a.createdAt.localeCompare(b.createdAt);
      if (sort === 'longest') return b.readMinutes - a.readMinutes;
      return b.createdAt.localeCompare(a.createdAt);
    });
  }

  get activeReading(): SubjectReading | undefined {
    return this.state.readings.find((reading) => reading.subject.id === this.state.subjectId);
  }

  get resultCount(): number {
    return this.visibleStudies.length;
  }

  async refresh(): Promise<void> {
    const studies = await this.repository.list();
    this.setState({ studies, readings: buildSubjectReadings(studies), loading: false });
  }

  setQuery(query: string): void {
    this.setState({ query });
  }

  setSubject(subjectId: string | null): void {
    this.setState({ subjectId });
  }

  setSort(sort: StudySort): void {
    this.setState({ sort });
  }

  toggleFavoritesOnly(): void {
    this.setState((state) => ({ ...state, favoritesOnly: !state.favoritesOnly }));
  }

  async toggleFavorite(id: string): Promise<void> {
    const study = this.state.studies.find((entry) => entry.id === id);
    if (!study) return;
    await this.repository.update(id, { favorite: !study.favorite });
  }

  async deleteStudy(id: string): Promise<void> {
    await this.repository.remove(id);
  }

  dispose(): void {
    this.unsubscribe();
    super.dispose();
  }
}
