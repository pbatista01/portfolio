import Logo from "./Logo.js"
import './navbar.css';

function Navbar() {

    const openMenu = () =>{
      alert("Button clicked");
    }

    return (
      <div className="navbar">
        <div className="navbar-logo">
          <Logo />
          <h1>Estefanie</h1>
        </div>
        <div className="navbar-btn" onClick={openMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

export default Navbar;
  