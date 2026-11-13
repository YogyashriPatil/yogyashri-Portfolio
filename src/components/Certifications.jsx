
import React from "react";
import "../styles/Certifications.css";

const certifications = [
  {
    title: "Java Programming",
    issuer: "ETH",
    score: "94",
    category: "Programming",
    icon: "☕",
    description:
      "Java programming certification demonstrating knowledge of Java concepts.",
    status: "COMPLETED",
    certificateUrl: "",
  },
  {
    title: "MKCL Certification",
    issuer: "MKCL",
    score: "91",
    category: "Technical",
    icon: "🏅",
    description:
      "Successfully completed the MKCL certification assessment.",
    status: "COMPLETED",
    certificateUrl: "",
  },
  {
    title: "AWS Certificate",
    issuer: "Amazon Web Services",
    score: null,
    category: "Cloud Computing",
    icon: "☁️",
    description:
      "Cloud computing learning and certification. Add the exact certificate name here.",
    status: "COMPLETED",
    certificateUrl: "",
  },
];

function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <div className="certifications-container">

        {/* HEADING */}
        <div className="certifications-heading">
          <span className="certifications-command">
            yogyashri@portfolio:~$ ls ~/certifications
          </span>

          <h2>
            Certifications <span>& Achievements.</span>
          </h2>

          <p>
            Learning, earning credentials and continuously improving my skills.
          </p>
        </div>

        {/* TERMINAL HEADER */}
        <div className="cert-terminal-header">
          <div className="cert-terminal-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span>~/portfolio/certifications</span>

          <span className="cert-file-count">
            {certifications.length} FILES
          </span>
        </div>

        {/* CERTIFICATION GRID */}
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              className="certification-card"
              key={cert.title}
              style={{ animationDelay: `${index * 0.15}s` }}
            >

              <div className="cert-card-top">
                <div className="cert-icon">
                  {cert.icon}
                </div>

                <span className="cert-status">
                  <span></span>
                  {cert.status}
                </span>
              </div>

              <span className="cert-category">
                {cert.category}
              </span>

              <h3>{cert.title}</h3>

              <p className="cert-issuer">
                Issued by <span>{cert.issuer}</span>
              </p>

              <p className="cert-description">
                {cert.description}
              </p>

              <div className="cert-card-divider"></div>

              <div className="cert-card-bottom">
                <div className="cert-score">
                  <span>SCORE</span>
                  <strong>
                    {cert.score ? `${cert.score}/100` : "N/A"}
                  </strong>
                </div>

                {cert.certificateUrl ? (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-view-btn"
                  >
                    View Certificate ↗
                  </a>
                ) : (
                  <span className="cert-pending-link">
                    Add certificate link
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* TERMINAL FOOTER */}
        <div className="certifications-footer">
          <span>yogyashri@portfolio:~$</span>
          <span> echo "Learning never stops"</span>
          <span className="cert-footer-cursor">▋</span>
        </div>

      </div>
    </section>
  );
}

export default Certifications;
