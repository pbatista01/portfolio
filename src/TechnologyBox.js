import htmlIcon from './img/htmlIcon.svg';
import './technologyBox.css';

function TechnologyBox(){
    return(
        <div className="techBox">
            <div className="box1">
                <div className="techBox-icon">
                    <img src={htmlIcon}/>
                </div>
                <div className="techBox-text">
                    <p className="techBox-techTitle">HTML</p>
                </div>
            </div>
            <div className="box2">
                <div className="techBox-icon">
                    <img src={htmlIcon}/>
                </div>
                <div className="techBox-text">
                    <p className="techBox-techTitle">HTML</p>
                </div>
            </div>
            <div className="box3">
                <div className="techBox-icon">
                    <img src={htmlIcon}/>
                </div>
                <div className="techBox-text">
                    <p className="techBox-techTitle">HTML</p>
                </div>
            </div>
            <div className="box4">
                <div className="techBox-icon">
                    <img src={htmlIcon}/>
                </div>
                <div className="techBox-text">
                    <p className="techBox-techTitle">HTML</p>
                </div>
            </div>
            <div className="box5">
                <div className="techBox-icon">
                    <img src={htmlIcon}/>
                </div>
                <div className="techBox-text">
                    <p className="techBox-techTitle">HTML</p>
                </div>
            </div>
            <div className="box6">
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