
import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
  { name: "GitHub", id: "github" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const current = navLinks.findLast((link) => {
        const section = document.getElementById(link.id);

        return (
          section &&
          section.getBoundingClientRect().top <= 150
        );
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id) => {
    setMenuOpen(false);
    setActiveSection(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      <div className="navbar-container">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("home");
          }}
        >
          <span className="logo-bracket">[</span>
          <span className="logo-text">YP</span>
          <span className="logo-bracket">]</span>
          <span className="logo-divider">/</span>
          <span className="logo-name">yogyashri</span>
        </a>

        {/* Terminal identity */}
        <div className="navbar-terminal">
          <span>yogyashri</span>
          <span className="terminal-at">@</span>
          portfolio:~$
          <span className="navbar-cursor"></span>
        </div>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${
                activeSection === link.id ? "active" : ""
              }`}
              onClick={() => handleNavigation(link.id)}
            >
              <span className="nav-prefix">~/</span>
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu */}
        <button
          className={`menu-toggle ${menuOpen ? "menu-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;
