import type { StudyRepository } from '../../domain/repositories/StudyRepository';
import { ViewModel } from '../core/ViewModel';

export interface SimulationLibraryState {
  favoriteStudyIds: string[];
}

export class SimulationLibraryViewModel extends ViewModel<SimulationLibraryState> {
  private unsubscribe: (() => void) | null = null;

  constructor(private readonly repository: StudyRepository) {
    super({ favoriteStudyIds: [] });
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
    const studies = await this.repository.list();
    this.setState({ favoriteStudyIds: studies.filter((study) => study.favorite).map((study) => study.id) });
  }

  async toggleFavorite(studyId: string): Promise<void> {
    const studies = await this.repository.list();
    const study = studies.find((entry) => entry.id === studyId);
    if (!study) return;
    await this.repository.update(studyId, { favorite: !study.favorite });
  }
}
