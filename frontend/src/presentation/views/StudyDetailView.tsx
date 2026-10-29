import { useEffect } from 'react';
import type { CSSProperties } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Download,
  FileText,
  Paperclip,
  Star,
} from 'lucide-react';
import { useContainer } from '../../app/AppProviders';
import { useViewModel } from '../core/useViewModel';
import { StudyViewModel } from '../viewmodels/StudyViewModel';
import { MarkdownNote } from '../components/MarkdownNote';
import { StudyCard } from '../components/StudyCard';
import { SubjectBadge } from '../components/SubjectBadge';
import { TagPill } from '../components/TagPill';
import { formatBytes, formatLabel } from '../../shared/lib/files';

export const StudyDetailView = () => {
  const { studyId } = useParams<{ studyId: string }>();
  const container = useContainer();
  const vm = useViewModel(
    () => new StudyViewModel(container.studies, studyId ?? ''),
    [container, studyId],
  );
  const state = vm.getState();

  useEffect(() => {
    const scroller = document.querySelector('.workspace__scroll');
    scroller?.scrollTo({ top: 0 });
  }, [studyId]);

  if (state.loading) {
    return (
      <div className="page page--loading">
        <span className="loading-orbit" aria-hidden="true" />
        <p>Retrieving the entry…</p>
      </div>
    );
  }

  if (!state.study || !state.subject) {
    return (
      <div className="page">
        <div className="panel not-found">
          <p className="eyebrow eyebrow--muted">Entry missing</p>
          <h1>This study is not in the vault.</h1>
          <p>{state.error ?? 'It may have been removed from local storage.'}</p>
          <Link to="/vault" className="button button--accent">
            Return to the library
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  const study = state.study;
  const subject = state.subject;

  return (
    <div
      className="page study-detail"
      style={{ '--subject': subject.accent, '--subject-soft': subject.tint } as CSSProperties}
    >
      <div className="note-topline">
        <Link to="/vault" className="text-link">
          <ArrowLeft size={15} />
          Study library
        </Link>
      </div>

      <header className="note-head">
        <div className="note-head__subject">
          <SubjectBadge subject={subject} />
          <span>{study.chapter || 'Unassigned chapter'}</span>
          <i />
          <span>{formatLabel(study.format)}</span>
        </div>
        <h1>{study.title}</h1>

        <div className="note-head__foot">
          <div className="note-metrics">
            <span>
              <Clock3 size={14} />
              {study.readMinutes} min read
            </span>
            <span>{study.wordCount.toLocaleString()} words</span>
            <span>{study.attachments.length} sources</span>
          </div>

          <div className="note-actions">
            <button
              type="button"
              className={`icon-button ${study.favorite ? 'is-active' : ''}`}
              onClick={() => void vm.toggleFavorite()}
              aria-label={study.favorite ? 'Unpin study' : 'Pin study'}
            >
              <Star size={16} fill={study.favorite ? 'currentColor' : 'none'} />
            </button>
            <button type="button" className="button button--ghost button--small" onClick={() => vm.exportMarkdown()}>
              <Download size={15} />
              Export .md
            </button>
          </div>
        </div>
      </header>

      <div className="note-layout">
        <article className="note-paper">
          <MarkdownNote content={study.content} />
          {study.attachments.length === 0 && study.content.trim().length === 0 && (
            <p className="note-paper__empty">This entry has no note body yet.</p>
          )}
        </article>

        <aside className="note-side">
          {state.headings.length > 0 && (
            <div className="side-card">
              <p className="eyebrow eyebrow--muted">On this page</p>
              <ol className="toc">
                {state.headings.map((heading, index) => (
                  <li key={`${heading.id}-${index}`} className={`toc__item toc__item--h${heading.level}`}>
                    <a href={`#${heading.id}`}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="side-card">
            <p className="eyebrow eyebrow--muted">Catalog card</p>
            <dl className="catalog">
              <div>
                <dt>Field</dt>
                <dd>{subject.name}</dd>
              </div>
              <div>
                <dt>Chapter</dt>
                <dd>{study.chapter || '—'}</dd>
              </div>
            </dl>

            {study.tags.length > 0 && (
              <div className="side-card__tags">
                {study.tags.map((tag) => (
                  <TagPill key={tag} tag={tag} />
                ))}
              </div>
            )}

            {study.attachments.length > 0 && (
              <div className="attachment-list">
                <p className="eyebrow eyebrow--muted">Sources</p>
                {study.attachments.map((attachment) => (
                  <div key={attachment.id} className="attachment-item">
                    <Paperclip size={14} />
                    <span>
                      <strong>{attachment.name}</strong>
                      <small>
                        {formatLabel(study.format)} · {formatBytes(attachment.size)}
                      </small>
                    </span>
                    <FileText size={14} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>

      {state.related.length > 0 && (
        <section className="section-block related-block">
          <div className="section-head">
            <div>
              <p className="eyebrow eyebrow--muted">Same field</p>
              <h2>Continue the thread</h2>
            </div>
            <Link to={`/vault?subject=${subject.id}`} className="text-link">
              All {subject.shortName}
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className="study-grid">
            {state.related.map((related) => (
              <StudyCard key={related.id} study={related} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
