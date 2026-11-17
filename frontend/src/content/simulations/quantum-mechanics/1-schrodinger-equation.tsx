import { useEffect, useMemo, useRef, useState } from 'react';
import * as Plotly from 'plotly.js-basic-dist-min';
import { POTENTIALS, buildEigensystem, evolve, gridSize, measure } from './schrodinger-engine';
import type {
  Eigensystem,
  EngineSettings,
  Observables,
  PotentialKind,
  WaveState,
} from './schrodinger-engine';
import { createWaveformRenderer, type WaveformRenderer } from './schrodinger-three';

const DEFAULT_SETTINGS: EngineSettings = {
  potential: 'well',
  sigma: 1.1,
  k0: 4,
  x0: -3.4,
  omega: 1.1,
  barrierHeight: 12,
  mass: 1,
};

const PLOT_CONFIG: Partial<Plotly.Config> = {
  responsive: true,
  displayModeBar: false,
  staticPlot: true,
};

const emptyReadout = (): Observables => ({
  norm: 0,
  position: 0,
  momentum: 0,
  energy: 0,
  groundEnergy: 0,
});

const potentialScale = (system: Eigensystem): number => {
  let peak = 0;
  for (let j = 0; j < system.potential.length; j += 1) {
    peak = Math.max(peak, Math.abs(system.potential[j]));
  }
  return peak > 0 ? 0.82 / peak : 0;
};

const makeTraces = (system: Eigensystem, state: WaveState): Plotly.Data[] => {
  const x = Array.from(system.x);
  const scale = potentialScale(system);
  return [
    {
      type: 'scatter',
      mode: 'lines',
      name: '|ψ|²',
      x,
      y: Array.from(state.density),
      fill: 'tozeroy',
      fillcolor: 'rgba(108, 75, 182, 0.16)',
      line: { color: '#6c4bb6', width: 2.2 },
    },
    {
      type: 'scatter',
      mode: 'lines',
      name: 'Re ψ',
      x,
      y: Array.from(state.re),
      line: { color: '#2646f0', width: 1.5 },
    },
    {
      type: 'scatter',
      mode: 'lines',
      name: 'Im ψ',
      x,
      y: Array.from(state.im),
      line: { color: '#e4572e', width: 1.3, dash: 'dot' },
    },
    {
      type: 'scatter',
      mode: 'lines',
      name: 'V(x)',
      x,
      y: Array.from(system.potential, (value) => value * scale),
      line: { color: '#8b887f', width: 1.2, dash: 'dash' },
    },
  ];
};

const makeLayout = (): Partial<Plotly.Layout> => {
  const styles = getComputedStyle(document.documentElement);
  const grid = styles.getPropertyValue('--line').trim() || '#d7d0c1';
  const text = styles.getPropertyValue('--ink-soft').trim() || '#615f59';
  return {
    margin: { l: 46, r: 12, t: 10, b: 38 },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: { family: 'JetBrains Mono, monospace', size: 9, color: text },
    hovermode: false,
    showlegend: true,
    legend: { orientation: 'h', x: 0, y: 1.16, font: { size: 9 } },
    xaxis: {
      title: { text: 'x' },
      range: [-12, 12],
      gridcolor: grid,
      zerolinecolor: grid,
      ticks: 'outside',
    },
    yaxis: {
      title: { text: 'amplitude' },
      range: [-1.1, 1.1],
      gridcolor: grid,
      zerolinecolor: grid,
      fixedrange: true,
    },
  };
};

interface SliderProps {
  label: string;
  display: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}

const Slider = ({ label, display, value, min, max, step, onChange }: SliderProps) => (
  <label className="sim-slider">
    <span className="sim-slider__head">
      <span>{label}</span>
      <strong>{display}</strong>
    </span>
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(event) => onChange(Number(event.target.value))}
    />
  </label>
);

const formatNumber = (value: number, digits = 3): string =>
  value.toFixed(digits).replace(/\.?0+$/, '') || '0';

