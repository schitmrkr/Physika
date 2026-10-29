import type { CSSProperties } from 'react';
import type { Subject } from '../../domain/entities/Subject';

interface SubjectBadgeProps {
  subject: Subject;
  compact?: boolean;
}

export const SubjectBadge = ({ subject, compact = false }: SubjectBadgeProps) => (
  <span
    className="subject-badge"
    style={{ '--subject': subject.accent, '--subject-soft': subject.tint } as CSSProperties}
  >
    <span className="subject-badge__dot" />
    {compact ? subject.code : subject.shortName}
  </span>
);
