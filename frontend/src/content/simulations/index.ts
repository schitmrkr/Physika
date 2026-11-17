import { lazy, type ComponentType, type LazyExoticComponent } from 'react';
import type { Simulation } from '../../domain/entities/Simulation';

export const SIMULATIONS: Simulation[] = [
  {
    id: 'schrodinger-equation-1',
    title: '1. The Schrödinger Equation',
    subjectId: 'quantum-mechanics',
    chapter: 'Foundations',
    summary:
      'Evolve a Gaussian wavepacket under the time-dependent Schrödinger equation and inspect the wavefunction in real space and in the complex plane.',
    tags: ['schrodinger', 'wavefunction', 'finite difference', 'spectral solver'],
    level: 'intermediate',
    studyId: 'seed_schrodinger_plane_wave',
    equations: [
      '$$i \\hbar \\frac{\\partial \\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m} \\frac{\\partial^2 \\Psi}{\\partial x^2} + V \\Psi$$',
      '$$\\Psi(x,t) = \\sum_n c_n \\phi_n(x) e^{-i E_n t / \\hbar}$$',
    ],
  },
];

export const SIMULATION_COMPONENTS: Record<string, LazyExoticComponent<ComponentType>> = {
  'schrodinger-equation-1': lazy(() => import('./quantum-mechanics/1-schrodinger-equation')),
};

export const simulationById = (id: string): Simulation | undefined =>
  SIMULATIONS.find((simulation) => simulation.id === id);

export const simulationsForSubject = (subjectId: string): Simulation[] =>
  SIMULATIONS.filter((simulation) => simulation.subjectId === subjectId);

export const simulationsForStudy = (studyId: string): Simulation[] =>
  SIMULATIONS.filter((simulation) => simulation.studyId === studyId);
