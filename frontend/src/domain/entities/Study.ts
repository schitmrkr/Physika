import type { Subject } from './Subject';

export type StudyFormat = 'markdown' | 'text' | 'pdf' | 'image';
export type StudyStatus = 'draft' | 'published' | 'archived';
export type StudyProvenance = 'ingested' | 'seed';

export interface StudyAttachment {
  id: string;
  name: string;
  mimeType: string;
  size: number;
  kind: 'note' | 'figure' | 'paper';
}

export interface Study {
  id: string;
  title: string;
  abstract: string;
  subjectId: string;
  chapter: string;
  tags: string[];
  content: string;
  format: StudyFormat;
  attachments: StudyAttachment[];
  createdAt: string;
  updatedAt: string;
  readMinutes: number;
  wordCount: number;
  favorite: boolean;
  status: StudyStatus;
  provenance: StudyProvenance;
}

export interface StudyDraft {
  title: string;
  abstract: string;
  subjectId: string;
  chapter: string;
  tags: string[];
  content: string;
  format: StudyFormat;
  attachments: StudyAttachment[];
}

export type StudySort = 'recent' | 'oldest' | 'title' | 'longest';

export interface StudyClassification {
  subject: Subject;
  confidence: number;
  reason: string;
}
