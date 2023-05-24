import './index.css'
import React from 'react';
import Inicio from './components/Inicio/Inicio';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <div className="bolhas">
        <span style={{ '--i': 11 }}></span>
        <span style={{ '--i': 20 }}></span>
        <span style={{ '--i': 1 }}></span>
        <span style={{ '--i': 25 }}></span>
        <span style={{ '--i': 14 }}></span>
        <span style={{ '--i': 9 }}></span>
        <span style={{ '--i': 10 }}></span>
        <span style={{ '--i': 2 }}></span>
        <span style={{ '--i': 16 }}></span>
        <span style={{ '--i': 22 }}></span>
        <span style={{ '--i': 8 }}></span>
        <span style={{ '--i': 11 }}></span>
        <span style={{ '--i': 3 }}></span>
        <span style={{ '--i': 21 }}></span>
        <span style={{ '--i': 6 }}></span>
        <span style={{ '--i': 23 }}></span>
        <span style={{ '--i': 4 }}></span>
        <span style={{ '--i': 18 }}></span>
        <span style={{ '--i': 5 }}></span>
        <span style={{ '--i': 11 }}></span>
        <span style={{ '--i': 15 }}></span>
        <span style={{ '--i': 24 }}></span>
        <span style={{ '--i': 0 }}></span>
        <span style={{ '--i': 6 }}></span>
        <span style={{ '--i': 21 }}></span>
        <span style={{ '--i': 14 }}></span>
        <span style={{ '--i': 10 }}></span>
        <span style={{ '--i': 2 }}></span>
        <span style={{ '--i': 17 }}></span>
        <span style={{ '--i': 25 }}></span>
        <span style={{ '--i': 14 }}></span>
        <span style={{ '--i': 9 }}></span>
        <span style={{ '--i': 10 }}></span>
        <span style={{ '--i': 2 }}></span>
        <span style={{ '--i': 16 }}></span>
        <span style={{ '--i': 11 }}></span>
        <span style={{ '--i': 15 }}></span>
        <span style={{ '--i': 24 }}></span>
        <span style={{ '--i': 18 }}></span>
        <span style={{ '--i': 5 }}></span>
        <span style={{ '--i': 11 }}></span>
        <span style={{ '--i': 15 }}></span>
        <span style={{ '--i': 24 }}></span>
        <span style={{ '--i': 0 }}></span>
        <span style={{ '--i': 6 }}></span>
        <span style={{ '--i': 21 }}></span>
        <span style={{ '--i': 14 }}></span>
        <span style={{ '--i': 21 }}></span>
      </div>
    </div>
  );
}

export default App;
