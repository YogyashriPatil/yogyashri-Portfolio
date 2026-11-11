import { useEffect, useState } from "react";
import "../css/github-projects.css";

const GITHUB_USERNAME = "YogyashriPatil";

// Only these four repositories will appear in the portfolio.
const SELECTED_REPOSITORIES = [
  "RideWise",
  "house-plan-generation-website",
  "chat-to-AI-PDF-build-own-AI",
  "vibechat",
];

export default function GitHubProjects() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function fetchSelectedRepositories() {
      try {
        setLoading(true);
        setError("");

        const results = await Promise.all(
          SELECTED_REPOSITORIES.map(async (repoName) => {
            const response = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`
            );

            if (!response.ok) {
              throw new Error(
                `Couldn't load "${repoName}". Check that the repository is public and the name is correct.`
              );
            }

            return response.json();
          })
        );

        if (!cancelled) {
          // Preserve the exact order selected above.
          setRepositories(results);
        }
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchSelectedRepositories();

    return () => {
      cancelled = true;
    };
  }, []);

  const formatDate = (date) => {
    const updated = new Date(date);
    const days = Math.max(
      0,
      Math.floor((Date.now() - updated.getTime()) / (1000 * 60 * 60 * 24))
    );

    if (days === 0) return "Updated today";
    if (days === 1) return "Updated yesterday";
    if (days < 30) return `Updated ${days} days ago`;

    const months = Math.floor(days / 30);
    if (months < 12) return `Updated ${months} months ago`;

    return `Updated ${Math.floor(months / 12)} years ago`;
  };

  return (
    <section id="github-projects" className="github-projects">
      <div className="github-terminal-heading">
        <span className="terminal-folder">▱</span>
        <span>$ ls -la ~/projects</span>
      </div>

      {loading && (
        <p className="github-status">Loading your selected GitHub projects...</p>
      )}

      {error && (
        <div className="github-error" role="alert">
          <span>{error}</span>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
                Open GitHub profile ↗
          </a>
        </div>
      )}

      {!loading && !error && (
        <div className="github-dashboard">
          <aside className="github-sidebar">
            <div className="github-sidebar-header">
              <span>▣ &nbsp; Selected Repositories</span>
              <span className="github-count">{repositories.length}</span>
            </div>

            <div className="github-repository-list">
              {repositories.map((repo) => (
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="github-repository-item"
                  key={repo.id}
                >
                  <div className="repository-name-row">
                    <span>{repo.name}</span>
                    <span className="repository-visibility">
                      {repo.private ? "Private" : "Public"}
                    </span>
                  </div>

                  {repo.language && (
                    <div className="repository-language">
                      <span className="language-dot" />
                      {repo.language}
                    </div>
                  )}

                  <span className="repository-updated">
                    {formatDate(repo.updated_at)}
                  </span>
                </a>
              ))}
            </div>
          </aside>

          <div className="github-featured">
            <div className="github-section-title">
              <span>SELECTED PROJECTS</span>
              <div />
            </div>

            <div className="github-project-grid">
              {repositories.map((repo) => (
                <article className="github-project-card" key={repo.id}>
                  <div className="project-card-header">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="project-name"
                    >
                      ▣ &nbsp; {repo.name}
                    </a>

                    <span className="repository-visibility">
                      {repo.private ? "Private" : "Public"}
                    </span>
                  </div>

                  <p className="project-description">
                    {repo.description || "Explore this project on GitHub."}
                  </p>

                  <div className="project-tags">
                    {repo.language && <span>{repo.language}</span>}
                    {(repo.topics || []).slice(0, 5).map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>

                  <div className="project-card-footer">
                    <span>
                      <span className="language-dot" />
                      {repo.language || "Other"}
                    </span>
                    <span>☆ {repo.stargazers_count}</span>
                    <span>⑂ {repo.forks_count}</span>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="github-demo-link"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="github-view-all"
            >
              Visit my GitHub profile ↗
            </a>
          </div>
        </div>
      )}
    </section>
  );
}