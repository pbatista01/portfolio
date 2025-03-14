import logo from './logo.svg';
import './App.css'
import Navbar from "./Navbar.js"
import Header from "./Header.js"
import Projects from "./Projects.js"
import AboutMe from './AboutMe.js'
import Technologies from './Technologies.js'
import ContactMe from './ContactMe.js'
import Footer from './Footer.js'
import MenuList from './MenuList.js'
import rectangles from './img/rectangles.svg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MenuList />
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
