import './Projects.css'
import projects from '../../data/projects.json'

function Projects() {
  return (
    <div className="background-bright">
      <div className="container">
        <div className="projects-section">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              {project.imageLink && (
                <img
                  src={project.imageLink}
                  alt={project.title}
                  className="project-image"
                />
              )}

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <p><span key={tech}>{tech}</span><span className="horizontal-line"></span></p> 
                ))}
              </div>

              <div className="project-links">
                <a href={project.link} target="_blank" rel="noreferrer">
                  Live Demo
                </a>

                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects