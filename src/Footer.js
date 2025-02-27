import './footer.css';
import rectangles from './img/rectangles.svg';
import Logo from './Logo.js';
import githubIcon from './img/githubIcon.svg';
import instagramIcon from './img/instagramIcon.svg';
import linkedinIcon from './img/linkedinIcon.svg';

function Footer(){
    return (
    
      <footer className="footer-section">
        <div className="footer-container">
        <h2 className="letsConnect-title">Let's <span> Connect</span></h2>
        <div className="footer-logo">
          <Logo />
          <h1>Estefanie</h1>
        </div>
        <div className="footer-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
          <div className="socials">
            <div className="box"><img src={githubIcon}/></div>
            <div className="box"><img src={instagramIcon}/></div>
            <div className="box"><img src={linkedinIcon}/></div>
          </div>
        </div>
        <div className="footer-nav">
          <h3>Navigation</h3>
          <ul>
            <li><a src="#">Home</a></li>
            <li><a src="#">Projects</a></li>
            <li><a src="#">About Me</a></li>
            <li><a src="#">Hire Me</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Me</h3>
          <ul>
            <li>+57 123 456 7890</li>
            <li>email@gmail.com</li>
          </ul>
        </div>
        </div>
      <div className="copyright-text">
          <p>Copyright &copy; 2025. Estefanie Peña. All rights reserved.</p>
        </div>
        </footer>
    );
  };

  export default Footer;
  