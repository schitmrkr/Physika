export type SimulationLevel = 'introductory' | 'intermediate' | 'advanced';

export interface Simulation {
  id: string;
  title: string;
  subjectId: string;
  chapter: string;
  summary: string;
  tags: string[];
  level: SimulationLevel;
  studyId: string;
  equations: string[];
}
