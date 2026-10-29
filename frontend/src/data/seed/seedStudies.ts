import type { Study, StudyFormat } from '../../domain/entities/Study';
import { STUDY_NOTES } from '../../content/studies';
import { countWords, excerptFrom, readingMinutes } from '../../shared/lib/text';

interface SeedInput {
  id: string;
  title: string;
  subjectId: string;
  chapter: string;
  tags: string[];
  content: string;
  createdAt: string;
  format?: StudyFormat;
  favorite?: boolean;
}

const makeSeed = (input: SeedInput): Study => ({
  id: input.id,
  title: input.title,
  abstract: excerptFrom(input.content, 210),
  subjectId: input.subjectId,
  chapter: input.chapter,
  tags: input.tags,
  content: input.content,
  format: input.format ?? 'markdown',
  attachments: [],
  createdAt: input.createdAt,
  updatedAt: input.createdAt,
  readMinutes: readingMinutes(input.content),
  wordCount: countWords(input.content),
  favorite: input.favorite ?? false,
  status: 'published',
  provenance: 'seed',
});

export const SEED_STUDIES: Study[] = [
  makeSeed({
    id: 'gauge-symmetry-1',
    title: '1. Symmetry and Physical Equivalence',
    subjectId: 'gauge-theory',
    chapter: 'Symmetry',
    tags: ['symmetry', 'action', 'gauge', 'invariance'],
    content: STUDY_NOTES.gaugesymmetry1,
    createdAt: '2026-10-27T18:40:00.000Z',
    favorite: true,
  }),
  makeSeed({
    id: 'gauge-group-u1-2',
    title: '2. Group U(1), Phase Rotations, and Infinitesimal Transformations',
    subjectId: 'gauge-theory',
    chapter: 'Group U(1)',
    tags: ['symmetry', 'action', 'gauge', 'invariance'],
    content: STUDY_NOTES.gaugegroupu1,
    createdAt: '2026-10-27T18:40:00.000Z',
    favorite: true,
  }),
  makeSeed({
    id: 'gauge-field-and-geometry-3',
    title: '3. Gauge Field and Geometry',
    subjectId: 'gauge-theory',
    chapter: 'Gauge Field',
    tags: ['symmetry', 'action', 'gauge', 'invariance'],
    content: STUDY_NOTES.guagefieldandgeometry3,
    createdAt: '2026-10-27T18:40:00.000Z',
    favorite: true,
  }),
  makeSeed({
    id: 'seed_tetrads',
    title: 'Tetrads: Four Legs for Curved Spacetime',
    subjectId: 'black-holes',
    chapter: 'Tetrad formalism',
    tags: ['tetrad', 'frame-fields', 'curvature', 'spin-connection'],
    content: STUDY_NOTES.tetrads,
    createdAt: '2026-10-24T09:12:00.000Z',
  }),
  makeSeed({
    id: 'seed_klein_gordon',
    title: 'Klein–Gordon: The First Relativistic Attempt',
    subjectId: 'quantum-field-theory',
    chapter: 'Relativistic quantum mechanics',
    tags: ['klein-gordon', 'relativity', 'negative-energy'],
    content: STUDY_NOTES.kleinGordon,
    createdAt: '2026-10-20T16:05:00.000Z',
    favorite: true,
  }),
  makeSeed({
    id: 'seed_curvature_commutator',
    title: 'Curvature as the Failure to Commute',
    subjectId: 'tensor-riemannian-geometry',
    chapter: 'Curvature',
    tags: ['riemann-tensor', 'ricci', 'covariant-derivative'],
    content: STUDY_NOTES.curvature,
    createdAt: '2026-10-16T11:25:00.000Z',
  }),
  makeSeed({
    id: 'seed_schrodinger_plane_wave',
    title: 'Schrödinger from a Plane Wave',
    subjectId: 'quantum-mechanics',
    chapter: 'Foundations',
    tags: ['schrodinger', 'plane-wave', 'de-broglie'],
    content: STUDY_NOTES.schrodinger,
    createdAt: '2026-10-09T20:18:00.000Z',
  }),
  makeSeed({
    id: 'seed_fields_in_matter',
    title: 'Fields in Matter: Dipoles & Polarisation',
    subjectId: 'circuits-signal-theory',
    chapter: 'Fields in matter',
    tags: ['polarisation', 'dipole', 'maxwell'],
    content: STUDY_NOTES.fieldsInMatter,
    createdAt: '2026-09-30T13:48:00.000Z',
  }),
];
