import { abs, complex, conj, evaluate, multiply, sqrt, type Complex } from 'mathjs';
import { EigenvalueDecomposition, Matrix } from 'ml-matrix';

export type PotentialKind = 'free' | 'well' | 'harmonic' | 'barrier';

export interface EngineSettings {
  potential: PotentialKind;
  sigma: number;
  k0: number;
  x0: number;
  omega: number;
  barrierHeight: number;
  mass: number;
}

export interface Eigensystem {
  x: Float64Array;
  dx: number;
  potential: Float64Array;
  energies: Float64Array;
  weights: { re: Float64Array; im: Float64Array }[];
  coefficients: Complex[];
}

export interface WaveState {
  re: Float64Array;
  im: Float64Array;
  density: Float64Array;
}

export interface Observables {
  norm: number;
  position: number;
  momentum: number;
  energy: number;
  groundEnergy: number;
}

export const POTENTIALS: { id: PotentialKind; label: string; expression: string }[] = [
  { id: 'well', label: 'Box', expression: 'abs(x) > 9 ? 20000 : 0' },
  { id: 'harmonic', label: 'Oscillator', expression: '0.5 * omega^2 * x^2' },
  { id: 'barrier', label: 'Barrier', expression: 'abs(x) < 2.2 ? V0 : 0' },
  { id: 'free', label: 'Free', expression: '0' },
];

const GRID_POINTS = 192;
const DOMAIN = 24;
const HBAR = 1;

export const buildEigensystem = (settings: EngineSettings): Eigensystem => {
  const dx = DOMAIN / (GRID_POINTS - 1);
  const x = new Float64Array(GRID_POINTS);
  const potential = new Float64Array(GRID_POINTS);
  const envelope = new Float64Array(GRID_POINTS);
  const expression = POTENTIALS.find((item) => item.id === settings.potential)?.expression ?? '0';

  for (let j = 0; j < GRID_POINTS; j += 1) {
    x[j] = -DOMAIN / 2 + j * dx;
    potential[j] = Number(
      evaluate(expression, {
        x: x[j],
        omega: settings.omega,
        V0: settings.barrierHeight,
      }),
    );
    envelope[j] = Number(
      evaluate('(2*pi*sigma^2)^(-1/4) * exp(-(x-x0)^2/(4*sigma^2))', {
        x: x[j],
        x0: settings.x0,
        sigma: settings.sigma,
      }),
    );
  }

  const hamiltonian = Matrix.zeros(GRID_POINTS, GRID_POINTS);
  const kinetic = (HBAR * HBAR) / (2 * settings.mass * dx * dx);
  for (let j = 0; j < GRID_POINTS; j += 1) {
    hamiltonian.set(j, j, kinetic + potential[j]);
    if (j > 0) hamiltonian.set(j, j - 1, -kinetic);
    if (j < GRID_POINTS - 1) hamiltonian.set(j, j + 1, -kinetic);
  }

  const decomposition = new EigenvalueDecomposition(hamiltonian, { assumeSymmetric: true });
  const rawEnergies = decomposition.realEigenvalues;
  const vectors = decomposition.eigenvectorMatrix;
  const order = rawEnergies.map((_, index) => index).sort((a, b) => rawEnergies[a] - rawEnergies[b]);
  const energies = new Float64Array(GRID_POINTS);
  const modes: Float64Array[] = [];

  for (let n = 0; n < GRID_POINTS; n += 1) {
    energies[n] = rawEnergies[order[n]];
    const mode = new Float64Array(GRID_POINTS);
    let norm = 0;
    for (let j = 0; j < GRID_POINTS; j += 1) {
      const value = vectors.get(j, order[n]);
      mode[j] = value;
      norm += value * value;
    }
    const scale = 1 / (sqrt(norm * dx) as number);
    for (let j = 0; j < GRID_POINTS; j += 1) mode[j] *= scale;
    modes.push(mode);
  }

  const coefficients: Complex[] = [];
  const weights: { re: Float64Array; im: Float64Array }[] = [];

  for (let n = 0; n < GRID_POINTS; n += 1) {
    let coefficient = complex(0, 0);
    for (let j = 0; j < GRID_POINTS; j += 1) {
      const contribution = multiply(
        complex(modes[n][j] * envelope[j], 0),
        complex(Math.cos(settings.k0 * x[j]), Math.sin(settings.k0 * x[j])),
      ) as Complex;
      coefficient = complex(
        coefficient.re + contribution.re * dx,
        coefficient.im + contribution.im * dx,
      );
    }
    coefficients.push(coefficient);

    const weightRe = new Float64Array(GRID_POINTS);
    const weightIm = new Float64Array(GRID_POINTS);
    for (let j = 0; j < GRID_POINTS; j += 1) {
      weightRe[j] = coefficient.re * modes[n][j];
      weightIm[j] = coefficient.im * modes[n][j];
    }
    weights.push({ re: weightRe, im: weightIm });
  }

  return { x, dx, potential, energies, weights, coefficients };
};

export const evolve = (system: Eigensystem, time: number): WaveState => {
  const re = new Float64Array(GRID_POINTS);
  const im = new Float64Array(GRID_POINTS);
  const density = new Float64Array(GRID_POINTS);

  for (let n = 0; n < GRID_POINTS; n += 1) {
    const phaseRe = Math.cos((system.energies[n] * time) / HBAR);
    const phaseIm = -Math.sin((system.energies[n] * time) / HBAR);
    const weight = system.weights[n];
    for (let j = 0; j < GRID_POINTS; j += 1) {
      re[j] += weight.re[j] * phaseRe - weight.im[j] * phaseIm;
      im[j] += weight.re[j] * phaseIm + weight.im[j] * phaseRe;
    }
  }

  for (let j = 0; j < GRID_POINTS; j += 1) {
    density[j] = abs(complex(re[j], im[j])) ** 2;
  }

  return { re, im, density };
};

export const measure = (system: Eigensystem, state: WaveState): Observables => {
  let norm = 0;
  let position = 0;
  let momentum = 0;
  let energy = 0;

  for (let j = 0; j < GRID_POINTS; j += 1) {
    norm += state.density[j] * system.dx;
    position += system.x[j] * state.density[j] * system.dx;
    energy += abs(system.coefficients[j]) ** 2 * system.energies[j];
  }

  for (let j = 1; j < GRID_POINTS - 1; j += 1) {
    const z = complex(state.re[j], state.im[j]);
    const derivative = complex(
      (state.re[j + 1] - state.re[j - 1]) / (2 * system.dx),
      (state.im[j + 1] - state.im[j - 1]) / (2 * system.dx),
    );
    const product = multiply(conj(z), derivative) as Complex;
    momentum += HBAR * product.im * system.dx;
  }

  return {
    norm: sqrt(norm) as number,
    position,
    momentum,
    energy,
    groundEnergy: system.energies[0],
  };
};

export const gridSize = (): number => GRID_POINTS;
