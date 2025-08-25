import '../styles/Projects.css'
import { Link } from "react-router-dom";


const Projects = () => {
  const projects = [
    {
      title: 'WATCH TOGETHER',
      description: 'A video streaming platform that allows users to watch videos together through URL sharing. Features include synchronized playback and real-time chat.',
      technologies: ['React, Node.js, Express, Socket.io,tailwind css'],
      image: '/watch together.jpg',
      link:"#"
    },
    // {
    //   title: 'Spotify',
    //   description: 'A clone of the popular music streaming platform Spotify. Features include music playback, playlist management, and a responsive design.',
    //   technologies: ['HTML5', 'CSS3', 'JavaScript', 'Spotify API'],
    //   image: '/sportyfy.png'
    // }


    {
      title:"ZERODHA CLONE",
      description:"A full-stack Zerodha clone built with React, Node.js, and MongoDB, featuring user authentication, stock dashboard, and buy/sell simulation.",
      technologies:['React, node.js, express js, mongoDB, tailwind css'],
      image:"image.png",
      link:"https://zerodha-jpko8hlzl-nitesh-kumars-projects-1f503ff7.vercel.app/"
    },
    {
      title:"MY PORTFOLIO",
      description:"Personal portfolio website built with React.js to showcase my projects, skills, and experience, featuring a responsive design and clean UI for an interactive user experience.",
      technologies:['React js , tailwind css, bootstrap'],
      image:"port.png",
      link:"https://portfolio-umber-phi-nvju4zr3qt.vercel.app/"
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
               <div className="project-actions">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects 