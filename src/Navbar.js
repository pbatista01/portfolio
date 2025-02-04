import Logo from "./Logo.js"
import './navbar.css';

function Navbar() {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <Logo />
          <h1>Estefanie</h1>
        </div>
        <div className="navbar-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

export default Navbar;
  