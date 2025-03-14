import { useState } from "react";
import Logo from "./Logo.js";
import './navbar.css';

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu(){
      setMenuOpen(!menuOpen);
    }


    return (
      <div className="navbar">
      <div className="navbar-logo">
        <Logo />
        <h1>Estefanie</h1>
      </div>

      <div className={`navbar-btn ${menuOpen ? "menu-open" : "menu-close"}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-menu ${menuOpen ? "menu-open" : "menu-closed"}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About Me</a></li>
        </ul>
        <button className="btn-contactme"><a href="#">Contact Me</a></button>
      </div>
    </div>
    );
  }

export default Navbar;
  