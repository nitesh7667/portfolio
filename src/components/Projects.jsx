import '../styles/Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Watch Together',
      description: 'A video streaming platform that allows users to watch videos together through URL sharing. Features include synchronized playback and real-time chat.',
      technologies: ['React', 'Node.js', 'Express', 'Socket.io'],
      image: '/watch together.jpg'
    },
    {
      title: 'Spotify',
      description: 'A clone of the popular music streaming platform Spotify. Features include music playback, playlist management, and a responsive design.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Spotify API'],
      image: '/sportyfy.png'
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
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects 