// Header.jsx (assuming you use the CSS above)
import React from "react";
import '../css/header.css' // Uncomment if using a local CSS file

export default function Header({ name }){
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="brand">{name}</h1>
        <nav className="nav-links">
          {/* Apply a slight movement on hover for extra pop */}
          <a href="https://www.linkedin.com/in/yogyashri-patil-3431a927b/" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://github.com/YogyashriPatil" aria-label="GitHub">GitHub</a>
          <a href="mailto:yogyashriarvindpatil@gmail.com" aria-label="Email">Email</a>
        </nav>
      </div>
    </header>
  );
}