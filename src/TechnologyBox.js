import htmlIcon from './img/htmlIcon.svg';
import './technologyBox.css';

function TechnologyBox(){
    return(
        <div className="techBox">
            <div>
                <div className="techBox-icon">
                    <img src={htmlIcon}/>
                </div>
                <div className="techBox-text">
                    <p className="techBox-techTitle">HTML</p>
                </div>
            </div>
            <div>
                <div className="techBox-icon">
                    <img src={htmlIcon}/>
                </div>
                <div className="techBox-text">
                    <p className="techBox-techTitle">HTML</p>
                </div>
            </div>
            <div>
                <div className="techBox-icon">
                    <img src={htmlIcon}/>
                </div>
                <div className="techBox-text">
                    <p className="techBox-techTitle">HTML</p>
                </div>
            </div>
            <div>
                <div className="techBox-icon">
                    <img src={htmlIcon}/>
                </div>
                <div className="techBox-text">
                    <p className="techBox-techTitle">HTML</p>
                </div>
            </div>
            <div>
                <div className="techBox-icon">
                    <img src={htmlIcon}/>
                </div>
                <div className="techBox-text">
                    <p className="techBox-techTitle">HTML</p>
                </div>
            </div>
            <div>
                <div className="techBox-icon">
                    <img src={htmlIcon}/>
                </div>
                <div className="techBox-text">
                    <p className="techBox-techTitle">HTML</p>
                </div>
            </div>
        </div>
    );
}

export default TechnologyBox;