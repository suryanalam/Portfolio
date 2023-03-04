import './App.css';

//pages
import Home from './Sections/Home/Home';
import About from './Sections/About/About';
import Experience from './Sections/Experiences/Experience';
import Work from './Sections/Work/Work';
import Contact from './Sections/contact/Contact';

//components
import Navbar from './components/Navbar/Navbar';
import ContactBar from './components/ContactBar/ContactBar';

function App() {
  return (
    <main className="main">
      <Navbar />
      <Home />
      <About /> 
      <Experience /> 
      <Work />  
      <Contact /> 
      <ContactBar />  
    </main>
  );
}

export default App;

