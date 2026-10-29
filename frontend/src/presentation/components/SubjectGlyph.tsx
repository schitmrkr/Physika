import {
  ArrowUpRight,
  Atom,
  CircuitBoard,
  Disc3,
  Grid3X3,
  Infinity as InfinityIcon,
  Magnet,
  Orbit,
  Sigma,
  Sparkles,
  Spline,
  Waves,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { SubjectGlyph as SubjectGlyphName } from '../../domain/entities/Subject';

const GLYPHS: Record<SubjectGlyphName, LucideIcon> = {
  atom: Atom,
  orbit: Orbit,
  waves: Waves,
  magnet: Magnet,
  bolt: Zap,
  circuit: CircuitBoard,
  grid: Grid3X3,
  curve: Spline,
  horizon: Disc3,
  sigma: Sigma,
  spark: Sparkles,
  arrow: ArrowUpRight,
  infinity: InfinityIcon,
};

interface SubjectGlyphProps {
  glyph: SubjectGlyphName;
  size?: number;
  className?: string;
}

export const SubjectGlyph = ({ glyph, size = 16, className }: SubjectGlyphProps) => {
  const Glyph = GLYPHS[glyph];
  return <Glyph size={size} strokeWidth={1.7} className={className} aria-hidden="true" />;
};
