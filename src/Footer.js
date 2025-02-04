import './footer.css';

function Footer(){
    return (
    
      <footer className="footer-section">
        <div className="footer-container">
        <span className="hyphen"></span><h2>Contact Me</h2>
        <div className="footer-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
          <div className="socials">
            <div className="box"><img /></div>
            <div className="box"><img /></div>
            <div className="box"><img /></div>
            <div className="box"><img /></div>
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
  