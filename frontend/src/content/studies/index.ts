import gaugesymmetry1 from './gauge-theory/1-symmetry.md?raw';
import gaugegroupu1 from './gauge-theory/2-group-u1.md?raw';
import guagefieldandgeometry3 from './gauge-theory/3-gauge-field-and-geometry.md?raw';

import tetrads from './black-holes/tetrads-four-legs-for-curved-spacetime.md?raw';
import kleinGordon from './quantum-field-theory/klein-gordon-the-first-relativistic-attempt.md?raw';
import curvature from './tensor-riemannian-geometry/curvature-as-the-failure-to-commute.md?raw';
import schrodinger from './quantum-mechanics/schrodinger-from-a-plane-wave.md?raw';
import fieldsInMatter from './circuits-signal-theory/fields-in-matter-dipoles-and-polarisation.md?raw';

export const STUDY_NOTES = {
  gaugesymmetry1,
  gaugegroupu1,
  guagefieldandgeometry3,
  tetrads,
  kleinGordon,
  curvature,
  schrodinger,
  fieldsInMatter,
} as const;
