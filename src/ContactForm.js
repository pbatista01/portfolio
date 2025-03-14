import './contactForm.css'
import React from 'react'
import Select from 'react-select'
import { useState } from 'react'

function ContactForm () {

    const countries = [
      {label: "Argentina", value: "Argentina"},
      {label: "Bolivia", value: "Bolivia"},
      {label: "Brasil", value: "Brasil"},
      {label: "Canada", value: "Canada"},
      {label: "Chile", value:"Chile"},
      {label: "Colombia", value: "Colombia"},
      {label: "Ecuador", value: "Ecuador"},
      {label: "Estados Unidos", value:"Estados Unidos"},
      {label: "Mexico", value:"Mexico"},
      {label: "Paraguay", value:"Paraguay"},
      {label: "Peru", value:"Peru"},
      {label: "Uruguay", value: "Uruguay"},
      {label: "Venezuela", value: "Venezuela"},
      {label: "Other", value:"Other"}
    ]

      const [buttonState, setButtonState] = useState("");
    
      const handleClick = (e) => {
        e.preventDefault();
        setButtonState("onclic");
    
        setTimeout(() => {
          setButtonState("validate");
    
          setTimeout(() => {
            setButtonState("");
          }, 1150);
        }, 2150);
      };

    return (
      <form action='#' className="contactForm" target="_self">
        <div className="form-personalInfo">
          <div>
        <label for="name">Your Name</label>
        <input type="text" id="name" placeholder="Ex. John Doe" />
        </div>
        <div>
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="email@gmail.com" />
        </div>
        <div>
        <label for="ph-number">Phone Number</label>
        <input type="text" id="ph-number" placeholder="Enter Phone Number" />
        </div>
        <div>
        <label for="country">Country</label>
        <Select 
          className="custom-select"
          classNamePrefix="react-select" 
          options={countries} 
          menuPortalTarget={document.body} 
          styles={{ menuPortal: base => ({ ...base, zIndex: 1000 }) }}
        />
        </div>
        </div>
        <div className="form-message">
        <label for="message">Your message </label>
        <textarea name="message" rows="5" cols="30" placeholder="Your message...">
        </textarea>
        <button className={`btn-submit ${buttonState} `} onClick={handleClick}></button>
        </div>
      </form>
    
    );
  };

  export default ContactForm;