import { useEffect } from 'react';
import './technologies.css';
import TechnologyBox from './TechnologyBox.js';
import ScrollReveal from 'scrollreveal';

function Technologies(){

    useEffect(() => {
        ScrollReveal().reveal(".technologies-title", { origin: "top", distance: "50px", duration: 2000, delay: 200, reset: true });
        ScrollReveal().reveal(".technologies-subtitle", { origin: "top", distance: "50px", duration: 2000, delay: 300, reset: true });
        ScrollReveal().reveal(".box1", { origin: "left", distance: "50px", duration: 2000, delay: 400, reset: true });
        ScrollReveal().reveal(".box2", { origin: "right", distance: "50px", duration: 2000, delay: 400, reset: true });
        ScrollReveal().reveal(".box3", { origin: "left", distance: "50px", duration: 2000, delay: 600, reset: true  });
        ScrollReveal().reveal(".box4", { origin: "right", distance: "50px", duration: 2000, delay: 600, reset: true });
        ScrollReveal().reveal(".box5", { origin: "left", distance: "50px", duration: 2000, delay: 800, reset: true });
        ScrollReveal().reveal(".box6", { origin: "right", distance: "50px", duration: 2000, delay:800, reset: true });
        }, []);

    return(
        <div className="technologies-section">
            <div className="technologies-text">
            <div><h2 className="technologies-title"><span className="hyphen"></span> Technologies</h2></div>
            <h1 className="technologies-subtitle"><span>The tools behind</span> <br></br>my developments</h1>
            </div>
            <TechnologyBox />
        </div>
    );
}

export default Technologies;