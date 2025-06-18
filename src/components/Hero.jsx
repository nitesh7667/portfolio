import React from 'react';
import '../styles/Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <img src="/mehra.jpg" alt="Nitesh Kumar" />
          </div>
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Nitesh Kumar</span></h1>
            <p className="title">Full Stack Developer</p>
            <p className="description">
              I create beautiful, functional, and user-centered digital experiences.
              Passionate about clean code and innovative solutions.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>
    </section>
  )
}

export default Hero 