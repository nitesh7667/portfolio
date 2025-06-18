import { useState } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDownload = () => {
    // Use the correct path for Vercel deployment
    const resumeUrl = '/nitesh kumar.pdf' // PDF file in the public folder
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Nitesh_Kumar_Resume.pdf'
    link.target = '_blank' // Open in new tab if download fails
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home">Portfolio</a>
      </div>
      
      <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button className="download-btn" onClick={handleDownload}>
          Download Resume
        </button>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar 