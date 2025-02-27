import './aboutMe.css';
import elipseAbout from './img/elipseAbout.svg';
import emailIcon from './img/emailIcon.svg';

function AboutMe() {
    return(
        <div className="about-section">
            <img className="elipseAbout" src={elipseAbout} />
            <div className="aboutMe-text">
            <div><h2 className="aboutMe-title"><span className="hyphen"></span> About Me</h2></div>
            <h1 className="aboutMe-subtitle">Who is <span>Estefanie Peña</span>?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna . 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="aboutme-btn-section">
            <button className="btn-letsWork">Let's Work Together<img className="email-icon" src={emailIcon} /></button>
            <p className="signature">Estefanie Peña</p>
            </div>
        </div>
    );
}

export default AboutMe;