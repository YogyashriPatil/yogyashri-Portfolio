
import React, { useState } from "react";
import "../styles/Projects.css";

const categories = [
  "All Projects",
  "Full Stack",
  "AI / ML",
  "IoT",
  "Web Apps",
];

const projects = [
  {
    id: 1,
    name: "RideWise",
    folder: "ridewise",
    category: "Full Stack",
    number: "01",
    icon: "🚗",
    description:
      "A full-stack ride management web application built to provide a smooth and user-friendly ride experience.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "",
    demo: "",
    featured: true,
    status: "COMPLETED",
  },
  {
    id: 2,
    name: "VibeChat",
    folder: "vibe-chat",
    category: "Full Stack",
    number: "02",
    icon: "💬",
    description:
      "A real-time chatting application with interactive messaging functionality using Socket.IO.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.IO"],
    github: "",
    demo: "",
    featured: false,
    status: "COMPLETED",
  },
  {
    id: 3,
    name: "PlanWala",
    folder: "planwala",
    category: "AI / ML",
    number: "03",
    icon: "🏠",
    description:
      "An AI-powered residential floor plan generation system that converts natural-language requirements into architectural layouts.",
    technologies: ["Next.js", "Python", "Flask", "Gemini API"],
    github: "",
    demo: "",
    featured: true,
    status: "IN DEVELOPMENT",
  },
  {
    id: 4,
    name: "Fruit Chemical Detection",
    folder: "fruit-detection",
    category: "IoT",
    number: "04",
    icon: "🍎",
    description:
      "An IoT and machine learning system designed to analyze fruit sensor readings and predict fruit condition and edibility.",
    technologies: ["Arduino", "Python", "React", "Machine Learning"],
    github: "",
    demo: "",
    featured: false,
    status: "COMPLETED",
  },
  {
    id: 5,
    name: "Chat-to-PDF",
    folder: "chat-to-pdf",
    category: "Web Apps",
    number: "05",
    icon: "📄",
    description:
      "A utility application that converts chat content into downloadable PDF documents.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "",
    demo: "",
    featured: false,
    status: "COMPLETED",
  },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* SECTION HEADING */}
        <div className="projects-heading">
          <span className="projects-command">
            yogyashri@portfolio:~$ ls -la ~/projects
          </span>

          <h2>
            My <span>Projects.</span>
          </h2>

          <p>
            A collection of applications, experiments and things
            I've built while learning and exploring technology.
          </p>
        </div>

        {/* TERMINAL WINDOW */}
        <div className="projects-terminal">

          <div className="projects-terminal-header">
            <div className="projects-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span className="projects-path">
              /home/yogyashri/projects
            </span>

            <span className="projects-count">
              {filteredProjects.length} ITEMS
            </span>
          </div>

          {/* COMMAND */}
          <div className="projects-terminal-command">
            <span>yogyashri@portfolio</span>:~$
            <span className="command-text">
              ls --show-projects
            </span>
          </div>

          {/* FILTERS */}
          <div className="projects-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`project-filter ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PROJECT CARDS */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article
                className="project-card"
                key={project.id}
              >

                <div className="project-card-header">
                  <span className="project-folder-icon">
                    📁
                  </span>

                  <span className="project-number">
                    {project.number}
                  </span>
                </div>

                <div className="project-preview">
                  <span>{project.icon}</span>
                  <div className="preview-overlay">
                    <span>{project.folder}/</span>
                  </div>
                </div>

                <div className="project-card-body">

                  <div className="project-title-row">
                    <h3>{project.name}</h3>

                    {project.featured && (
                      <span className="featured-label">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <span className="project-category">
                    {project.category}
                  </span>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tech-stack">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-card-footer">
                    <span className="project-status">
                      <span></span>
                      {project.status}
                    </span>

                    <div className="project-links">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.name} source code`}
                        >
                          GitHub ↗
                        </a>
                      ) : (
                        <span className="project-link-pending">
                          Add GitHub
                        </span>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>

          {/* TERMINAL FOOTER */}
          <div className="projects-terminal-footer">
            <span>yogyashri@portfolio:~$</span>
            <span> echo "More projects coming soon..."</span>
            <span className="projects-cursor">▋</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;
