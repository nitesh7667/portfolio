import React from 'react';
import '../styles/Contact.css';

const Thanks = () => {
  return (
    <section className="contact">
      <div className="contact-container" style={{ textAlign: 'center' }}>
        <h2>Thank You!</h2>
        <p>Your message has been sent successfully.</p>
        <p>I'll get back to you as soon as possible.</p>
        <a href="/" className="btn" style={{ marginTop: '20px' }}>
          Return to Home
        </a>
      </div>
    </section>
  );
};

export default Thanks; 