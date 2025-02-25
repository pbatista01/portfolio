import './technologies.css';
import TechnologyBox from './TechnologyBox.js';

function Technologies(){
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