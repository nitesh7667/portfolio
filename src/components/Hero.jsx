import '../styles/Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="profile-image">
          <img src="/mehra.jpg" alt="Nitesh Kumar" />
        </div>
        <h1>Hi, I'm <span className="highlight">Nitesh Kumar</span></h1>
        <h2>Frontend Developer</h2>
        <p>I create beautiful and functional web experiences</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero 