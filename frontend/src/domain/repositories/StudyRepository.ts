import type { Study } from '../entities/Study';

export interface StudyRepository {
  list(): Promise<Study[]>;
  findById(id: string): Promise<Study | null>;
  save(study: Study): Promise<Study>;
  update(id: string, patch: Partial<Study>): Promise<Study | null>;
  remove(id: string): Promise<void>;
  subscribe(listener: () => void): () => void;
}
