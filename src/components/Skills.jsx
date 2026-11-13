
import React, { useState } from "react";
import "../styles/Skills.css";

const skillCategories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "Cloud & DevOps",
  "Tools",
];

const skills = [
  // Languages
  { name: "Java", category: "Languages", icon: "☕", description: "Programming & DSA" },
  { name: "Python", category: "Languages", icon: "🐍", description: "ML & Backend" },
  { name: "JavaScript", category: "Languages", icon: "JS", description: "Web Development" },

  // Frontend
  { name: "React.js", category: "Frontend", icon: "⚛", description: "Component-based UI" },
  { name: "Next.js", category: "Frontend", icon: "▲", description: "Full Stack React" },
  { name: "HTML5", category: "Frontend", icon: "🌐", description: "Web Structure" },
  { name: "CSS3", category: "Frontend", icon: "🎨", description: "Responsive Styling" },

  // Backend
  { name: "Node.js", category: "Backend", icon: "🟢", description: "Server-side JavaScript" },
  { name: "Express.js", category: "Backend", icon: "🚀", description: "REST APIs" },
  { name: "Flask", category: "Backend", icon: "🐍", description: "Python Backend" },

  // Database
  { name: "MongoDB", category: "Database", icon: "🍃", description: "NoSQL Database" },
  { name: "PostgreSQL", category: "Database", icon: "🐘", description: "Relational Database" },
  { name: "MySQL", category: "Database", icon: "🗄️", description: "SQL Database" },

  // Cloud and DevOps
  { name: "AWS", category: "Cloud & DevOps", icon: "☁️", description: "Cloud Fundamentals" },
  { name: "Docker", category: "Cloud & DevOps", icon: "🐳", description: "Containerization" },
  { name: "Linux", category: "Cloud & DevOps", icon: "🐧", description: "Command Line" },

  // Tools
  { name: "Git", category: "Tools", icon: "🔀", description: "Version Control" },
  { name: "GitHub", category: "Tools", icon: "🐙", description: "Code Collaboration" },
  { name: "VS Code", category: "Tools", icon: "💻", description: "Code Editor" },
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter(
          (skill) => skill.category === activeCategory
        );

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* HEADING */}
        <div className="skills-heading">
          <span className="skills-command">
            yogyashri@portfolio:~$ ls ~/skills
          </span>

          <h2>
            Technical <span>Skills.</span>
          </h2>

          <p>
            Technologies and tools I use to turn ideas into applications.
          </p>
        </div>

        {/* TERMINAL INFO */}
        <div className="skills-terminal-bar">
          <div className="skills-terminal-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span>~/portfolio/technical-skills</span>

          <span className="skills-terminal-status">
            {filteredSkills.length} ITEMS
          </span>
        </div>

        {/* FILTER BUTTONS */}
        <div className="skills-filters">
          {skillCategories.map((category) => (
            <button
              key={category}
              className={`skill-filter ${
                activeCategory === category ? "filter-active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category === "All" ? "ls -all" : category}
            </button>
          ))}
        </div>

        {/* SKILL CARDS */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className="skill-card-top">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-extension">.dev</span>
              </div>

              <h3>{skill.name}</h3>

              <p>{skill.description}</p>

              <div className="skill-card-bottom">
                <span>{skill.category}</span>
                <span className="skill-arrow">↗</span>
              </div>
            </div>
          ))}
        </div>

        {/* TERMINAL FOOTER */}
        <div className="skills-footer">
          <span className="skills-prompt">
            yogyashri@portfolio:~$
          </span>
          <span> echo "Always learning new technologies"</span>
          <span className="skills-cursor">▋</span>
        </div>

      </div>
    </section>
  );
}

export default Skills;
