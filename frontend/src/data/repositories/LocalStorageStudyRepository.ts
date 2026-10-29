import type { Study } from '../../domain/entities/Study';
import type { StudyRepository } from '../../domain/repositories/StudyRepository';
import { SEED_STUDIES } from '../seed/seedStudies';

export const VAULT_STORAGE_KEY = 'physika.vault.v1';

const isStudy = (value: unknown): value is Study => {
  if (!value || typeof value !== 'object') return false;
  const study = value as Partial<Study>;
  return (
    typeof study.id === 'string' &&
    typeof study.title === 'string' &&
    typeof study.subjectId === 'string' &&
    typeof study.content === 'string' &&
    typeof study.createdAt === 'string'
  );
};

const sortStudies = (studies: Study[]): Study[] =>
  [...studies].sort((a, b) => b.createdAt.localeCompare(a.createdAt));

export class LocalStorageStudyRepository implements StudyRepository {
  private studies: Study[];
  private readonly listeners = new Set<() => void>();

  constructor(private readonly storageKey = VAULT_STORAGE_KEY) {
    this.studies = sortStudies(this.load());
    window.addEventListener('storage', this.handleStorageEvent);
  }

  async list(): Promise<Study[]> {
    return this.studies.map((study) => ({ ...study }));
  }

  async findById(id: string): Promise<Study | null> {
    const study = this.studies.find((entry) => entry.id === id);
    return study ? { ...study } : null;
  }

  async save(study: Study): Promise<Study> {
    const exists = this.studies.some((entry) => entry.id === study.id);
    const next = exists
      ? this.studies.map((entry) => (entry.id === study.id ? study : entry))
      : [study, ...this.studies];

    this.studies = sortStudies(next);
    this.persist();
    this.notify();
    return { ...study };
  }

  async update(id: string, patch: Partial<Study>): Promise<Study | null> {
    const current = this.studies.find((entry) => entry.id === id);
    if (!current) return null;

    const next: Study = {
      ...current,
      ...patch,
      id: current.id,
      updatedAt: new Date().toISOString(),
    };

    this.studies = this.studies.map((entry) => (entry.id === id ? next : entry));
    this.persist();
    this.notify();
    return { ...next };
  }

  async remove(id: string): Promise<void> {
    const next = this.studies.filter((entry) => entry.id !== id);
    if (next.length === this.studies.length) return;

    this.studies = next;
    this.persist();
    this.notify();
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private load(): Study[] {
    const seeds = SEED_STUDIES.map((study) => ({ ...study }));
    try {
      const raw = window.localStorage.getItem(this.storageKey);
      if (!raw) {
        window.localStorage.setItem(this.storageKey, JSON.stringify(seeds));
        return seeds;
      }

      const parsed: unknown = JSON.parse(raw);
      if (!Array.isArray(parsed)) return seeds;

      const valid = parsed.filter(isStudy);
      const stored = valid.length > 0 || parsed.length === 0 ? valid : seeds;
      const seedById = new Map(seeds.map((seed) => [seed.id, seed]));
      const seen = new Set<string>();
      let changed = parsed.length !== valid.length;

      const synced: Study[] = [];
      for (const study of stored) {
        const seed = seedById.get(study.id);
        if (!seed) {
          if (study.provenance === 'seed') {
            changed = true;
            continue;
          }
          synced.push(study);
          continue;
        }

        seen.add(study.id);
        const next: Study = {
          ...seed,
          favorite: study.favorite,
          updatedAt: study.updatedAt,
        };
        if (JSON.stringify(next) !== JSON.stringify(study)) changed = true;
        synced.push(next);
      }

      for (const seed of seeds) {
        if (seen.has(seed.id)) continue;
        synced.push(seed);
        changed = true;
      }

      if (changed) {
        window.localStorage.setItem(this.storageKey, JSON.stringify(synced));
      }

      return synced;
    } catch {
      return seeds;
    }
  }

  private persist(): void {
    window.localStorage.setItem(this.storageKey, JSON.stringify(this.studies));
  }

  private notify(): void {
    this.listeners.forEach((listener) => listener());
  }

  private readonly handleStorageEvent = (event: StorageEvent): void => {
    if (event.key !== this.storageKey || !event.newValue) return;

    try {
      const parsed: unknown = JSON.parse(event.newValue);
      if (Array.isArray(parsed)) {
        this.studies = sortStudies(parsed.filter(isStudy));
        this.notify();
      }
    } catch {
      // Ignore malformed cross-tab payloads.
    }
  };
}
