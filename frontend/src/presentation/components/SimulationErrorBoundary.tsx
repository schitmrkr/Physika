import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export class SimulationErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('Simulation failed to render', error, info.componentStack);
  }

  render(): ReactNode {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <div className="panel sim-error">
        <AlertTriangle size={22} />
        <p className="eyebrow eyebrow--muted">Bench interrupted</p>
        <h2>This simulation could not start.</h2>
        <p>{error.message || 'An unexpected error stopped the solver.'}</p>
        <div className="sim-error__actions">
          <button
            type="button"
            className="button button--accent button--small"
            onClick={() => this.setState({ error: null })}
          >
            Try again
          </button>
          <Link to="/simulations" className="button button--ghost button--small">
            Back to the lab
          </Link>
        </div>
      </div>
    );
  }
}
