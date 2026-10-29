import symmetry from './gauge-theory/symmetry-and-physical-equivalence.md?raw';
import tetrads from './black-holes/tetrads-four-legs-for-curved-spacetime.md?raw';
import kleinGordon from './quantum-field-theory/klein-gordon-the-first-relativistic-attempt.md?raw';
import curvature from './tensor-riemannian-geometry/curvature-as-the-failure-to-commute.md?raw';
import schrodinger from './quantum-mechanics/schrodinger-from-a-plane-wave.md?raw';
import fieldsInMatter from './circuits-signal-theory/fields-in-matter-dipoles-and-polarisation.md?raw';

export const STUDY_NOTES = {
  symmetry,
  tetrads,
  kleinGordon,
  curvature,
  schrodinger,
  fieldsInMatter,
} as const;
