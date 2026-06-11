import React, { useState } from 'react';
import { Target, Shield, Heart, TrendingUp, Award, ChevronDown, ChevronUp } from 'lucide-react';
import './About.css';

export default function About() {
  const [activeFaq, setActiveFaq] = useState(null);

  const values = [
    {
      icon: <Shield size={28} className="value-icon text-cyan" />,
      title: "Military Legacy",
      description: "Coming from a family of Ex-Army Personnel, I've been raised with strong core values of discipline, responsibility, and unwavering hard work. These values shape my daily habits and approach to problem solving."
    },
    {
      icon: <Heart size={28} className="value-icon text-blue" />,
      title: "Fitness & Athletics",
      description: "A passionate bodybuilder and athlete. Winning the 1st prize in wrestling at my university taught me the importance of absolute consistency, mental resilience, and self-mastery under pressure."
    },
    {
      icon: <TrendingUp size={28} className="value-icon text-purple" />,
      title: "Decision & Strategy",
      description: "I study the stock market and technological developments to sharpen my decision-making. It enables me to understand risk assessment, predictive analysis, and logical structuring."
    }
  ];

  const faqs = [
    {
      question: "What is VoltXChange and how does it use AI?",
      answer: "VoltXChange is an AI-based smart energy optimization system that coordinates electricity usage, predicts peak loads, and manages solar cell storage. It implements a Deep Q-Network (DQN) Reinforcement Learning agent to make real-time decisions on battery charging and localized grid distribution."
    },
    {
      question: "What is Prathvee's technical specialization?",
      answer: "I specialize in the intersection of Artificial Intelligence, Machine Learning (AIML), and the Internet of Things (IOT). This dual specialization allows me to build both intelligent software layers (like deep learning models) and integrate them with real-world physical hardware (sensor configurations, microcontrollers)."
    },
    {
      question: "How does your athletic background translate to your engineering workflow?",
      answer: "Winning the university gold medal in wrestling and participating in bodybuilding has built an intense work ethic of consistency, perseverance, and high self-discipline. In engineering, this translates to patience in debugging complex models and a drive to solve hard problems without giving up."
    },
    {
      question: "What is your primary career objective?",
      answer: "My target is to apply my coding skills and technical engineering background to high-scale platforms that generate a positive societal impact, while preparing to eventually serve the nation as an officer in the Armed Forces."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="about" className="section about-section" itemScope itemType="http://schema.org/Person">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          
          <div className="objective-card glass-card">
            <div className="card-header">
              <Target size={24} className="accent-icon" />
              <h3>Career Objective</h3>
            </div>
            <p className="objective-text" itemProp="description">
              "To leverage my technical acumen in Artificial Intelligence, Machine Learning, and Internet of Things to contribute to high-impact engineering teams, building scalable solutions that create a positive difference in society."
            </p>
          </div>

          <div className="intro-text-block">
            <p className="intro-para">
              Good morning! I am <strong itemProp="name">Prathvee Raj Singh</strong>, pursuing a BTech in Computer Science Engineering with a specialization in <strong itemProp="knowsAbout">AIML & IOT</strong> at <span itemProp="alumniOf">GLA University, Mathura</span>. Originally from Etawah, UP, I am driven by learning and continuous self-improvement.
            </p>
            <p className="intro-para">
              My ultimate ambition is to join the <strong>Armed Forces as an Officer</strong>, serving the nation with dedication. I believe that my technical background combined with traits like adaptability, determination, and a strong sense of leadership will enable me to lead and deliver solutions effectively.
            </p>
            <div className="wrestling-award-badge" itemProp="award">
              <Award size={20} className="award-icon" />
              <span>University Wrestling Champion (Gold Medalist)</span>
            </div>
          </div>

        </div>

        <div className="values-grid">
          {values.map((val, idx) => (
            <div key={idx} className="value-card glass-card">
              <div className="value-icon-wrapper">
                {val.icon}
              </div>
              <h4 className="value-card-title">{val.title}</h4>
              <p className="value-card-desc">{val.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Accordion (GEO Optimization for Citations and AI Engine Queries) */}
        <div className="faq-container" itemScope itemType="http://schema.org/FAQPage">
          <h3 className="faq-main-title">Common Questions (FAQ)</h3>
          <p className="faq-subtitle">Quick responses designed for search engines and generative bots looking for direct credentials.</p>
          
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item glass-card ${activeFaq === idx ? 'active' : ''}`}
                itemProp="mainEntity" 
                itemScope 
                itemType="http://schema.org/Question"
              >
                <div 
                  className="faq-question-bar" 
                  onClick={() => toggleFaq(idx)}
                  itemProp="name"
                >
                  <h4>{faq.question}</h4>
                  <div className="faq-toggle-icon">
                    {activeFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
                
                <div 
                  className={`faq-answer-content ${activeFaq === idx ? 'open' : ''}`}
                  itemProp="acceptedAnswer" 
                  itemScope 
                  itemType="http://schema.org/Answer"
                >
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
