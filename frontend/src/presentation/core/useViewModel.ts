import { useEffect, useMemo, useSyncExternalStore, type DependencyList } from 'react';
import type { ViewModel } from './ViewModel';

export const useViewModel = <TState, TVM extends ViewModel<TState>>(
  factory: () => TVM,
  deps: DependencyList = [],
): TVM => {
  const viewModel = useMemo(factory, deps);

  useSyncExternalStore(viewModel.subscribe, viewModel.getState, viewModel.getState);

  useEffect(() => () => viewModel.dispose(), [viewModel]);

  return viewModel;
};
