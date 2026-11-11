import { useMemo, useState } from "react";
import "../css/certificates.css";

const certificates = [
  {
    id: 1,
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    year: "2026",
    category: "Cloud",
    image: "/certificates/microsoft-azure-fundamentals.png",
    file: "/certificates/microsoft-azure-fundamentals.png",
    credential: "C4DAEBC2D8BB8996",
  },
  {
    id: 2,
    title: "Azure Fundamentals: Cloud Computing",
    issuer: "Infosys Springboard",
    year: "2026",
    category: "Cloud",
    image: "/certificates/azure-fundamentals-cloud-computing.jpg",
    file: "/certificates/azure-fundamentals-cloud-computing.pdf",
    credential: "Certificate No. 310103",
  },
  {
    id: 3,
    title: "Pragati: Path to Future – Cohort 9",
    issuer: "Infosys Springboard",
    year: "2026",
    category: "Program",
    image: "/certificates/infosys-pragati-cohort-9.jpg",
    file: "/certificates/infosys-pragati-cohort-9.pdf",
    detail: "Issued October 16, 2026",
  },
  {
    id: 4,
    title: "RideWise: Predicting Bike-Sharing Demand",
    issuer: "Infosys Springboard",
    year: "2026",
    category: "Internship",
    image: "/certificates/infosys-ridewise-internship.jpg",
    file: "/certificates/infosys-ridewise-internship.pdf",
    detail: "Internship 6.0 · November 2025 – January 2026",
  },
  {
    id: 5,
    title: "ReactJS for Beginners",
    issuer: "Simplilearn",
    year: "2026",
    category: "Development",
    image: "/certificates/simplilearn-reactjs-for-beginners.jpg",
    file: "/certificates/simplilearn-reactjs-for-beginners.pdf",
    credential: "Certificate Code: 10394588",
  },
  {
    id: 6,
    title: "Complete Responsive Web Development Bootcamp",
    issuer: "Udemy",
    year: "2025",
    category: "Development",
    image: "/certificates/udemy-responsive-web-development.jpg",
    file: "/certificates/udemy-responsive-web-development.jpg",
  },
  {
    id: 7,
    title: "Certificate in Java Language",
    issuer: "ETH Research Lab",
    year: "2023",
    category: "Programming",
    image: "/certificates/eth-java.jpg",
    file: "/certificates/eth-java.jpg",
    detail: "Grade A+ · June 2023 batch",
  },
  {
    id: 8,
    title: "Employability Skill Programme",
    issuer: "Mahindra Pride Classroom",
    year: "2024",
    category: "Program",
    image: "/certificates/mahindra-pride.jpg",
    file: "/certificates/mahindra-pride.jpg",
    detail: "Naandi Foundation · 2023–2024",
  },
  {
    id: 9,
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    year: "2025",
    category: "AI",
    image: "/certificates/outskill-generative-ai.jpg",
    file: "/certificates/outskill-generative-ai.jpg",
  },
  {
    id: 10,
    title: "Social Winter of Code – Season 5",
    issuer: "Social Winter of Code",
    year: "2025",
    category: "Open Source",
    image: "/certificates/social-winter-of-code.jpg",
    file: "/certificates/social-winter-of-code.jpg",
    detail: "Contributor",
  },
  {
    id: 11,
    title: "HackerRank Orchestrate – October Edition",
    issuer: "HackerRank",
    year: "2025",
    category: "Event",
    image: "/certificates/hackerrank-orchestrate.gif",
    file: "/certificates/hackerrank-orchestrate.gif",
    detail: "Participant",
  },
];

const filters = ["All", ...new Set(certificates.map((item) => item.issuer))];

export default function Certificates() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const visibleCertificates = useMemo(
    () =>
      activeFilter === "All"
        ? certificates
        : certificates.filter((item) => item.issuer === activeFilter),
    [activeFilter]
  );

  return (
    <section className="credentials-section" id="certificates">
      <div className="credentials-header">
        <div>
          <p className="credentials-eyebrow">Learning · Growth · Recognition</p>
          <h2 className="credentials-heading">Professional Credentials</h2>
          <p className="credentials-subtitle">
            Certifications, learning programs, and achievements from my journey.
          </p>
        </div>
        <span className="credentials-count">
          {String(visibleCertificates.length).padStart(2, "0")}{" "}
          <span>/ {String(certificates.length).padStart(2, "0")} · {activeFilter.toUpperCase()}</span>
        </span>
      </div>

      <div className="credentials-filters" aria-label="Filter certificates by issuer">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={`credential-filter ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
            {filter === "All" ? (
              <span>{certificates.length}</span>
            ) : (
              <span>
                {String(certificates.filter((item) => item.issuer === filter).length).padStart(2, "0")}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="credentials-grid">
        {visibleCertificates.map((certificate, index) => (
          <article className="credential-card" key={certificate.id}>
            <button
              type="button"
              className="credential-preview"
              onClick={() => setSelectedCertificate(certificate)}
              aria-label={`Preview ${certificate.title}`}
            >
              <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                loading="lazy"
                className="credential-image"
              />
              <span className="credential-zoom">View certificate ↗</span>
            </button>

            <div className="credential-card-content">
              <div className="credential-card-topline">
                <span className="credential-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="credential-category">{certificate.category}</span>
              </div>
              <h3 className="credential-title">{certificate.title}</h3>
              <p className="credential-issuer">
                {certificate.issuer} <span>·</span> {certificate.year}
              </p>
              {certificate.detail && (
                <p className="credential-detail">{certificate.detail}</p>
              )}
              {certificate.credential && (
                <p className="credential-detail">{certificate.credential}</p>
              )}
              <a
                className="credential-link"
                href={certificate.file}
                target="_blank"
                rel="noreferrer"
              >
                View credential <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {selectedCertificate && (
        <div
          className="credential-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCertificate.title}
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="credential-modal-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="credential-modal-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate preview"
            >
              ×
            </button>
            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} certificate preview`}
              className="credential-modal-image"
            />
            <div className="credential-modal-footer">
              <div>
                <h3>{selectedCertificate.title}</h3>
                <p>{selectedCertificate.issuer} · {selectedCertificate.year}</p>
              </div>
              <a href={selectedCertificate.file} target="_blank" rel="noreferrer">
                Open original ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
