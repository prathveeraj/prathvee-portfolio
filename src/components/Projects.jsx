import React from 'react';
import { Cpu, Radio, Zap } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const projectsList = [
    {
      title: "VoltXChange: AI Smart Energy Optimization",
      icon: <Zap size={28} className="project-type-icon text-cyan" />,
      description: "An intelligent energy management system designed to optimize electricity distribution, improve grid efficiency, and decrease costs. Built to analyze usage spikes and route battery reserves dynamically.",
      highlights: [
        "Uses Deep Q-Networks (DQN) reinforcement learning to model power grids",
        "Predicts localized demand trends and peak load constraints dynamically",
        "Seamlessly integrates local solar energy reserves and residential batteries",
        "Reduces baseline carbon wastage and electricity costs for active nodes"
      ],
      tech: ["Python", "Flask", "DQN", "Reinforcement Learning", "NoSQL", "Full Stack"],
      github: "https://github.com/prathveeraj",
      featured: true
    },
    {
      title: "Water Leakage Detection System",
      icon: <Radio size={28} className="project-type-icon text-teal" />,
      description: "A smart environmental monitoring network engineered to identify micro-leakages in pipelines early, protecting critical infrastructure and preventing valuable water resource loss.",
      highlights: [
        "Interfaces flow and pressure sensor nodes in real time",
        "Utilizes threshold variance analysis to identify anomalies and drop-offs",
        "Fires low-latency warning alerts to utility operators' dashboards",
        "Designed to scale in local industrial facilities and multi-story units"
      ],
      tech: ["IoT Sensors", "C#", "SQL Server", "System Monitoring"],
      github: "https://github.com/prathveeraj",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects Showcase</h2>
        
        <p className="projects-intro-text">
          A collection of projects demonstrating my skills in applying reinforcement learning algorithms and integrating hardware sensor networks.
        </p>

        <div className="projects-grid">
          {projectsList.map((proj, idx) => (
            <div key={idx} className={`project-card glass-card ${proj.featured ? 'featured-proj' : ''}`}>
              <div className="project-header">
                <div className="project-icon-box">
                  {proj.icon}
                </div>
                <div>
                  <h3 className="project-title-text">{proj.title}</h3>
                  {proj.featured && <span className="featured-tag">Primary Project</span>}
                </div>
              </div>

              <p className="project-desc-text">{proj.description}</p>

              <div className="project-highlights">
                <h4>Key Features</h4>
                <ul>
                  {proj.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech-tags">
                {proj.tech.map((tag, tIdx) => (
                  <span key={tIdx} className="tech-badge">{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="outline-btn github-btn"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
