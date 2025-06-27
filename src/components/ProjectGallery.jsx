import { Github, Calendar, ArrowRight, Eye, Code } from "lucide-react"
import "./ProjectGallery.css"

const ProjectGallery = () => {
  const projects = [
    {
      id: 1,
      title: "Song Popularity Predictor",
      year: "2024",
      description:
        "A Song Popularity Predictor uses Machine Learning to estimate a song's success before release based on audio features, artist popularity, and market trends. It leverages Spotify data, sentiment analysis, and past chart performance to train predictive models. This helps artists and labels make data-driven decisions or marketing and distribution.",
      image: "images/hitPredict.png",
      technologies: ["React", "Node.js", "ML", "Python"],
      liveLink: "https://hitpredict.onrender.com/",
      githubLink: "https://github.com/your-username/project",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Weather Application",
      year: "2024",
      description:
        "A real-time weather application that provides accurate forecasts with a clean and intuitive user interface. It fetches live data, including temperature, humidity, and wind speed, ensuring a seamless user experience.",
      image: "images/weather.png",
      technologies: ["HTML", "CSS", " Weather API", "JavaScript"],
      liveLink: "https://your-project-link.com",
      githubLink: "https://github.com/SnehaThapa16/Weather_Application",
      category: "Frontend",
    },
    {
      id: 3,
      title: "Amazon Clone",
      year: "2023",
      description:
        "This project is a front-end clone of Amazon, built using HTML and CSS. It features a responsive design, dynamic navigation bar, and detailed product listings, all styled to closely resemble the original website. The project aims to enhance skills in web design and front-end development.",
      image: "images/amazon.png",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      liveLink: "https://your-project-link.com",
      githubLink: "https://github.com/SnehaThapa16/Amazon-Clone",
      category: "Frontend",
    },
    {
      id: 4,
      title: "Portfolio Website",
      year: "2025",
      description:
        "A modern, responsive portfolio website showcasing my skills and projects with smooth animations and interactive elements.",
      image: "images/portfolio.png",
      technologies: ["React", "CSS3", "JavaScript", "Figma"],
      liveLink: "https://snehathapa-portfolio.netlify.app/",
      githubLink: "https://github.com/SnehaThapa16/portfolio_website",
      category: "Frontend",
    },
  ]

  return (
    <section className="project-gallery-section">
      <div className="project-gallery-container" id="projects">
        {/* Header */}
        <div className="gallery-header">
          <h2 className="gallery-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="title-underline">
            <div className="underline-dot"></div>
          </div>
          <p className="gallery-subtitle">A showcase of my creative work and technical expertise</p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${index % 2 === 0 ? "left-aligned" : "right-aligned"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="project-image-container">
                <div className="project-image-wrapper">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-button primary"
                      >
                        <Eye className="button-icon" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-button secondary"
                      >
                        <Github className="button-icon" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="floating-elements">
                  <div className="floating-dot dot-1"></div>
                  <div className="floating-dot dot-2"></div>
                  <div className="floating-dot dot-3"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className="project-info">
                <div className="project-header">
                  <div className="project-year">
                    <Calendar className="calendar-icon" />
                    <span>{project.year}</span>
                  </div>
                  <div className="project-category">{project.category}</div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button primary"
                  >
                    <span>View Project</span>
                    <ArrowRight className="action-icon" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button secondary"
                  >
                    <Code className="action-icon" />
                  </a>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="card-decorations">
                <div className="decoration-line"></div>
                <div className="decoration-dots">
                  <div className="decoration-dot"></div>
                  <div className="decoration-dot"></div>
                  <div className="decoration-dot"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Background Effects */}
        <div className="gallery-background-effects">
          <div className="bg-shape shape-1"></div>
          <div className="bg-shape shape-2"></div>
          <div className="bg-shape shape-3"></div>
          <div className="bg-orb orb-1"></div>
          <div className="bg-orb orb-2"></div>
        </div>
      </div>
    </section>
  )
}

export default ProjectGallery
