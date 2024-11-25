// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Contextualizacion from './pages/Contextualizacion';
import Principios from './pages/Principios';
import Espacio from './pages/Espacio';
import Composicion from './pages/Composicion';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contextualizacion" element={<Contextualizacion />} />
        <Route path="/principios" element={<Principios />} />
        <Route path="/espacios" element={<Espacio />} />
        <Route path="composicion" element={<Composicion />} />
      </Routes>
    </Router>
  );
};

export default App;