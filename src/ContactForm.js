import './contactForm.css';

function ContactForm () {
    return (
      <form action='#' className="contactForm">
        <label for="name">Your Name</label>
        <input type="text" id="name" placeholder="Ex. John Doe" />
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="email@gmail.com" />
        <label for="ph-number">Phone Number</label>
        <input type="text" id="ph-number" placeholder="Enter Phone Number" />
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="select">Select your country</option>
          <option value="colombia">Colombia</option>
          <option value="venezuela">Venezuela</option>
          <option value="peru">Peru</option>
          <option value="brasil">Brasil</option>
        </select>
        <label for="message">Your message </label>
        <textarea name="message" rows="5" cols="30" placeholder="Your message...">
        </textarea>
        <input className="btn-submit" type="submit" value="Submit" />
      </form>
    
    );
  };

  export default ContactForm;