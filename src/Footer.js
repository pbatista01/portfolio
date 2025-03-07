import './footer.css';
import rectangles from './img/rectangles.svg';
import Logo from './Logo.js';
import githubIcon from './img/githubIcon.svg';
import instagramIcon from './img/instagramIcon.svg';
import linkedinIcon from './img/linkedinIcon.svg';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Footer(){

  useEffect(() =>{

    const h3footer = document.querySelectorAll(".footer-nav h3");
  const aFooterNav = document.querySelectorAll(".footer-nav a");
  const h3contact = document.querySelectorAll(".footer-contact h3");
  const contactLi = document.querySelectorAll(".footer-contact li");

    ScrollReveal().reveal(".letsConnect-title", {origin: "top", distance:"50px", duration: 1000, delay:100, reset:true});
    ScrollReveal().reveal(".footer-logo", {origin: "top", distance:"50px", duration: 1000, delay:200, reset:true});
    ScrollReveal().reveal(".footer-text", {origin: "top", distance:"50px", duration: 1000, delay:400, reset:true});
    ScrollReveal().reveal(".github", {origin: "left", distance:"50px", duration: 1000, delay:600, reset:true});
    ScrollReveal().reveal(".instagram", {origin: "top", distance:"50px", duration: 1000, delay:700, reset:true});
    ScrollReveal().reveal(".linkedin", {origin: "right", distance:"50px", duration: 1000, delay:800, reset:true});
    ScrollReveal().reveal(h3footer, {origin: "top", distance:"50px", duration: 1000, delay:1000, reset:true});
    ScrollReveal().reveal(aFooterNav, {origin: "top", distance:"50px", duration: 1000, delay:1300, reset:true});
    ScrollReveal().reveal(h3contact, {origin: "top", distance:"50px", duration: 1000, delay:1300, reset:true});
    ScrollReveal().reveal(contactLi, {origin: "top", distance:"50px", duration: 1000, delay:1500, reset:true});
    ScrollReveal().reveal(".copyright-text", {origin: "bottom", distance:"50px", duration: 1000, delay:1700, reset:true});

  }, []);


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
            <a href="#" className="box github"><span>Github</span></a>
            <a href="#" className="box instagram"><span>Instagram</span></a>
            <a href="#" className="box linkedin"><span>LinkedIn</span></a>
          </div>
        </div>
        <div className="footer-nav">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#contactme">Hire Me</a></li>
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
  