import { useMemo, useState, type CSSProperties } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Star, X } from 'lucide-react';
import { useContainer } from '../../app/AppProviders';
import { useViewModel } from '../core/useViewModel';
import { SimulationLibraryViewModel } from '../viewmodels/SimulationLibraryViewModel';
import { SIMULATIONS } from '../../content/simulations';
import { SUBJECTS, subjectById } from '../../domain/taxonomy/subjects';
import { SimulationCard } from '../components/SimulationCard';
import { SubjectGlyph } from '../components/SubjectGlyph';
import { EmptyState } from '../components/EmptyState';

export const SimulationLibraryView = () => {
  const container = useContainer();
  const vm = useViewModel(() => new SimulationLibraryViewModel(container.studies), [container]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const subjectFilter = searchParams.get('subject');
  const favoriteStudyIds = vm.getState().favoriteStudyIds;
  const favoriteSet = new Set(favoriteStudyIds);

  const fields = useMemo(
    () =>
      SUBJECTS.map((subject) => ({
        subject,
        count: SIMULATIONS.filter((simulation) => simulation.subjectId === subject.id).length,
      })).filter((field) => field.count > 0),
    [],
  );

  const activeField = subjectFilter ? subjectById(subjectFilter) : undefined;

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return SIMULATIONS.filter((simulation) => {
      if (subjectFilter && simulation.subjectId !== subjectFilter) return false;
      if (favoritesOnly && !favoriteSet.has(simulation.studyId)) return false;
      if (!needle) return true;
      const subject = subjectById(simulation.subjectId);
      return [simulation.title, simulation.summary, simulation.chapter, subject?.name ?? '', ...simulation.tags]
        .join(' ')
        .toLowerCase()
        .includes(needle);
    });
  }, [query, subjectFilter, favoritesOnly, favoriteStudyIds]);

  const chooseSubject = (subjectId: string | null): void => {
    const next = new URLSearchParams();
    if (subjectId) next.set('subject', subjectId);
    if (query) next.set('q', query);
    setSearchParams(next, { replace: true });
  };

  return (
    <div className="page simulation-library">
      <div className="field-chips" aria-label="Filter simulations by field">
        <button
          type="button"
          className={`field-chip ${subjectFilter === null ? 'is-active' : ''}`}
          onClick={() => chooseSubject(null)}
        >
          All fields
          <span>{SIMULATIONS.length}</span>
        </button>
        {fields.map(({ subject, count }) => (
          <button
            key={subject.id}
            type="button"
            className={`field-chip ${subjectFilter === subject.id ? 'is-active' : ''}`}
            style={{ '--subject': subject.accent } as CSSProperties}
            onClick={() => chooseSubject(subject.id)}
          >
            <i className="field-chip__dot" />
            {subject.shortName}
            <span>{count}</span>
          </button>
        ))}
      </div>

      {activeField && (
        <section
          className="field-brief"
          style={
            {
              '--subject': activeField.accent,
              '--subject-soft': activeField.tint,
            } as CSSProperties
          }
        >
          <div className="field-brief__mark">
            <SubjectGlyph glyph={activeField.glyph} size={26} />
          </div>
          <div className="field-brief__copy">
            <span className="field-brief__code">{activeField.code}</span>
            <h2>{activeField.name}</h2>
            <p>{activeField.description}</p>
          </div>
          <div className="field-brief__meta">
            <strong>{fields.find((field) => field.subject.id === activeField.id)?.count ?? 0}</strong>
            <span>lab benches</span>
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
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search simulations, methods, tags…"
            aria-label="Search simulations"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
              <X size={14} />
            </button>
          )}
        </label>

        <div className="toolbar-actions">
          <button
            type="button"
            className={`filter-button ${favoritesOnly ? 'is-active' : ''}`}
            onClick={() => setFavoritesOnly((current) => !current)}
          >
            <Star size={14} fill={favoritesOnly ? 'currentColor' : 'none'} />
            Pinned
          </button>
        </div>
      </div>

      <div className="result-line">
        <span>
          {visible.length} {visible.length === 1 ? 'bench' : 'benches'}
          {activeField ? ` in ${activeField.shortName}` : ''}
        </span>
        {query && <span className="result-line__query">“{query}”</span>}
      </div>

      {visible.length > 0 ? (
        <div className="study-grid study-grid--library">
          {visible.map((simulation) => {
            const subject = subjectById(simulation.subjectId);
            if (!subject) return null;
            return (
              <SimulationCard
                key={simulation.id}
                simulation={simulation}
                subject={subject}
                favorite={favoriteSet.has(simulation.studyId)}
                onToggleFavorite={() => void vm.toggleFavorite(simulation.studyId)}
              />
            );
          })}
        </div>
      ) : (
        <EmptyState
          title="No benches match this cut."
          body="Try a broader phrase or clear the field filter."
          action={
            <button
              type="button"
              className="button button--ghost button--small"
              onClick={() => {
                setQuery('');
                setFavoritesOnly(false);
                chooseSubject(null);
              }}
            >
              Reset the lab
            </button>
          }
        />
      )}
    </div>
  );
};
