import './header.css';
import headerOvalos from './img/headerOvalos.svg';
import ScrollReveal from 'scrollreveal';
import {useEffect} from 'react';

function Header () {

    useEffect(() =>{
      ScrollReveal().reveal(".headerOvalos", {origin: "top", distance:"100px", duration: 1000, delay:100, reset:true});
      ScrollReveal().reveal(".header-text-hello", {origin: "top", distance:"100px", duration: 1000, delay:200, reset:true});
      ScrollReveal().reveal(".header-text-title", {origin: "top", distance:"100px", duration: 1000, delay:400, reset:true});
      ScrollReveal().reveal(".header-text-subtitle", {origin: "top", distance:"100px", duration: 1000, delay:600, reset:true});
      ScrollReveal().reveal(".header-text-information", {origin: "top", distance:"100px", duration: 1000, delay:800, reset:true});
      ScrollReveal().reveal(".btn-viewProjects", {origin: "top", distance:"100px", duration: 1000, delay:600, reset:true});
      ScrollReveal().reveal(".btn-hireMe", {origin: "top", distance:"100px", duration: 1000, delay:600, reset:true});
    }, []);

    return(
      <div className="header" id="home">
        <div className="headerOvalos">
        <img className="headerOvalos-img" src={headerOvalos} />
        </div>
        <div className="header-text-div">
        <div className="header-text">
            <h2 className="header-text-hello">Hello There!</h2>
            <h1 className="header-text-title">I'm <span>Estefanie Peña</span></h1>
            <h2 className="header-text-subtitle">Web Developer</h2>
            <h2 className="header-text-subtitle">Based in Colombia.</h2>
            <p className="header-text-information">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
        </div>
        <button className="btn-viewProjects"><a href='#projects'>View My Projects</a></button>
        <button className="btn-hireMe"><a href ="#contactme">Hire Me</a></button>
        </div>
      </div>
    );
  }
  
export default Header;