import './App.css';
import { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
  
  const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
      });
    }

  return (
    <main className="main">
      <Navbar />
      <Home />
      <About /> 
      <Experience /> 
      <Work />  
      <Contact /> 
      <ContactBar />  
     {
        showTopBtn &&  <button className='navigate-btn' onClick={goToTop}><KeyboardArrowUpIcon className='navigate-icon' /></button>
     }
    </main>
  );
}

export default App;