export default function SchrodingerEquationSimulation() {
  const [settings, setSettings] = useState<EngineSettings>(DEFAULT_SETTINGS);
  const [speed, setSpeed] = useState(1);
  const [playing, setPlaying] = useState(true);
  const [readout, setReadout] = useState<Observables>(emptyReadout);
  const [time, setTime] = useState(0);
  const [webglFailed, setWebglFailed] = useState(false);
  const [plotFailed, setPlotFailed] = useState(false);

  const system = useMemo(() => buildEigensystem(settings), [settings]);
  const systemRef = useRef(system);
  const playingRef = useRef(playing);
  const speedRef = useRef(speed);
  const timeRef = useRef(0);
  const dirtyRef = useRef(true);
  const plotReadyRef = useRef(false);
  const plotFailedRef = useRef(false);
  const plotRef = useRef<HTMLDivElement>(null);
  const threeRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<WaveformRenderer | null>(null);

  systemRef.current = system;
  playingRef.current = playing;
  speedRef.current = speed;
  plotFailedRef.current = plotFailed;

  useEffect(() => {
    const plotNode = plotRef.current;
    let active = true;
    if (plotNode) {
      void Plotly.newPlot(plotNode, [], makeLayout(), PLOT_CONFIG)
        .then(() => {
          if (active) {
            plotReadyRef.current = true;
            dirtyRef.current = true;
          }
        })
        .catch(() => {
          if (active) setPlotFailed(true);
        });
    }

    const threeNode = threeRef.current;
    if (threeNode) {
      const renderer = createWaveformRenderer(threeNode, gridSize());
      rendererRef.current = renderer;
      setWebglFailed(renderer === null);
    }

    return () => {
      active = false;
      plotReadyRef.current = false;
      if (plotNode) Plotly.purge(plotNode);
      rendererRef.current?.dispose();
      rendererRef.current = null;
    };
  }, []);

  useEffect(() => {
    timeRef.current = 0;
    setTime(0);
    dirtyRef.current = true;
  }, [system]);

  useEffect(() => {
    let frame = 0;
    let previous = performance.now();
    let plotElapsed = 1;
    let readoutElapsed = 1;

    const loop = (now: number): void => {
      const delta = Math.min((now - previous) / 1000, 0.05);
      previous = now;

      if (playingRef.current) timeRef.current += delta * speedRef.current;
      const state = evolve(systemRef.current, timeRef.current);
      rendererRef.current?.update(state.re, state.im, state.density);

      const dirty = dirtyRef.current;
      plotElapsed += delta;
      if (plotElapsed >= 1 / 24 && (playingRef.current || dirty)) {
        plotElapsed = 0;
        const plotNode = plotRef.current;
        if (plotNode && plotReadyRef.current && !plotFailedRef.current) {
          void Plotly.react(plotNode, makeTraces(systemRef.current, state), makeLayout(), PLOT_CONFIG);
        }
      }

      readoutElapsed += delta;
      if (readoutElapsed >= 1 / 8 && (playingRef.current || dirty)) {
        readoutElapsed = 0;
        setReadout(measure(systemRef.current, state));
        setTime(timeRef.current);
      }

      dirtyRef.current = false;
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  const changeSetting = <K extends keyof EngineSettings>(key: K, value: EngineSettings[K]): void => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  const reset = (): void => {
    timeRef.current = 0;
    setTime(0);
    dirtyRef.current = true;
    setPlaying(false);
  };

  const step = (): void => {
    timeRef.current += 0.1;
    setTime(timeRef.current);
    dirtyRef.current = true;
  };

  const spectrum = Array.from(system.energies.slice(0, 5)).map((value, index) => ({
    level: index,
    value,
  }));

  return (
    <div className="sim-runner">
      <div className="sim-bench">
        <aside className="sim-controls panel">
          <div className="sim-controls__head">
            <p className="eyebrow eyebrow--muted">Experiment controls</p>
            <h3>Wavepacket setup</h3>
          </div>

          <div className="sim-control-group">
            <span className="sim-control-label">Potential V(x)</span>
            <div className="sim-segmented">
              {POTENTIALS.map((potential) => (
                <button
                  key={potential.id}
                  type="button"
                  className={settings.potential === potential.id ? 'is-active' : ''}
                  onClick={() => changeSetting('potential', potential.id as PotentialKind)}
                >
                  {potential.label}
                </button>
              ))}
            </div>
          </div>

          <div className="sim-sliders">
            <Slider
              label="Width σ"
              display={formatNumber(settings.sigma)}
              value={settings.sigma}
              min={0.45}
              max={3}
              step={0.05}
              onChange={(value) => changeSetting('sigma', value)}
            />
            <Slider
              label="Momentum k₀"
              display={formatNumber(settings.k0)}
              value={settings.k0}
              min={-8}
              max={8}
              step={0.1}
              onChange={(value) => changeSetting('k0', value)}
            />
            <Slider
              label="Centre x₀"
              display={formatNumber(settings.x0)}
              value={settings.x0}
              min={-8}
              max={8}
              step={0.1}
              onChange={(value) => changeSetting('x0', value)}
            />
            <Slider
              label="Mass m"
              display={formatNumber(settings.mass)}
              value={settings.mass}
              min={0.4}
              max={3}
              step={0.1}
              onChange={(value) => changeSetting('mass', value)}
            />
            {settings.potential === 'harmonic' && (
              <Slider
                label="Frequency ω"
                display={formatNumber(settings.omega)}
                value={settings.omega}
                min={0.3}
                max={3}
                step={0.05}
                onChange={(value) => changeSetting('omega', value)}
              />
            )}
            {settings.potential === 'barrier' && (
              <Slider
                label="Barrier V₀"
                display={formatNumber(settings.barrierHeight, 1)}
                value={settings.barrierHeight}
                min={2}
                max={40}
                step={1}
                onChange={(value) => changeSetting('barrierHeight', value)}
              />
            )}
            <Slider
              label="Time rate"
              display={`${formatNumber(speed)}×`}
              value={speed}
              min={0.2}
              max={3}
              step={0.1}
              onChange={setSpeed}
            />
          </div>

          <div className="sim-transport">
            <button
              type="button"
              className="button button--accent button--small"
              onClick={() => setPlaying((value) => !value)}
            >
              {playing ? 'Pause' : 'Run'}
            </button>
            <button type="button" className="button button--ghost button--small" onClick={step}>
              Step
            </button>
            <button type="button" className="button button--ghost button--small" onClick={reset}>
              Reset
            </button>
          </div>

          <div className="sim-clock">
            <span className={`sim-clock__pulse ${playing ? 'is-running' : ''}`} />
            <span>t = {formatNumber(time)}</span>
            <span>ħ = 1</span>
          </div>
        </aside>

        <div className="sim-visual">
          <section className="sim-card panel">
            <div className="sim-card__head">
              <div>
                <p className="eyebrow eyebrow--muted">Real space</p>
                <h3>Probability density &amp; wavefunction</h3>
              </div>
              <span className="sim-card__tag">finite difference · 192 nodes</span>
            </div>
            <div className="sim-plot" ref={plotRef}>
              {plotFailed && (
                <div className="sim-three__fallback">
                  The 2D plot could not initialize. Reload the page to try again.
                </div>
              )}
            </div>
          </section>

          <section className="sim-card panel">
            <div className="sim-card__head">
              <div>
                <p className="eyebrow eyebrow--muted">Complex plane</p>
                <h3>Phase trajectory of ψ(x)</h3>
              </div>
              <span className="sim-card__tag">drag to rotate · scroll to zoom</span>
            </div>
            <div className="sim-three" ref={threeRef}>
              {webglFailed && (
                <div className="sim-three__fallback">
                  3D phase view needs WebGL. The 2D solver and controls still work.
                </div>
              )}
            </div>
            <div className="sim-three__legend">
              <span>x — position</span>
              <span>y — Re ψ</span>
              <span>z — Im ψ</span>
              <span>colour — |ψ|²</span>
            </div>
          </section>
        </div>
      </div>

      <div className="sim-bottom">
        <section className="sim-metrics panel">
          <div className="sim-metrics__head">
            <p className="eyebrow eyebrow--muted">Live observables</p>
            <span>spectral decomposition</span>
          </div>
          <div className="sim-metric-grid">
            <div className="sim-metric">
              <span>Norm</span>
              <strong>{formatNumber(readout.norm, 4)}</strong>
            </div>
            <div className="sim-metric">
              <span>⟨x⟩</span>
              <strong>{formatNumber(readout.position)}</strong>
            </div>
            <div className="sim-metric">
              <span>⟨p⟩</span>
              <strong>{formatNumber(readout.momentum)}</strong>
            </div>
            <div className="sim-metric">
              <span>⟨E⟩</span>
              <strong>{formatNumber(readout.energy)}</strong>
            </div>
            <div className="sim-metric">
              <span>E₀</span>
              <strong>{formatNumber(readout.groundEnergy)}</strong>
            </div>
          </div>
        </section>

        <section className="sim-spectrum panel">
          <div className="sim-spectrum__head">
            <p className="eyebrow eyebrow--muted">Lowest eigenvalues</p>
            <span>Eₙ</span>
          </div>
          <div className="sim-spectrum__list">
            {spectrum.map((entry) => (
              <div key={entry.level} className="sim-spectrum__row">
                <span>n = {entry.level}</span>
                <i style={{ width: `${Math.max(10, 100 - entry.level * 17)}%` }} />
                <strong>{formatNumber(entry.value, 2)}</strong>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
