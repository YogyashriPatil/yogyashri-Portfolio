
import React from "react";
import "../styles/Github.css";

const username = "yogyashripatil";

function Github() {
  return (
    <section className="github-section" id="github">
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">{"// open_source.exe"}</span>
          <h2>GitHub <span>Activity</span></h2>
          <p>Code, commits, experiments and continuous learning.</p>
        </div>

        <div className="github-terminal">
          <div className="github-terminal-header">
            <div className="terminal-dots">
              <span />
              <span />
              <span />
            </div>
            <span>yogyashri@github: ~/activity</span>
            <span className="terminal-status">● ONLINE</span>
          </div>

          <div className="github-terminal-body">
            <p className="github-command">
              <span>➜</span> github profile --username {username}
            </p>

            <div className="github-profile">
              <div className="github-avatar">
                <img
                  src={`https://github.com/${username}.png`}
                  alt="GitHub profile avatar"
                />
              </div>

              <div className="github-profile-info">
                <h3>Yogyashri Patil</h3>
                <p>@{username}</p>
                <span>
                  Full Stack Developer | GenAI Enthusiast | Computer Engineer
                </span>
              </div>

              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noreferrer"
                className="github-visit-btn"
              >
                Visit GitHub ↗
              </a>
            </div>

            <div className="github-stats-grid">
              <div className="github-stat">
                <span className="stat-icon">⌘</span>
                <div>
                  <h4>Repositories</h4>
                  <p>Explore my projects</p>
                </div>
              </div>

              <div className="github-stat">
                <span className="stat-icon">★</span>
                <div>
                  <h4>Open Source</h4>
                  <p>Learning by building</p>
                </div>
              </div>

              <div className="github-stat">
                <span className="stat-icon">⌁</span>
                <div>
                  <h4>Contributions</h4>
                  <p>Consistent progress</p>
                </div>
              </div>
            </div>

            <div className="github-activity">
              <div className="github-block-heading">
                <h3>Contribution Graph</h3>
                <span>PUBLIC ACTIVITY</span>
              </div>

              <img
                className="contribution-graph"
                src={`https://ghchart.rshah.org/ff8a24/${username}`}
                alt="GitHub contribution graph"
                loading="lazy"
              />
            </div>

            <div className="github-cards">
              <div className="github-card">
                <h3>GitHub Statistics</h3>
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=141414&title_color=ff8a24&icon_color=ff8a24&text_color=f5f5f5`}
                  alt="GitHub statistics"
                  loading="lazy"
                />
              </div>

              <div className="github-card">
                <h3>Top Languages</h3>
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=141414&title_color=ff8a24&text_color=f5f5f5`}
                  alt="Most used programming languages"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="github-footer">
              <span>➜</span> Keep learning. Keep building. Keep committing.
              <span className="cursor">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Github;
