import type { Study } from '../entities/Study';
import type { Subject, SubjectReading } from '../entities/Subject';
import { SUBJECTS } from '../taxonomy/subjects';

export const buildSubjectReadings = (studies: Study[], subjects: Subject[] = SUBJECTS): SubjectReading[] =>
  subjects
    .map((subject) => {
      const entries = studies.filter((study) => study.subjectId === subject.id);
      const latest = entries.reduce<string | null>(
        (current, study) => (!current || study.createdAt > current ? study.createdAt : current),
        null,
      );
      return { subject, count: entries.length, latest };
    })
    .sort((a, b) => b.count - a.count || a.subject.name.localeCompare(b.subject.name));
