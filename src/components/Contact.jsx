import React, { useState } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

 const [status, setStatus] = useState('');
 const [submitted, setSubmitted] = useState(null); 

  // Change these to your own EmailJS values
  const SERVICE_ID = "service_e4nomr2";
  const TEMPLATE_ID = "template_5rcl0yn";
  const PUBLIC_KEY = "A7GUgieAylEstZIAT";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus('Your message was sent successfully!');
      setSubmitted(form); 
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <div className="profile-image">
            <img src="/mehra.jpg" alt="Nitesh Kumar" />
          </div>
          <h3>Nitesh Kumar</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="social-links">
            <a href="https://github.com/cs-nitesh96" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/nitesh-kumar-741a362a6/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={form.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={form.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Send Message
            </button>
            {status && <p className="status-message">{status}</p>}


             {submitted && (
              <div className="delivered-message">
                <h4>Delivered Message:</h4>
                <p><strong>Name:</strong> {submitted.name}</p>
                <p><strong>Email:</strong> {submitted.email}</p>
                <p><strong>Message:</strong> {submitted.message}</p>
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>
    </section>
  );
};

export default Contact; 