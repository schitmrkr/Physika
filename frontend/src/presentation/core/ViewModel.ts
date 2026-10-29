type Listener = () => void;

export abstract class ViewModel<TState> {
  protected state: TState;
  private readonly listeners = new Set<Listener>();

  protected constructor(initialState: TState) {
    this.state = initialState;
  }

  getState = (): TState => this.state;

  subscribe = (listener: Listener): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  protected setState(update: Partial<TState> | ((state: TState) => TState)): void {
    this.state =
      typeof update === 'function'
        ? update(this.state)
        : { ...this.state, ...update };
    this.listeners.forEach((listener) => listener());
  }

  dispose(): void {
    this.listeners.clear();
  }
}
