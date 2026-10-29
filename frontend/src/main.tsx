import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { AppProviders } from './app/AppProviders';
import './styles/tokens.css';
import './styles/base.css';
import './styles/shell.css';
import './styles/views.css';
import './styles/markdown.css';
import './styles/math.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);
