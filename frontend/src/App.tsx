import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from './app/AppShell';
import { LibraryView } from './presentation/views/LibraryView';
import { StudyDetailView } from './presentation/views/StudyDetailView';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Navigate to="/vault" replace />} />
        <Route path="vault" element={<LibraryView />} />
        <Route path="vault/:studyId" element={<StudyDetailView />} />
        <Route path="*" element={<Navigate to="/vault" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
