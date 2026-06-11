import React from 'react';
import { Calendar, GraduationCap, Award, Trophy } from 'lucide-react';
import './Education.css';

export default function Education() {
  const educationTimeline = [
    {
      type: "degree",
      title: "BTech in Computer Science Engineering (AIML & IOT)",
      institution: "GLA University, Mathura",
      duration: "2023 - 2027",
      metricLabel: "CGPA",
      metricValue: "6.5+",
      description: "Focused on core computing, embedded sensor networks, reinforcement learning systems, and machine learning pipelines. Active participant in coding challenges."
    },
    {
      type: "schooling",
      title: "Intermediate (12th Grade)",
      institution: "Senior Secondary Board",
      duration: "2021 - 2023",
      metricLabel: "Percentage",
      metricValue: "65%",
      description: "Focused on core science subjects: Physics, Chemistry, and Advanced Mathematics."
    },
    {
      type: "schooling",
      title: "Matriculation (10th Grade)",
      institution: "Secondary School Board",
      duration: "2019 - 2021",
      metricLabel: "Percentage",
      metricValue: "80%",
      description: "Acquired a strong foundation in general sciences, mathematics, and computer applications."
    }
  ];

  const extras = [
    {
      icon: <Award className="extra-icon text-cyan" size={22} />,
      title: "Python & C Diploma Certification",
      issuer: "Professional Coding Academy",
      desc: "Comprehensive training in object-oriented programming, data structures, and structural logic using C and Python."
    },
    {
      icon: <Trophy className="extra-icon text-gold" size={22} />,
      title: "1st Prize in University Wrestling",
      issuer: "GLA University Athletics",
      desc: "Secured gold medal in the annual university wrestling championship, representing perseverance and physical fitness."
    },
    {
      icon: <GraduationCap className="extra-icon text-purple" size={22} />,
      title: "College Codethons",
      issuer: "GLA Hackathons",
      desc: "Participated in university-level coding sprints and algorithms challenges, designing prototypes under time constraints."
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education & Achievements</h2>

        <div className="edu-grid">
          
          {/* Left Side: Timeline */}
          <div className="timeline-container">
            <h3 className="sub-section-title">Academic Journey</h3>
            
            <div className="timeline">
              <div className="timeline-line"></div>
              
              {educationTimeline.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot">
                    <GraduationCap size={16} />
                  </div>
                  
                  <div className="timeline-card glass-card">
                    <div className="timeline-header">
                      <span className="timeline-date">
                        <Calendar size={14} /> {item.duration}
                      </span>
                      <span className="timeline-badge">
                        {item.metricLabel}: {item.metricValue}
                      </span>
                    </div>
                    
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-inst">{item.institution}</p>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Certs & Extra Awards */}
          <div className="extras-container">
            <h3 className="sub-section-title">Certifications & Honors</h3>
            
            <div className="extras-list">
              {extras.map((extra, idx) => (
                <div key={idx} className="extra-item-card glass-card">
                  <div className="extra-icon-box">
                    {extra.icon}
                  </div>
                  <div className="extra-info-text">
                    <h4 className="extra-title">{extra.title}</h4>
                    <span className="extra-issuer">{extra.issuer}</span>
                    <p className="extra-desc">{extra.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
