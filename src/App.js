import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar.js";
import Header from "./Header.js";
import Projects from "./Projects.js";
import AboutMe from './AboutMe.js'
import Technologies from './Technologies.js';
import ContactMe from './ContactMe.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar className="playfair-display-regular"/>
      <Header />
      <Projects />
      <AboutMe />
      <Technologies />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
