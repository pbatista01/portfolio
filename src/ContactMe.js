import ContactForm from './ContactForm.js';
import './contactme.css';
import emailIcon from './img/emailIcon.svg';
import phoneIcon from './img/phoneIcon.svg';


function ContactMe() {
    return (
      <div className="contactMe-section" id="contactme">
        <div className="contactMe-text">
        <div><h2 className="contactMe-title"><span className="hyphen"></span> Contact Me</h2></div>
        <h3>Let's Talk for <span>Your Next Projects</span></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
        <div className="contactMe-methods">
          <div className="phone-number">
            <div className="box"><img src={phoneIcon}/></div>
            <p>+57 123 456 7890</p>
          </div>
          <div className="email">
            <div className="box"><img src={emailIcon}/></div>
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