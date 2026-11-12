import { useEffect, useState } from "react";
import "../css/profile.css";

const roles = [
  "Computer Engineering Student",
  "Full Stack Developer",
  "Aspiring Software Engineer",
  "Technology Enthusiast",
];

export default function Profile() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = deleting ? 45 : 85;

    if (!deleting && displayedRole === currentRole) {
      delay = 1500;
    } else if (deleting && displayedRole === "") {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!deleting && displayedRole === currentRole) {
        setDeleting(true);
      } else if (deleting && displayedRole === "") {
        setDeleting(false);
        setRoleIndex((previous) => (previous + 1) % roles.length);
      } else {
        setDisplayedRole(
          deleting
            ? currentRole.substring(0, displayedRole.length - 1)
            : currentRole.substring(0, displayedRole.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayedRole, deleting, roleIndex]);

  return (
    <section className="profile-hero" id="home">
      <div className="profile-glow profile-glow-one" />
      <div className="profile-glow profile-glow-two" />

      <div className="profile-content">
        <div className="profile-copy">
          <p className="profile-eyebrow">
            <span className="eyebrow-line" />
            Hello, I'm
          </p>

          <h1 className="profile-name">
            Yogyashri <span>Patil</span>
          </h1>

          <div className="profile-role-line">
            <span className="role-prefix">A </span>
            <span className="profile-typed-role">{displayedRole}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="profile-description">
            A final-year Computer Engineering student passionate about
            building useful digital experiences. I enjoy developing
            full-stack applications, solving problems, and exploring
            technologies that turn ideas into reality.
          </p>

          <div className="profile-highlights">
            <span>Full Stack Development</span>
            <span>Java & DSA</span>
            <span>Cloud & DevOps</span>
          </div>

          <div className="profile-actions">
            <a className="profile-btn profile-btn-primary" href="#about">
              About Me <span aria-hidden="true">↗</span>
            </a>
            <a
              className="profile-btn profile-btn-outline"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="profile-socials" aria-label="Social links">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              GH
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email">
              @
            </a>
          </div>
        </div>

        <div className="profile-visual">
          <div className="profile-orbit orbit-one" />
          <div className="profile-orbit orbit-two" />

          <div className="profile-image-wrap">
            <div className="profile-image-backdrop" />
            <img
              className="profile-image"
              src="/profile.jpg"
              alt="Yogeshri Patil"
              onError={(event) => {
                event.currentTarget.style.opacity = "0";
              }}
            />
          </div>

          <div className="profile-float-card profile-card-ai">
            <span className="float-card-icon">✦</span>
            <span>Creative Thinker</span>
          </div>
          <div className="profile-float-card profile-card-code">
            <span className="float-card-icon">&lt;/&gt;</span>
            <span>Developer</span>
          </div>
          <div className="profile-image-caption">
            <span className="caption-dot" />
            Turning ideas into reality
          </div>
        </div>
      </div>
    </section>
  );
}
