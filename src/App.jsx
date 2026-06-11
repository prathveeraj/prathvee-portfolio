import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  return (
    <div className="app-wrapper">
      {/* Background Glow Effects */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>

      {/* Global Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <p className="footer-logo">PRATHVEE<span>.</span></p>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Prathvee Raj Singh. All rights reserved.
          </p>
          <div className="footer-tagline">
            Designed for impact, engineered at scale.
          </div>
        </div>
      </footer>
    </div>
  );
}
