import type { CSSProperties, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Clock3, FileText, Star } from 'lucide-react';
import type { Study } from '../../domain/entities/Study';
import { SUBJECTS, subjectById } from '../../domain/taxonomy/subjects';
import { formatLabel } from '../../shared/lib/files';
import { SubjectGlyph } from './SubjectGlyph';
import { TagPill } from './TagPill';

interface StudyCardProps {
  study: Study;
  onToggleFavorite?: (id: string) => void;
}

export const StudyCard = ({ study, onToggleFavorite }: StudyCardProps) => {
  const subject = subjectById(study.subjectId) ?? SUBJECTS[0];

  const handleFavorite = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    onToggleFavorite?.(study.id);
  };

  return (
    <article
      className="study-card"
      style={{ '--subject': subject.accent, '--subject-soft': subject.tint } as CSSProperties}
    >
      <div className="study-card__head">
        <span className="study-card__subject">
          <SubjectGlyph glyph={subject.glyph} size={15} />
          {subject.code}
        </span>
        {onToggleFavorite && (
          <button
            type="button"
            className={`icon-button icon-button--small ${study.favorite ? 'is-active' : ''}`}
            onClick={handleFavorite}
            aria-label={study.favorite ? 'Remove from pinned studies' : 'Pin this study'}
          >
            <Star size={14} fill={study.favorite ? 'currentColor' : 'none'} />
          </button>
        )}
      </div>

      <Link to={`/vault/${study.id}`} className="study-card__body">
        <h3>{study.title}</h3>
        <p>{study.abstract || 'No abstract yet — open the note to read the full entry.'}</p>
      </Link>

      <div className="study-card__foot">
        <span className="study-card__meta">
          <span>
            <FileText size={12} />
            {formatLabel(study.format)}
          </span>
          <span>
            <Clock3 size={12} />
            {study.readMinutes} min
          </span>
        </span>
        {study.tags.length > 0 && (
          <div className="tag-row tag-row--compact">
            {study.tags.slice(0, 3).map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
