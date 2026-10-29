import { useEffect } from 'react';
import type { CSSProperties } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Star, X } from 'lucide-react';
import { useContainer } from '../../app/AppProviders';
import { useViewModel } from '../core/useViewModel';
import { LibraryViewModel } from '../viewmodels/LibraryViewModel';
import { StudyCard } from '../components/StudyCard';
import { SubjectGlyph } from '../components/SubjectGlyph';
import { EmptyState } from '../components/EmptyState';
import type { StudySort } from '../../domain/entities/Study';

const SORT_LABELS: Record<StudySort, string> = {
  recent: 'Newest first',
  oldest: 'Oldest first',
  title: 'Title A–Z',
  longest: 'Longest read',
};

export const LibraryView = () => {
  const container = useContainer();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialSubject = searchParams.get('subject');
  const initialQuery = searchParams.get('q') ?? '';

  const vm = useViewModel(
    () => new LibraryViewModel(container.studies, initialSubject, initialQuery),
    [container],
  );

  const state = vm.getState();
  const activeReading = vm.activeReading;
  const visibleStudies = vm.visibleStudies;

  useEffect(() => {
    vm.setSubject(initialSubject);
  }, [initialSubject, vm]);

  useEffect(() => {
    if (initialQuery) vm.setQuery(initialQuery);
  }, [initialQuery, vm]);

  const chooseSubject = (subjectId: string | null): void => {
    vm.setSubject(subjectId);
    navigate(subjectId ? `/vault?subject=${subjectId}` : '/vault', { replace: true });
  };

  return (
    <div className="page library">
      <div className="field-chips" aria-label="Filter by field">
        <button
          type="button"
          className={`field-chip ${state.subjectId === null ? 'is-active' : ''}`}
          onClick={() => chooseSubject(null)}
        >
          All fields
          <span>{state.studies.length}</span>
        </button>
        {state.readings.map((reading) => (
          <button
            key={reading.subject.id}
            type="button"
            className={`field-chip ${state.subjectId === reading.subject.id ? 'is-active' : ''} ${
              reading.count === 0 ? 'is-dim' : ''
            }`}
            style={{ '--subject': reading.subject.accent } as CSSProperties}
            onClick={() => chooseSubject(reading.subject.id)}
          >
            <i className="field-chip__dot" />
            {reading.subject.shortName}
            <span>{reading.count}</span>
          </button>
        ))}
      </div>

      {activeReading && (
        <section
          className="field-brief"
          style={
            {
              '--subject': activeReading.subject.accent,
              '--subject-soft': activeReading.subject.tint,
            } as CSSProperties
          }
        >
          <div className="field-brief__mark">
            <SubjectGlyph glyph={activeReading.subject.glyph} size={26} />
          </div>
          <div className="field-brief__copy">
            <span className="field-brief__code">{activeReading.subject.code}</span>
            <h2>{activeReading.subject.name}</h2>
            <p>{activeReading.subject.description}</p>
          </div>
          <div className="field-brief__meta">
            <strong>{activeReading.count}</strong>
            <span>{activeReading.count === 1 ? 'entry' : 'entries'}</span>
          </div>
          <button
            type="button"
            className="field-brief__clear"
            onClick={() => chooseSubject(null)}
            aria-label="Clear field filter"
          >
            <X size={16} />
          </button>
        </section>
      )}

      <div className="library-toolbar">
        <label className="search-box">
          <Search size={16} />
          <input
            type="search"
            value={state.query}
            onChange={(event) => vm.setQuery(event.target.value)}
            placeholder="Search titles, chapters, tags, full text…"
            aria-label="Search studies"
          />
          {state.query && (
            <button type="button" onClick={() => vm.setQuery('')} aria-label="Clear search">
              <X size={14} />
            </button>
          )}
        </label>

        <div className="toolbar-actions">
          <button
            type="button"
            className={`filter-button ${state.favoritesOnly ? 'is-active' : ''}`}
            onClick={() => vm.toggleFavoritesOnly()}
          >
            <Star size={14} fill={state.favoritesOnly ? 'currentColor' : 'none'} />
            Pinned
          </button>
          <label className="sort-select">
            <span>Sort</span>
            <select
              value={state.sort}
              onChange={(event) => vm.setSort(event.target.value as StudySort)}
            >
              {Object.entries(SORT_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="result-line">
        <span>
          {visibleStudies.length} {visibleStudies.length === 1 ? 'study' : 'studies'}
          {state.subjectId && activeReading ? ` in ${activeReading.subject.shortName}` : ''}
        </span>
        {state.query && <span className="result-line__query">“{state.query}”</span>}
      </div>

      {visibleStudies.length > 0 ? (
        <div className="study-grid study-grid--library">
          {visibleStudies.map((study) => (
            <StudyCard
              key={study.id}
              study={study}
              onToggleFavorite={(id) => void vm.toggleFavorite(id)}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No studies match this cut."
          body="Try a broader phrase or clear the current field filter."
          action={
            <button
              type="button"
              className="button button--ghost button--small"
              onClick={() => {
                vm.setQuery('');
                vm.setSubject(null);
                if (state.favoritesOnly) vm.toggleFavoritesOnly();
                navigate('/vault');
              }}
            >
              Reset the view
            </button>
          }
        />
      )}
    </div>
  );
};
