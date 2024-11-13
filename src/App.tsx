// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Contextualizacion from './pages/Contextualizacion';
import Principios from './pages/Principios';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contextualizacion" element={<Contextualizacion />} />
        <Route path="/principios" element={<Principios />} />
      </Routes>
    </Router>
  );
};

export default App;