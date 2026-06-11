import React from 'react';
import { Cpu, Terminal, Layers, Database, Wrench } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: "AI/ML Specialization",
      icon: <Cpu className="category-icon text-cyan" size={24} />,
      skills: [
        { name: "Deep Q-Networks (DQN)", rating: "90%" },
        { name: "Reinforcement Learning", rating: "88%" },
        { name: "Deep Learning (DL)", rating: "85%" },
        { name: "Generative AI", rating: "82%" },
        { name: "NLP (Natural Language)", rating: "80%" },
        { name: "Machine Learning (ML)", rating: "88%" }
      ],
      featured: true
    },
    {
      title: "Languages",
      icon: <Terminal className="category-icon text-blue" size={24} />,
      skills: [
        { name: "Python", rating: "90%" },
        { name: "Java", rating: "75%" },
        { name: "C#", rating: "70%" },
        { name: "C Language", rating: "75%" }
      ]
    },
    {
      title: "Web Frameworks",
      icon: <Layers className="category-icon text-purple" size={24} />,
      skills: [
        { name: "Flask", rating: "85%" },
        { name: "React JS", rating: "70%" },
        { name: "REST APIs", rating: "80%" }
      ]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="category-icon text-teal" size={24} />,
      skills: [
        { name: "NoSQL Databases", rating: "75%" },
        { name: "Relational DBs", rating: "70%" }
      ]
    },
    {
      title: "Tools & Environments",
      icon: <Wrench className="category-icon text-gold" size={24} />,
      skills: [
        { name: "VS Code", rating: "90%" },
        { name: "Google Colab", rating: "88%" },
        { name: "Git & GitHub", rating: "85%" },
        { name: "IoT Sensors integration", rating: "75%" }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <p className="skills-subtitle-text">
          My primary areas of expertise focus on training intelligent agents, preprocessing datasets, and deploying machine learning pipelines. Coding rating: <strong className="gradient-text">7/10</strong> based on university challenges.
        </p>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className={`skill-category-card glass-card ${cat.featured ? 'featured-card' : ''}`}>
              <div className="category-header">
                <div className="icon-badge">
                  {cat.icon}
                </div>
                <h3>{cat.title}</h3>
              </div>
              
              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.rating}</span>
                    </div>
                    <div className="progress-bar-track">
                      <div 
                        className={`progress-bar-fill ${cat.featured ? 'featured-fill' : ''}`}
                        style={{ width: skill.rating }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
