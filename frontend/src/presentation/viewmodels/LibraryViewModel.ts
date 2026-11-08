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
  shuffleSeed: number;
  favoritesOnly: boolean;
  loading: boolean;
}

const createShuffleSeed = (): number => Math.floor(Math.random() * 0xffffffff);

const shuffleRank = (id: string, seed: number): number => {
  let hash = 2166136261 ^ seed;
  for (let index = 0; index < id.length; index += 1) {
    hash ^= id.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

export class LibraryViewModel extends ViewModel<LibraryState> {
  private unsubscribe: (() => void) | null = null;

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
      sort: 'random',
      shuffleSeed: createShuffleSeed(),
      favoritesOnly: false,
      loading: true,
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

  get visibleStudies(): Study[] {
    const { studies, query, subjectId, sort, shuffleSeed, favoritesOnly } = this.state;
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

    const favoriteFirst = (a: Study, b: Study): number =>
      subjectId === null ? Number(b.favorite) - Number(a.favorite) : 0;

    if (sort === 'random') {
      const hasSortOrder =
        subjectId !== null && filtered.some((study) => study.sortOrder > 0);

      if (hasSortOrder) {
        const orderOf = (study: Study): number =>
          study.sortOrder > 0 ? study.sortOrder : Number.MAX_SAFE_INTEGER;

        return filtered.sort(
          (a, b) =>
            favoriteFirst(a, b) ||
            orderOf(a) - orderOf(b) ||
            a.createdAt.localeCompare(b.createdAt) ||
            a.title.localeCompare(b.title),
        );
      }

      const ranks = new Map(
        filtered.map((study) => [study.id, shuffleRank(study.id, shuffleSeed)]),
      );
      return filtered.sort(
        (a, b) =>
          favoriteFirst(a, b) ||
          (ranks.get(a.id) ?? 0) - (ranks.get(b.id) ?? 0) ||
          a.id.localeCompare(b.id),
      );
    }

    return filtered.sort((a, b) => {
      const favorites = favoriteFirst(a, b);
      if (favorites !== 0) return favorites;
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
    if (subjectId !== null) {
      this.setState({ subjectId, sort: 'random' });
      return;
    }
    this.setState({ subjectId });
  }

  setSort(sort: StudySort): void {
    this.setState({ sort });
  }

  shuffle(): void {
    this.setState({ sort: 'random', shuffleSeed: createShuffleSeed() });
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
}
