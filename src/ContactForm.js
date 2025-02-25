import './contactForm.css'
import React from 'react'
import Select from 'react-select'

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

    return (
      <form action='#' className="contactForm">
        <label for="name">Your Name</label>
        <input type="text" id="name" placeholder="Ex. John Doe" />
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="email@gmail.com" />
        <label for="ph-number">Phone Number</label>
        <input type="text" id="ph-number" placeholder="Enter Phone Number" />
        <label for="country">Country</label>
        <Select 
          className="custom-select"
          classNamePrefix="react-select" 
          options={countries} 
        />
        <label for="message">Your message </label>
        <textarea name="message" rows="5" cols="30" placeholder="Your message...">
        </textarea>
        <input className="btn-submit" type="submit" value="Submit" />
      </form>
    
    );
  };

  export default ContactForm;