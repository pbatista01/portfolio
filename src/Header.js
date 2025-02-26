import './header.css';
import headerOvalos from './img/headerOvalos.svg';

function Header () {
    return(
      <div className="header">
        <img className="headerOvalos" src={headerOvalos} />
        <div className="header-text">
            <h2>Hello There!</h2>
            <h1>I'm <span>Estefanie Peña</span></h1>
            <h2>Web Developer</h2>
            <h2>Based in Colombia.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
        </div>
        <button className="btn-viewProjects">View My Projects</button>
        <button className="btn-hireMe">Hire Me</button>
       
      </div>
    );
  }
  
export default Header;