export type SubjectGlyph =
  | 'atom'
  | 'orbit'
  | 'waves'
  | 'magnet'
  | 'bolt'
  | 'circuit'
  | 'grid'
  | 'curve'
  | 'horizon'
  | 'sigma'
  | 'spark'
  | 'arrow'
  | 'infinity';

export interface Subject {
  id: string;
  name: string;
  shortName: string;
  code: string;
  description: string;
  accent: string;
  tint: string;
  glyph: SubjectGlyph;
  chapters: string[];
  keywords: string[];
}

export interface SubjectReading {
  subject: Subject;
  count: number;
  latest: string | null;
}
