import ContactForm from './ContactForm.js';
import './contactme.css';

function ContactMe() {
    return (
      <div className="contactMe-section">
        <div className="contactMe-text">
        <span className="hyphen"></span><h2>Contact Me</h2>
        <h3>Let's Talk for <span>Your Next Projects</span></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
        <div className="contactMe-methods">
          <div className="phone-number">
            <div className="box"><img /></div>
            <p>+57 123 456 7890</p>
          </div>
          <div className="email">
            <div className="box"><img /></div>
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