import { useEffect, useMemo, type CSSProperties } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ChevronRight, LibraryBig } from 'lucide-react';
import { useContainer } from './AppProviders';
import { useViewModel } from '../presentation/core/useViewModel';
import { ShellViewModel } from '../presentation/viewmodels/ShellViewModel';
import { SubjectGlyph } from '../presentation/components/SubjectGlyph';
import { PhysikaMark } from '../presentation/components/PhysikaMark';

const SECTION_LABELS: { match: (pathname: string) => boolean; label: string }[] = [
  { match: (pathname) => pathname.startsWith('/vault/'), label: 'Reading room' },
  { match: () => true, label: 'Study library' },
];

const NAV_ITEMS = [
  { to: '/vault', label: 'Study library', index: '01', icon: LibraryBig, end: false },
];

export const AppShell = () => {
  const container = useContainer();
  const location = useLocation();
  const vm = useViewModel(() => new ShellViewModel(container.studies), [container]);

  const state = vm.getState();
  const sectionLabel =
    SECTION_LABELS.find((section) => section.match(location.pathname))?.label ?? 'Study library';

  const fieldRail = useMemo(
    () => [...state.readings].sort((a, b) => a.subject.name.localeCompare(b.subject.name)),
    [state.readings],
  );

  useEffect(() => {
    const scroller = document.querySelector('.workspace__scroll');
    scroller?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link to="/vault" className="brand" aria-label="Physika study library">
          <span className="brand__mark">
            <PhysikaMark />
          </span>
          <span className="brand__text">
            <span className="brand__word">Physika</span>
            <span className="brand__sub">Noether Lab · research vault</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `nav-item ${isActive ? 'is-active' : ''}`}
              >
                <Icon size={17} strokeWidth={1.8} />
                <span>{item.label}</span>
                <span className="nav-item__index">{item.index}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar__fields">
          <div className="sidebar__section-head">
            <span>Field index</span>
            <span>{state.readings.filter((reading) => reading.count > 0).length}/13</span>
          </div>
          <div className="field-rail">
            {fieldRail.map((reading) => {
              const isActive =
                location.pathname === '/vault' &&
                new URLSearchParams(location.search).get('subject') === reading.subject.id;

              return (
                <Link
                  key={reading.subject.id}
                  to={`/vault?subject=${reading.subject.id}`}
                  className={`field-rail__item ${isActive ? 'is-active' : ''} ${reading.count === 0 ? 'is-dim' : ''}`}
                  style={{ '--subject': reading.subject.accent } as CSSProperties}
                >
                  <SubjectGlyph glyph={reading.subject.glyph} size={14} />
                  <span>{reading.subject.shortName}</span>
                  <span className="field-rail__count">{reading.count}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="sidebar__footer">
          <div className="local-status">
            <span className="local-status__dot" />
            <span>
              <strong>{state.total} entries indexed</strong>
              <small>Local browser vault · no server</small>
            </span>
          </div>
        </div>
      </aside>

      <main className="workspace">
        <header className="topbar">
          <div className="topbar__crumb">
            <span>Physika</span>
            <ChevronRight size={13} />
            <strong>{sectionLabel}</strong>
          </div>
        </header>

        <div className="workspace__scroll">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
