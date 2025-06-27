import {
  Code,
  Database,
  Globe,
  Palette,
  Server,
  FileCode,
  GitBranch,
  Layers,
  Monitor,
  Settings,
  Terminal,
  ImageIcon,
} from "lucide-react"
import "./TechStack.css"

const TechStack = () => {
  const technologies = [
    {
      name: "React",
      icon: <Code className="tech-icon" />,
      color: "bg-cyan-500",
      category: "Frontend",
    },
    {
      name: "HTML5",
      icon: <FileCode className="tech-icon" />,
      color: "bg-orange-500",
      category: "Frontend",
    },
    {
      name: "CSS3",
      icon: <Palette className="tech-icon" />,
      color: "bg-blue-500",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: <Terminal className="tech-icon" />,
      color: "bg-yellow-500",
      category: "Language",
    },
    {
      name: "Bootstrap",
      icon: <Layers className="tech-icon" />,
      color: "bg-purple-600",
      category: "Framework",
    },
    {
      name: "Node.js",
      icon: <Server className="tech-icon" />,
      color: "bg-green-600",
      category: "Backend",
    },
    {
      name: "MySQL",
      icon: <Database className="tech-icon" />,
      color: "bg-blue-600",
      category: "Database",
    },
    {
      name: "Python",
      icon: <Code className="tech-icon" />,
      color: "bg-blue-700",
      category: "Language",
    },
    {
      name: "Java",
      icon: <Code className="tech-icon" />,
      color: "bg-red-600",
      category: "Language",
    },
    {
      name: "C++",
      icon: <FileCode className="tech-icon" />,
      color: "bg-indigo-600",
      category: "Language",
    },
    {
      name: "Git",
      icon: <GitBranch className="tech-icon" />,
      color: "bg-orange-600",
      category: "Tool",
    },
    {
      name: "GitHub",
      icon: <GitBranch className="tech-icon" />,
      color: "bg-gray-800",
      category: "Tool",
    },
    {
      name: "VS Code",
      icon: <Monitor className="tech-icon" />,
      color: "bg-blue-500",
      category: "Tool",
    },
    {
      name: "Figma",
      icon: <Palette className="tech-icon" />,
      color: "bg-purple-500",
      category: "Design",
    },
    {
      name: "Canva",
      icon: <ImageIcon className="tech-icon" />,
      color: "bg-cyan-400",
      category: "Design",
    },
  ]

  return (
    <section className="tech-stack-section">
      <div className="tech-stack-container">
        {/* Header */}
        <div className="tech-stack-header">
          <h2 className="tech-stack-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="title-underline"></div>
          <p className="tech-stack-subtitle">Technologies and tools I use to create amazing digital experiences</p>
        </div>

        {/* Horizontal Tech Stack */}
        <div className="tech-stack-wrapper">
          <div className="tech-stack-track">
            {/* First set of technologies */}
            {technologies.map((tech, index) => (
              <div key={`${tech.name}-1`} className="tech-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`tech-icon-wrapper ${tech.color}`}>
                  {tech.icon}
                  <div className="icon-shine"></div>
                  <div className="icon-glow"></div>
                </div>
                <div className="tech-info">
                  <h4 className="tech-name">{tech.name}</h4>
                  <span className="tech-category">{tech.category}</span>
                </div>
                <div className="tech-particles">
                  <div className="particle particle-1"></div>
                  <div className="particle particle-2"></div>
                  <div className="particle particle-3"></div>
                </div>
                <div className="card-shine"></div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {technologies.map((tech, index) => (
              <div key={`${tech.name}-2`} className="tech-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`tech-icon-wrapper ${tech.color}`}>
                  {tech.icon}
                  <div className="icon-shine"></div>
                  <div className="icon-glow"></div>
                </div>
                <div className="tech-info">
                  <h4 className="tech-name">{tech.name}</h4>
                  <span className="tech-category">{tech.category}</span>
                </div>
                <div className="tech-particles">
                  <div className="particle particle-1"></div>
                  <div className="particle particle-2"></div>
                  <div className="particle particle-3"></div>
                </div>
                <div className="card-shine"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Decorations */}
        <div className="background-decorations">
          <div className="floating-element element-1">
            <Code className="floating-icon" />
          </div>
          <div className="floating-element element-2">
            <Globe className="floating-icon" />
          </div>
          <div className="floating-element element-3">
            <Database className="floating-icon" />
          </div>
          <div className="floating-element element-4">
            <Settings className="floating-icon" />
          </div>

          <div className="decorative-orb orb-1"></div>
          <div className="decorative-orb orb-2"></div>
          <div className="decorative-orb orb-3"></div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
