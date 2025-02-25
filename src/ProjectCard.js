import appImage from './img/app1.png';
import './projectCard.css';

function ProjectCard(){
    return(
        <div className="projectCard">
            <div className="background-image">
                <img src={appImage}/>
            </div>
            <div className="project-technologies">
                <div>HTML</div>
                <div>HTML</div>
                <div>HTML</div>
            </div>
            <div className="project-text">
                <h1>App's Name</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    );
}

export default ProjectCard;