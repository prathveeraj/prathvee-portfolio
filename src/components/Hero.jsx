import React from 'react';
import { Code, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        
        <div className="hero-content">
          <div className="badge-wrapper">
            <span className="hero-badge">Available for Internships & Collaborations</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="highlight-text">Prathvee Raj Singh</span>
          </h1>
          
          <h2 className="hero-subtitle">
            <span className="typewriter">AIML Engineer & Developer</span>
          </h2>
          
          <p className="hero-description">
            BTech CSE AIML & IOT candidate at GLA University. Passionate about Reinforcement Learning, Generative AI, Deep Learning, and building smart systems that operate at scale.
          </p>
          
          <div className="hero-ctas">
            <button className="gradient-btn" onClick={() => handleScrollTo('projects')}>
              Explore Projects <ArrowRight size={18} />
            </button>
            <button className="outline-btn" onClick={() => handleScrollTo('contact')}>
              Let's Connect
            </button>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/prathveeraj" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/prathvee-raj-880993289" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://leetcode.com/u/prathveerajs2004/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LeetCode">
              <Code size={20} />
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="image-frame">
            <div className="cyber-corner top-left"></div>
            <div className="cyber-corner top-right"></div>
            <div className="cyber-corner bottom-left"></div>
            <div className="cyber-corner bottom-right"></div>
            <img 
              src="/profile.jpg" 
              alt="Prathvee Raj Singh Profile" 
              className="profile-photo"
              onError={(e) => {
                // Fallback image if there's any loading issue
                e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3';
              }}
            />
          </div>
          <div className="image-backdrop-glow"></div>
        </div>

      </div>
    </section>
  );
}
