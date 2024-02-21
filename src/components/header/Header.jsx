import React, { useState } from "react";
import "./header.css";
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";

const Header = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
  

    <>

<header className="header-bg">
      <div className="logo-div">
        <span className="logo-text" onClick={() => goToTop()}>
          SN
        </span>
      </div>

      <nav className="navbar">
        <a href="#about" className="navlink">
          About
        </a>
        <a href="#experience" className="navlink">
          Experience
        </a>
        <a href="#projects" className="navlink">
          Projects
        </a>
        <a href="#contact" className="navlink">
          Contact
        </a>
      </nav>

      <div className="menu-icon-div" onClick={() => setMobileMenu(!mobileMenu)}>
        <TiThMenu className="menu-icon" />
      </div>


    </header>
    
    <div className={mobileMenu ? "mobile-menu open" : "mobile-menu close"}>
        <span className="close-menu-div" onClick={() => setMobileMenu(false)}>
          <IoMdCloseCircle /> Close 
        </span>
        <nav className="mobile-navbar">
            <a href="#home" className="mobile-navlink">Home</a>
            <a href="#about" className="mobile-navlink">About</a>
            <a href="#experience" className="mobile-navlink">Experiences</a>
            <a href="#projects" className="mobile-navlink">Projects</a>
            <a href="#contact" className="mobile-navlink">Contact</a>
        </nav>
    </div>
    
    </>
  );
};

export default Header;
