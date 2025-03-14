import './aboutMe.css';
import elipseAbout from './img/elipseAbout.svg';
import emailIcon from './img/emailIcon.svg';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function AboutMe() {

    useEffect(() =>{
        ScrollReveal().reveal(".elipseAbout", {origin: "top", distance:"50px", duration: 3000, delay:100, reset:true});
        ScrollReveal().reveal(".aboutMe-title", {origin: "top", distance:"50px", duration: 2000, delay:200, reset:true});
        ScrollReveal().reveal(".aboutMe-subtitle", {origin: "top", distance:"50px", duration: 2000, delay:400, reset:true});
        ScrollReveal().reveal(".aboutMe-paragraph", {origin: "top", distance:"50px", duration: 2000, delay:600, reset:true});
        ScrollReveal().reveal(".btn-letsWork", {origin: "top", distance:"50px", duration: 2000, delay:800, reset:true});
        ScrollReveal().reveal(".signature", {origin: "top", distance:"50px", duration: 2000, delay:1000, reset:true});
      }, []);

    return(
        <div className="about-section" id="aboutme">
            <div className="elipseAbout">
            <img className="elipseAbout-img" src={elipseAbout} />
            </div>
            <div className="aboutMe-text-div">
            <div className="aboutMe-text">
            <div><h2 className="aboutMe-title"><span className="hyphen"></span> About Me</h2></div>
            <h1 className="aboutMe-subtitle">Who is <span>Estefanie Peña</span>?</h1>
            <p className="aboutMe-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna . 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="aboutme-btn-section">
            <button className="btn-letsWork"><a href="#contactme">Let's Work Together<span className="email-icon"></span></a></button>
            <p className="signature">Estefanie Peña</p>
            </div>
            </div>
        </div>
    );
}

export default AboutMe;