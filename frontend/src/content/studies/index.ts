import gaugeSymmetry1 from './gauge-theory/1-symmetry.md?raw';
import gaugeGroupU1 from './gauge-theory/2-group-u1.md?raw';
import gaugeFieldAndGeometry3 from './gauge-theory/3-gauge-field-and-geometry.md?raw';
import gaugeElectromagnetism4 from './gauge-theory/4-constructing-electromagnetism.md?raw';
import gaugeToQed5 from './gauge-theory/5-gauge-to-qed.md?raw';

import csBlackHolesElementaryDg from './black-holes/1-cs-elementary-differential-geometry.md?raw';

import qftAttemptsAtRelativisticQm1 from './quantum-field-theory/1-attempts-at-relativistic-qm.md?raw';
import qftKleinGordonDirac1_1 from './quantum-field-theory/1.1-klien-gordon-dirac.md?raw';
import qftPauliAndDiracMatrices1_2 from './quantum-field-theory/1.2-pauli-and-dirac-matrices.md?raw';
import qftTransitionToQft1_3 from './quantum-field-theory/1.3-transistion-to-qft.md?raw';

import tensorRiemannianGeo1 from './tensor-riemannian-geometry/1-tensor-and-riemannian-geo.md?raw';
import trgTensors2 from './tensor-riemannian-geometry/2-tensors.md?raw';
import trgCovariantDifferentiation3 from './tensor-riemannian-geometry/3-covariant-differentiation.md?raw';

import schrodingerEquation from './quantum-mechanics/1-schrodinger-equation.md?raw';

import maxwellsEquation from './electromagnetism/maxwells-equations.md?raw';
import electricFields from './electromagnetism/electric-fields.md?raw';
import magneticFields from './electromagnetism/magnetic-fields.md?raw';
import fieldsInMatter from './electromagnetism/fields-in-matter-dipoles-and-polarisation.md?raw';

import gravitationalWaves1 from './gravitational-waves/1-basic-idea.md?raw';
import gravitationalWaves2 from './gravitational-waves/2-simplifying-einstein-equation.md?raw';

import dvcBasic from './differential-vector-calculus/dvc-basic.md?raw';

import dgBasic from './differential-geometry/dg-basic.md?raw';
import dgSurfaceCurves from './differential-geometry/dg-surface-curves.md?raw';
import dgInvolutesExvolutes from './differential-geometry/dg-involutes-exvolutes.md?raw';


export const STUDY_NOTES = {
  gaugeSymmetry1,
  gaugeGroupU1,
  gaugeFieldAndGeometry3,
  gaugeElectromagnetism4,
  gaugeToQed5,
  csBlackHolesElementaryDg,
  qftAttemptsAtRelativisticQm1,
  qftKleinGordonDirac1_1,
  qftPauliAndDiracMatrices1_2,
  qftTransitionToQft1_3,
  tensorRiemannianGeo1,
  trgTensors2,
  trgCovariantDifferentiation3,
  schrodingerEquation,
  electricFields,
  magneticFields,
  maxwellsEquation,
  fieldsInMatter,
  gravitationalWaves1,
  gravitationalWaves2,
  dvcBasic,
  dgBasic,
  dgSurfaceCurves,
  dgInvolutesExvolutes
} as const;
