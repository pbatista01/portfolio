import ProjectCard from './ProjectCard.js';
import './projects.css';
import arrowRight from './img/arrowRight.svg';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Projects(){

    useEffect(() =>{
        ScrollReveal().reveal(".projects-title", {origin: "top", distance:"100px", duration: 1000, delay:100, reset:true});
        ScrollReveal().reveal(".projects-subtitle", {origin: "top", distance:"100px", duration: 1000, delay:200, reset:true});
        ScrollReveal().reveal(".project-card", {origin: "top", distance:"100px", duration: 1000, delay:400, reset:true});
        ScrollReveal().reveal(".btn-viewAll", {origin: "top", distance:"100px", duration: 1000, delay:600, reset:true});
      }, []);

    return(
        <div className="projects" id="projects">
            <div className="project-header">
                <div><h2 className="projects-title"><span className="hyphen"></span> My Portfolio</h2></div>
                <h1 className="projects-subtitle">My <span>Latest</span> Projects</h1>
            </div>
            <div className="projects-div">
            <div className='projects-card-section'>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
            </div>
            <button className="btn-viewAll">View All<svg className="arrow-right" width="11" height="16" viewBox="0 0 11 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9799 7.98338L0.53115 15.7893L0.492336 0.229658L10.9799 7.98338Z"/>
            </svg></button>
            </div>
        </div>
    );
}

export default Projects;