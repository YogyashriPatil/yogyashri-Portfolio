
import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    type: "PROGRAM EXPERIENCE",
    title: "AI/ML & Web Development Trainee",
    company: "Infosys Springboard",
    program: "Pragati Cohort 9",
    icon: "✦",
    status: "PROGRAM",
    description:
      "Learning and applying AI, Machine Learning and Web Development concepts through practical training and project work.",
    responsibilities: [
      "Exploring AI and Machine Learning concepts.",
      "Developing practical web application skills.",
      "Working on the RideWise project.",
    ],
    technologies: ["Python", "AI/ML", "React", "Web Development"],
  },
  {
    type: "PROJECT EXPERIENCE",
    title: "Full Stack Developer",
    company: "RideWise",
    program: "Project Development",
    icon: "</>",
    status: "PROJECT",
    description:
      "Developing a ride-related web application using the MERN stack as part of practical software development work.",
    responsibilities: [
      "Building user interfaces using React.",
      "Developing backend functionality with Node.js and Express.",
      "Working with MongoDB for data management.",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        {/* HEADING */}
        <div className="experience-heading">
          <span className="experience-command">
            yogyashri@portfolio:~$ git log --experience
          </span>

          <h2>
            Experience <span>& Journey.</span>
          </h2>

          <p>
            Learning, building and growing through practical experience.
          </p>
        </div>

        {/* TERMINAL HEADER */}
        <div className="experience-terminal-header">
          <div className="experience-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span>~/portfolio/experience.log</span>

          <span className="experience-branch">
            main
          </span>
        </div>

        {/* TIMELINE */}
        <div className="experience-timeline">

          <div className="timeline-line"></div>

          {experiences.map((item, index) => (
            <article
              className="experience-card"
              key={item.title}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <span>{item.icon}</span>
              </div>

              <div className="experience-card-content">

                <div className="experience-card-top">
                  <span className="experience-type">
                    {item.type}
                  </span>

                  <span className="experience-status">
                    {item.status}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <div className="experience-company">
                  <span>{item.company}</span>
                  <span className="company-divider">/</span>
                  <span>{item.program}</span>
                </div>

                <p className="experience-description">
                  {item.description}
                </p>

                <div className="experience-responsibilities">
                  <h4>
                    <span>$</span> What I worked on
                  </h4>

                  {item.responsibilities.map((task, i) => (
                    <div className="experience-task" key={i}>
                      <span>›</span>
                      <p>{task}</p>
                    </div>
                  ))}
                </div>

                <div className="experience-tech">
                  {item.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="experience-commit">
                  <span className="commit-dot"></span>
                  commit #{String(index + 1).padStart(3, "0")}
                  <span> • </span>
                  {item.status.toLowerCase()}
                </div>

              </div>
            </article>
          ))}

        </div>

        {/* FOOTER */}
        <div className="experience-footer">
          <span>yogyashri@portfolio:~$</span>
          <span> git status</span>
          <span className="experience-ready">
            ● Always growing
          </span>
        </div>

      </div>
    </section>
  );
}

export default Experience;
