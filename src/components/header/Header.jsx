import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header-bg">
    
      <div className="logo-div">
        <a href="#home" className="logo-text">SN</a>
      </div>

      <nav className="navbar">
          <a href="#about" className="navlink">About</a>
          <a href="#experience" className="navlink">Experience</a>
          <a href="#projects" className="navlink">Projects</a>
          <a href="#contact" className="navlink">Contact</a>
      </nav>

    </header>
  );
};

export default Header;
  