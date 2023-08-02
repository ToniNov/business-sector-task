import { FC } from 'react';

import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { MainPage } from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/1" />} />
        <Route path="/:page" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
