import Logo from "./Logo.js"
import './navbar.css';

function Navbar() {

    const openMenu = () =>{
      
    }

    return (
      <div className="navbar">
        <div className="navbar-logo">
          <Logo />
          <h1>Estefanie</h1>
        </div>
        <div className="navbar-btn menu-open" onClick={openMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navbar-menu menu-closed">
          <span>X</span>
          <ul>
            <li><a src="#">Home</a></li>
            <li><a src="#">Projects</a></li>
            <li><a src="#">About Me</a></li>
            <li><a src="#">Contact Me</a></li>
          </ul>
        </div>
      </div>
    );
  }

export default Navbar;
  