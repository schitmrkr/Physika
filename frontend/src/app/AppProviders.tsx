import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { createContainer, type AppContainer } from './container';

const AppContainerContext = createContext<AppContainer | null>(null);

export const AppProviders = ({ children }: { children: ReactNode }) => {
  const container = useMemo(() => createContainer(), []);
  return <AppContainerContext.Provider value={container}>{children}</AppContainerContext.Provider>;
};

export const useContainer = (): AppContainer => {
  const container = useContext(AppContainerContext);
  if (!container) {
    throw new Error('useContainer must be used inside AppProviders');
  }
  return container;
};
