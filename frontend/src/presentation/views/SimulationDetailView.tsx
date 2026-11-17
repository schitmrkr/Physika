import { Suspense, useEffect, type CSSProperties } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, FileText, FlaskConical } from 'lucide-react';
import { SIMULATION_COMPONENTS, simulationById } from '../../content/simulations';
import { subjectById } from '../../domain/taxonomy/subjects';
import { SubjectBadge } from '../components/SubjectBadge';
import { SimulationErrorBoundary } from '../components/SimulationErrorBoundary';

export const SimulationDetailView = () => {
  const { simulationId } = useParams<{ simulationId: string }>();
  const simulation = simulationId ? simulationById(simulationId) : undefined;
  const subject = simulation ? subjectById(simulation.subjectId) : undefined;
  const Component = simulation ? SIMULATION_COMPONENTS[simulation.id] : undefined;

  useEffect(() => {
    const scroller = document.querySelector('.workspace__scroll');
    scroller?.scrollTo({ top: 0 });
  }, [simulationId]);

  if (!simulation || !subject || !Component) {
    return (
      <div className="page">
        <div className="panel not-found">
          <p className="eyebrow eyebrow--muted">Bench missing</p>
          <h1>This simulation is not in the lab.</h1>
          <p>It may have been moved to another field.</p>
          <Link to="/simulations" className="button button--accent">
            Return to the lab
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="page simulation-detail"
      style={{ '--subject': subject.accent, '--subject-soft': subject.tint } as CSSProperties}
    >
      <header className="sim-detail-head">
        <Link to="/simulations" className="sim-detail-head__back">
          <ArrowLeft size={14} />
          Simulation lab
        </Link>
        <div className="sim-detail-head__meta">
          <SubjectBadge subject={subject} />
          <span>{simulation.chapter}</span>
          <i />
          <span>{simulation.level}</span>
          <i />
          <span className="sim-detail-head__live">
            <FlaskConical size={13} />
            Live
          </span>
        </div>
        <h1>{simulation.title}</h1>
        <div className="sim-detail-head__foot">
          <Link
            to={`/vault/${simulation.studyId}`}
            className="button button--ghost button--small"
          >
            <FileText size={15} />
            Read derivation
          </Link>
        </div>
      </header>

      <Suspense
        fallback={
          <div className="page page--loading sim-loading">
            <span className="loading-orbit" aria-hidden="true" />
            <p>Starting the solver…</p>
          </div>
        }
      >
        <SimulationErrorBoundary key={simulation.id}>
          <Component />
        </SimulationErrorBoundary>
      </Suspense>
    </div>
  );
};
