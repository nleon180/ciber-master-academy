
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Ciber Master Academy</h1>
      <p>Bienvenido a tu plataforma de cursos en línea.</p>
      <Link to="/curso">Ver curso gratuito</Link>
    </div>
  );
}

function Curso() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Introducción a la Ciberseguridad</h2>
      <iframe
        src="/curso_ciberseguridad.pdf"
        width="100%"
        height="600px"
        title="Curso PDF"
        style={{ border: '1px solid #ccc' }}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curso" element={<Curso />} />
      </Routes>
    </Router>
  );
}

export default App;
