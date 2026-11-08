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
  private unsubscribe: (() => void) | null = null;

  constructor(private readonly repository: StudyRepository) {
    super({ total: 0, favorites: 0, readings: [], loading: true });
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
    this.setState({
      total: studies.length,
      favorites: studies.filter((study) => study.favorite).length,
      readings: buildSubjectReadings(studies),
      loading: false,
    });
  }
}
