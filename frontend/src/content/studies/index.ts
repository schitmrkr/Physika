import gaugesymmetry1 from './gauge-theory/1-symmetry.md?raw';
import gaugegroupu1 from './gauge-theory/2-group-u1.md?raw';
import guagefieldandgeometry3 from './gauge-theory/3-gauge-field-and-geometry.md?raw';
import gaugeelectromagnetism4 from './gauge-theory/4-constructing-electromagnetism.md?raw';
import gaugetoqed5 from './gauge-theory/5-gauge-to-qed.md?raw';

import tetrads from './black-holes/tetrads-four-legs-for-curved-spacetime.md?raw';

import qftattempsatrelativisticqm1 from './quantum-field-theory/1-attempts-at-relativistic-qm.md?raw';
import qftkliengordondirac1_1 from './quantum-field-theory/1.1-klien-gordon-dirac.md?raw';
import qftpaulianddiracmatrices1_2 from './quantum-field-theory/1.2-pauli-and-dirac-matrices.md?raw';
import qfttransistiontoqft1_3 from './quantum-field-theory/1.3-transistion-to-qft.md?raw';

import curvature from './tensor-riemannian-geometry/curvature-as-the-failure-to-commute.md?raw';
import schrodinger from './quantum-mechanics/schrodinger-from-a-plane-wave.md?raw';
import fieldsInMatter from './circuits-signal-theory/fields-in-matter-dipoles-and-polarisation.md?raw';

export const STUDY_NOTES = {
  gaugesymmetry1,
  gaugegroupu1,
  guagefieldandgeometry3,
  gaugeelectromagnetism4,
  gaugetoqed5, 
  tetrads,
  qftattempsatrelativisticqm1,
  qftkliengordondirac1_1,
  qftpaulianddiracmatrices1_2,
  qfttransistiontoqft1_3,
  curvature,
  schrodinger,
  fieldsInMatter,
} as const;
