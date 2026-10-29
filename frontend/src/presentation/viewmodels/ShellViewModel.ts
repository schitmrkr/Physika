import type { StudyRepository } from '../../domain/repositories/StudyRepository';
import { buildSubjectReadings } from '../../domain/services/VaultAnalytics';
import type { SubjectReading } from '../../domain/entities/Subject';
import { ViewModel } from '../core/ViewModel';

export interface ShellState {
  total: number;
  favorites: number;
  readings: SubjectReading[];
  loading: boolean;
}

export class ShellViewModel extends ViewModel<ShellState> {
  private readonly unsubscribe: () => void;

  constructor(private readonly repository: StudyRepository) {
    super({ total: 0, favorites: 0, readings: [], loading: true });
    this.unsubscribe = repository.subscribe(() => void this.refresh());
    void this.refresh();
  }

  async refresh(): Promise<void> {
    const studies = await this.repository.list();
    this.setState({
      total: studies.length,
      favorites: studies.filter((study) => study.favorite).length,
      readings: buildSubjectReadings(studies),
      loading: false,
    });
  }

  dispose(): void {
    this.unsubscribe();
    super.dispose();
  }
}
