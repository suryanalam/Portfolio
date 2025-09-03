import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

// helper functions
import navigateToTop from "./utils/navigateToTop";

// components
import Header from "./components/Header";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// initialize the AOS library.
AOS.init();

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Register an event listener to track scroll position
  useEffect(()=>{
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  },[])

  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      {showTopBtn && (
        <button className="navigate-btn" onClick={() => navigateToTop()}>
          <span className="navigate-icon">⬆</span>
        </button>
      )}
    </>
  );
}

export default App;
