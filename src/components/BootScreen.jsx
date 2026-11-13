
import React, { useEffect, useState } from "react";
import "../styles/BootScreen.css";
const bootMessages = [
  "Initializing Yogyashri OS...",
  "Loading kernel modules...",
  "Mounting developer environment...",
  "Checking system dependencies...",
  "Loading React components...",
  "Connecting to GitHub...",
  "Starting portfolio services...",
  "System ready."
];

function BootScreen({ onComplete }) {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let index = 0;

    const messageInterval = setInterval(() => {
      if (index < bootMessages.length) {
        setVisibleMessages((prev) => [
          ...prev,
          bootMessages[index]
        ]);

        setProgress(Math.round(((index + 1) / bootMessages.length) * 100));
        index++;
      } else {
        clearInterval(messageInterval);

        setTimeout(() => {
          onComplete();
        }, 900);
      }
    }, 450);

    return () => clearInterval(messageInterval);
  }, [onComplete]);

  return (
    <div className="boot-screen">
      <div className="boot-terminal">

        <div className="boot-header">
          <div className="boot-dots">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <span>root@yogyashri: ~/portfolio</span>
          <span className="terminal-label">TERMINAL</span>
        </div>

        <div className="boot-content">
          <div className="boot-logo">
            <span className="logo-symbol">◆</span>
            <h1>YOGYASHRI<span>OS</span></h1>
          </div>

          <p className="boot-subtitle">
            Personal Developer Environment
          </p>

          <div className="boot-messages">
            <p className="command">
              <span>yogyashri@portfolio</span>:~$ ./start.sh
            </p>

            {visibleMessages.map((message, index) => (
              <p className="boot-line" key={index}>
                <span className="success">[ OK ]</span> {message}
              </p>
            ))}

            <p className="boot-cursor">
              <span>yogyashri@portfolio</span>:~$
              <span className="terminal-cursor"></span>
            </p>
          </div>

          <div className="boot-progress">
            <div className="progress-info">
              <span>BOOTING SYSTEM</span>
              <span>{progress}%</span>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <p className="boot-footer">
            © 2026 YOGYASHRI PATIL | ALL SYSTEMS OPERATIONAL
          </p>
        </div>
      </div>
    </div>
  );
}

export default BootScreen;
