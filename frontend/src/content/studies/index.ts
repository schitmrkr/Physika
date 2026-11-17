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
import trgCurvatureTensor4 from './tensor-riemannian-geometry/4-curvature-tensor.md?raw';
import trgGeodesic5 from './tensor-riemannian-geometry/5-geodesic.md?raw';
import trgSpecialRelativity6 from './tensor-riemannian-geometry/6-special-theory-of-relativity.md?raw';
import trgEinsteinFieldEquations7 from './tensor-riemannian-geometry/7-einstein-field-equations.md?raw';

import qmSchrodingerEquation1 from './quantum-mechanics/1-schrodinger-equation.md?raw';
import qmTimeIndependentSchrodinger2 from './quantum-mechanics/2-time-independent-schrodinger.md?raw';
import qmHarmonicOscillator2_2 from './quantum-mechanics/2.1-harmonic-oscillator.md?raw';
import qmFreeParticles2_3 from './quantum-mechanics/2.2-free-particles.md?raw';
import qmHilbertSpace3 from './quantum-mechanics/3-hilbert-space.md?raw';
import qmObservables3_1 from './quantum-mechanics/3.1-observables.md?raw';
import qmUncertaintyPrinciple3_2 from './quantum-mechanics/3.2-uncertainty-principle.md?raw';
import qmQm3d1 from './quantum-mechanics/4-qm-3d.md?raw';
import qmHydrogenatom4_1 from './quantum-mechanics/4.1-hydrogen-atom.md?raw';
import qmAngularMomentum4_2 from './quantum-mechanics/4.2-angular-momentum.md?raw';
import qmSpin4_3 from './quantum-mechanics/4.3-spin.md?raw';
import qmIdenticalParticles5 from './quantum-mechanics/5-identical-particles.md?raw';
import qmSymmetriesConservation6 from './quantum-mechanics/6-symmetries-conservation.md?raw';


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


export const STUDY_NOTE_ASSET_BASES = {
  qmHydrogenatom4_1: 'quantum-mechanics',
} as const;

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
  trgCurvatureTensor4,
  trgGeodesic5,
  trgSpecialRelativity6,
  trgEinsteinFieldEquations7,
  qmSchrodingerEquation1,
  qmTimeIndependentSchrodinger2,
  qmHarmonicOscillator2_2,
  qmFreeParticles2_3,
  qmHilbertSpace3,
  qmObservables3_1,
  qmUncertaintyPrinciple3_2,
  qmQm3d1,
  qmHydrogenatom4_1,
  qmAngularMomentum4_2,
  qmSpin4_3,
  qmIdenticalParticles5,
  qmSymmetriesConservation6,
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
