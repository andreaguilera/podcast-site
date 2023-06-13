import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Support from './pages/Support';

import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        {/* Adicione aqui as rotas para as páginas "Contato" e "Apoie o Projeto" */}
      </Routes>
    </Router>
  );
}

export default App;
