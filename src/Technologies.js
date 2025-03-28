import { useEffect, useState } from 'react';
import './technologies.css';
import ScrollReveal from 'scrollreveal';
import arrowRight from './img/arrowRight.svg';


function Technologies(){

    const [index, setIndex] = useState(0);
    const visibleItems = 10;
    

    

    const technologies = [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},
        { name: "Bootstrap", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"}
          
    ]

    const totalItems = technologies.length;

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % totalItems);
      };
    
      const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
      };

    useEffect(() => {
        ScrollReveal().reveal(".technologies-title", { origin: "top", distance: "50px", duration: 2000, delay: 200, reset: true });
        ScrollReveal().reveal(".technologies-subtitle", { origin: "top", distance: "50px", duration: 2000, delay: 300, reset: true });
        ScrollReveal().reveal(".techBox", { origin: "top", distance: "100px", duration: 2000, delay: 400, reset: true });
        /*ScrollReveal().reveal(".box2", { origin: "right", distance: "50px", duration: 2000, delay: 400, reset: true });
        ScrollReveal().reveal(".box3", { origin: "left", distance: "50px", duration: 2000, delay: 600, reset: true  });
        ScrollReveal().reveal(".box4", { origin: "right", distance: "50px", duration: 2000, delay: 600, reset: true });
        ScrollReveal().reveal(".box5", { origin: "left", distance: "50px", duration: 2000, delay: 800, reset: true });
        ScrollReveal().reveal(".box6", { origin: "right", distance: "50px", duration: 2000, delay:800, reset: true });*/

        }, []);




    return(
        <div className="technologies-section">
            <div className="technologies-text">
            <div><h2 className="technologies-title"><span className="hyphen"></span> Technologies</h2></div>
            <h1 className="technologies-subtitle"><span>The tools behind</span> my developments</h1>
            </div>
        
            <div className="techBox">
                {technologies.map((tech,i)=>(
                    <div key={i} className="box1">
                <div className="techBox-icon">
                <img src={tech.icon} alt={tech.name}/>
            </div>
            <div className="techBox-text">
                <p className="techBox-techTitle">{tech.name}</p>
            </div>
            </div>
                ))}
            
            </div>
        </div>

        
    );
}

export default Technologies;