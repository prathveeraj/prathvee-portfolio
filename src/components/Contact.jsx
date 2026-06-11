import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Mock form submission delay
    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        error: null
      });
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <p className="contact-subtitle-text">
          Have an opportunity, project collaboration, or just want to say hello? Drop me a line!
        </p>

        <div className="contact-grid">
          
          {/* Info Side */}
          <div className="contact-info">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-desc">
              Feel free to reach out to me through any of the channels below. I will get back to you as soon as possible.
            </p>

            <div className="info-cards">
              
              <div className="info-card glass-card">
                <div className="info-icon-box">
                  <Mail className="info-icon" size={20} />
                </div>
                <div className="info-details">
                  <span>Email</span>
                  <a href="mailto:prathveerajs2004@gmail.com">prathveerajs2004@gmail.com</a>
                </div>
              </div>

              <div className="info-card glass-card">
                <div className="info-icon-box">
                  <Phone className="info-icon" size={20} />
                </div>
                <div className="info-details">
                  <span>Phone</span>
                  <a href="tel:+918839330009">+91 88393 30009</a>
                </div>
              </div>

              <div className="info-card glass-card">
                <div className="info-icon-box">
                  <MapPin className="info-icon" size={20} />
                </div>
                <div className="info-details">
                  <span>Location</span>
                  <p>GLA University, Mathura, UP, India</p>
                </div>
              </div>

            </div>

            <div className="resume-section">
              <p>Looking for a detailed offline overview of my credentials?</p>
              <a 
                href="/resume.pdf" 
                download="Prathvee_Raj_Singh_Resume.pdf"
                className="gradient-btn resume-btn"
              >
                <Download size={18} /> Download Resume
              </a>
              <span className="resume-tip">Note: Place your PDF file as 'resume.pdf' in the public directory to enable download.</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-container glass-card">
            <h3 className="form-title">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Hi Prathvee, I would like to talk about..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="gradient-btn submit-btn"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>

              {status.success && (
                <div className="form-alert success">
                  Message sent successfully! Thank you for reaching out.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
