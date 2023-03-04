import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav_container">
    
      <div className="nav_left">
        <h1>SN</h1>
      </div>

      <ul className="nav_right">
        <li><a href="#About" className="nav_link"  >About</a></li>
        <li><a href="#Experience" className="nav_link"  >Education</a></li>
        <li><a href="#Work" className="nav_link"  >Projects</a></li>
        <li><a href="#Contact" className="nav_link" >Connect</a></li>
      </ul>

    </nav>
  );
};

export default Navbar;
