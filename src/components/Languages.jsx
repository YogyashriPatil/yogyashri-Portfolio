import "../css/languages.css";

const languages = [
  { name: "English", level: "Intermediate", progress: 65 },
  { name: "German", level: "Beginner", progress: 30 },
  { name: "Hindi", level: "Fluent", progress: 90 },
];

export default function Languages() {
  return (
    <section className="languages-section" id="languages">
      <div className="languages-heading">
        <span className="languages-kicker">A little about how I communicate</span>
        <h2>Languages <span>&amp; Communication</span></h2>
        <p>The languages I use to learn, connect, and collaborate.</p>
      </div>

      <div className="languages-card">
        <div className="languages-card-top">
          <span className="languages-card-label">MY LANGUAGES</span>
          <span className="languages-card-icon" aria-hidden="true">文</span>
        </div>

        <div className="language-list">
          {languages.map((language, index) => (
            <div className="language-item" key={language.name}>
              <div className="language-info">
                <span className="language-name">{language.name}</span>
                <span className="language-level">{language.level}</span>
              </div>

              <div
                className="language-track"
                role="progressbar"
                aria-label={`${language.name} proficiency`}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={language.progress}
              >
                <span
                  className="language-fill"
                  style={{
                    "--language-progress": `${language.progress}%`,
                    "--language-delay": `${index * 180}ms`,
                  }}
                />
                <span
                  className="language-knob"
                  style={{
                    left: `${language.progress}%`,
                    "--language-delay": `${index * 180}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="languages-card-footer">
          <span className="language-footer-dot" />
          Always learning, always improving
        </div>
      </div>
    </section>
  );
}
