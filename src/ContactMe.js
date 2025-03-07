import ContactForm from './ContactForm.js';
import './contactme.css';
import emailIcon from './img/emailIcon.svg';
import phoneIcon from './img/phoneIcon.svg';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function ContactMe() {
  useEffect(() =>{

    const labels = document.querySelectorAll("label");
  const inputs = document.querySelectorAll("input");
  const textarea = document.querySelectorAll("textarea");

    ScrollReveal().reveal(".contactMe-title", {origin: "top", distance:"100px", duration: 1000, delay:100, reset:true});
    ScrollReveal().reveal(".contactMe-subtitle", {origin: "top", distance:"100px", duration: 1000, delay:200, reset:true});
    ScrollReveal().reveal(".contactMe-paragraph", {origin: "top", distance:"100px", duration: 1000, delay:400, reset:true});
    ScrollReveal().reveal(".phone-number", {origin: "top", distance:"100px", duration: 1000, delay:600, reset:true});
    ScrollReveal().reveal(".email", {origin: "top", distance:"100px", duration: 1000, delay:700, reset:true});
    ScrollReveal().reveal(labels, {origin: "left", distance:"50px", duration: 1000, delay:1500, reset:true});
    ScrollReveal().reveal(inputs, {origin: "right", distance:"50px", duration: 1000, delay:1500, reset:true});
    ScrollReveal().reveal(".custom-select", {origin: "right", distance:"50px", duration: 1500, delay:1400, reset:true});
    ScrollReveal().reveal(textarea, {origin: "right", distance:"50px", duration: 1500, delay:1400, reset:true});
    ScrollReveal().reveal(".btn-submit", {origin: "bottom", distance:"50px", duration: 1500, delay:1500, reset:true});

  }, []);

    return (
      <div className="contactMe-section" id="contactme">
        <div className="contactMe-text">
        <div><h2 className="contactMe-title"><span className="hyphen"></span> Contact Me</h2></div>
        <h3 className="contactMe-subtitle">Let's Talk for <span>Your Next Projects</span></h3>
        <p className="contactMe-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
        <div className="contactMe-methods">
          <div className="phone-number">
            <div className="box phone-icon"></div>
            <p>+57 123 456 7890</p>
          </div>
          <div className="email">
            <div className="box contact-email-icon"></div>
            <p>email@gmail.com</p>
          </div>
        </div>
        </div>
        <div className="contactMe-form">
        <ContactForm />
        </div>
      </div>
    
    );
  }

  export default ContactMe;