
import React, { useEffect, useState } from "react";
import "../styles/Hero.css";
import profileImage from "../assets/profile.jpg";

const roles = [
  "Full Stack Developer",
  "Computer Engineer",
  "Aspiring DevOps Engineer",
  "Problem Solver"
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = deleting ? 45 : 90;

    if (!deleting && displayText === currentRole) {
      delay = 1500;
    }

    if (deleting && displayText === "") {
      delay = 400;
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (displayText === currentRole) {
          setDeleting(true);
        } else {
          setDisplayText(
            currentRole.substring(0, displayText.length + 1)
          );
        }
      } else {
        if (displayText === "") {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          setDisplayText(
            currentRole.substring(0, displayText.length - 1)
          );
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);

  return (
    <section className="hero-section" id="home">

      {/* Background effects */}
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-terminal-label">
            <span className="terminal-status"></span>
            yogyashri@portfolio:~$ whoami
          </div>

          <p className="hero-greeting">
            Hello World! <span>👋</span>
          </p>

          <h1 className="hero-title">
            I'm <span>Yogyashri</span>
            <br />
            <span className="hero-surname">Patil.</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">~/</span>
            <span>{displayText}</span>
            <span className="role-cursor">|</span>
          </div>

          <p className="hero-description">
            A final-year Computer Engineering student passionate
            about building meaningful applications, solving
            problems and exploring modern technologies.
            Currently exploring Full Stack Development,
            Cloud Computing and DevOps.
          </p>

          {/* Achievement tags */}
          <div className="hero-tags">
            <span>✦ Hackathon Top 40</span>
            <span>✦ Blind Coding Runner-up</span>
            <span>✦ Best Student Award</span>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">

            <a href="#projects" className="hero-btn primary-btn">
              <span>Explore Projects</span>
              <span>↗</span>
            </a>

            <a href="#contact" className="hero-btn secondary-btn">
              Contact Me <span>→</span>
            </a>

          </div>

          {/* Terminal footer */}
          <div className="hero-terminal-footer">
            <span className="footer-user">yogyashri@portfolio</span>
            <span>:</span>
            <span className="footer-path">~</span>
            <span>$ echo "Building my future"</span>
          </div>

        </div>

        {/* RIGHT PROFILE */}
        <div className="hero-image-container">

          <div className="profile-orbit orbit-one"></div>
          <div className="profile-orbit orbit-two"></div>

          <div className="profile-image-wrapper">
            <img
              src={profileImage}
              alt="Yogyashri Patil"
              className="hero-profile-image"
            />
          </div>

          {/* Floating terminal cards */}
          <div className="floating-card card-top">
            <span className="card-icon">{"</>"}</span>
            <div>
              <strong>Developer</strong>
              <small>Building & Creating</small>
            </div>
          </div>

          <div className="floating-card card-bottom">
            <span className="card-icon">⌘</span>
            <div>
              <strong>Always Learning</strong>
              <small>Code. Learn. Repeat.</small>
            </div>
          </div>

          <div className="profile-decoration">Y</div>

        </div>

      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-arrow">↓</span>
      </a>

    </section>
  );
}

export default Hero;
