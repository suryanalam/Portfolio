import "./header.css";
import React, { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { IoInformationCircleSharp } from "react-icons/io5";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenu]);

  return (
    <header className="header-bg">
      <div className="logo-div">
        <span className="logo-text" onClick={goToTop}>
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

      <div
        id="mobile-menu"
        className={mobileMenu ? "mobile-menu open" : "mobile-menu close"}
      >
        <div
          className="close-menu-div"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <IoClose className="close-menu-icon" />
        </div>
        <nav className="mobile-navbar">
          <div className="mobile-navlink-wrapper">
            <a
              href="#about"
              className="mobile-navlink"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <FaUserCircle />
              <span>About</span>
            </a>
            <hr className="mobile-navlink-divider" />
          </div>
          <div className="mobile-navlink-wrapper">
            <a
              href="#experience"
              className="mobile-navlink"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <MdWork />
              <span>Experience</span>
            </a>
            <hr className="mobile-navlink-divider" />
          </div>

          <div className="mobile-navlink-wrapper">
            <a
              href="#projects"
              className="mobile-navlink"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <FaLaptopCode />
              <span>Projects</span>
            </a>
            <hr className="mobile-navlink-divider" />
          </div>

          <div className="mobile-navlink-wrapper">
            <a
              href="#contact"
              className="mobile-navlink"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <IoInformationCircleSharp />
              <span>Contact</span>
            </a>
            <hr className="mobile-navlink-divider" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
