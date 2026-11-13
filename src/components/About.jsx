
import React from "react";
import "../styles/About.css";

const aboutDetails = [
  {
    icon: "🎓",
    label: "EDUCATION",
    value: "B.Tech Computer Engineering",
  },
  {
    icon: "📊",
    label: "CGPA",
    value: "7.67 / 10",
  },
  {
    icon: "💻",
    label: "FOCUS",
    value: "Full Stack & DevOps",
  },
  {
    icon: "🚀",
    label: "MINDSET",
    value: "Learn • Build • Improve",
  },
];

const achievements = [
  {
    number: "01",
    title: "Hackathon Achievement",
    description: "Secured a place among the Top 40 teams nationwide.",
  },
  {
    number: "02",
    title: "Blind Coding Champion",
    description: "State-level Blind Coding Competition Runner-up.",
  },
  {
    number: "03",
    title: "Best Student Award",
    description: "Recognized at the .NET MAUI workshop.",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* SECTION HEADING */}
        <div className="about-heading">
          <span className="about-command">
            yogyashri@portfolio:~$ cat about.txt
          </span>

          <h2>
            About <span>Me.</span>
          </h2>

          <p>
            Getting to know the developer behind the code.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="about-grid">

          {/* LEFT: INTRODUCTION */}
          <div className="about-intro">

            <div className="about-terminal">
              <div className="about-terminal-header">
                <div className="about-window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span>about.txt — terminal</span>

                <span className="terminal-file-icon">TXT</span>
              </div>

              <div className="about-terminal-body">

                <p className="about-code-line">
                  <span className="line-number">01</span>
                  <span className="code-orange">
                    const developer
                  </span>
                  {" = {"}
                </p>

                <p className="about-code-line indent">
                  <span className="line-number">02</span>
                  <span className="code-key">name:</span>
                  <span className="code-green">
                    "Yogyashri Patil"
                  </span>,
                </p>

                <p className="about-code-line indent">
                  <span className="line-number">03</span>
                  <span className="code-key">role:</span>
                  <span className="code-green">
                    "Computer Engineer"
                  </span>,
                </p>

                <p className="about-code-line indent">
                  <span className="line-number">04</span>
                  <span className="code-key">education:</span>
                  <span className="code-green">
                    "B.Tech"
                  </span>,
                </p>

                <p className="about-code-line indent">
                  <span className="line-number">05</span>
                  <span className="code-key">cgpa:</span>
                  <span className="code-purple">7.67</span>,
                </p>

                <p className="about-code-line indent">
                  <span className="line-number">06</span>
                  <span className="code-key">interests:</span>
                  <span className="code-green">
                    ["Development", "DevOps"]
                  </span>
                </p>

                <p className="about-code-line">
                  <span className="line-number">07</span>
                  {"};"}
                </p>

                <div className="about-divider"></div>

                <p className="about-description">
                  I'm a final-year Computer Engineering student
                  who enjoys turning ideas into practical
                  applications. I love exploring technologies,
                  developing web applications and solving
                  programming challenges.
                </p>

                <p className="about-description">
                  My journey includes working with the MERN
                  stack, Java and Python, while continuously
                  exploring cloud computing and DevOps.
                  I believe in learning by building real-world
                  projects and improving with every experience.
                </p>

                <div className="about-terminal-bottom">
                  <span>yogyashri@portfolio:~$</span>
                  <span className="about-blink">▋</span>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT: INFORMATION CARDS */}
          <div className="about-info">

            <div className="about-info-heading">
              <span className="info-hash">#</span>
              Quick Information
            </div>

            <div className="about-detail-grid">
              {aboutDetails.map((item, index) => (
                <div
                  className="about-detail-card"
                  key={index}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <span className="detail-icon">{item.icon}</span>

                  <div>
                    <span className="detail-label">
                      {item.label}
                    </span>

                    <h3>{item.value}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* ACHIEVEMENTS */}
            <div className="achievements-box">

              <div className="achievements-heading">
                <span>~/</span> achievements
              </div>

              {achievements.map((item) => (
                <div className="achievement-item" key={item.number}>
                  <span className="achievement-number">
                    {item.number}
                  </span>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>

        {/* EDUCATION JOURNEY */}
        <div className="about-journey">
          <div className="journey-title">
            <span>$</span> cat education.log
          </div>

          <div className="journey-grid">

            <div className="journey-card">
              <span className="journey-icon">🎓</span>
              <span className="journey-tag">CURRENT</span>
              <h3>B.Tech Computer Engineering</h3>
              <p>SVKM's Institute of Technology, Dhule</p>
              <span className="journey-meta">
                CGPA: 7.67
              </span>
            </div>

            <div className="journey-card">
              <span className="journey-icon">💻</span>
              <span className="journey-tag">COMPLETED</span>
              <h3>Diploma in Computer Engineering</h3>
              <p>Nikam Institute of Technology, Gondur</p>
              <span className="journey-meta">
                Technical Foundation
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
