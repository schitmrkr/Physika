import type { CSSProperties, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Gauge, Star } from 'lucide-react';
import type { Simulation } from '../../domain/entities/Simulation';
import type { Subject } from '../../domain/entities/Subject';
import { SubjectGlyph } from './SubjectGlyph';
import { TagPill } from './TagPill';

interface SimulationCardProps {
  simulation: Simulation;
  subject: Subject;
  favorite: boolean;
  onToggleFavorite: () => void;
}

export const SimulationCard = ({
  simulation,
  subject,
  favorite,
  onToggleFavorite,
}: SimulationCardProps) => {
  const handleFavorite = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    onToggleFavorite();
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
        <button
          type="button"
          className={`icon-button icon-button--small ${favorite ? 'is-active' : ''}`}
          onClick={handleFavorite}
          aria-label={favorite ? 'Remove from pinned studies' : 'Pin this study'}
        >
          <Star size={14} fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      <Link to={`/simulations/${simulation.id}`} className="study-card__body">
        <h3>{simulation.title}</h3>
        <p>{simulation.summary}</p>
      </Link>

      <div className="study-card__foot">
        <span className="study-card__meta">
          <span>
            <Activity size={12} />
            Interactive
          </span>
          <span>
            <Gauge size={12} />
            {simulation.level}
          </span>
        </span>
        {simulation.tags.length > 0 && (
          <div className="tag-row tag-row--compact">
            {simulation.tags.slice(0, 3).map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
