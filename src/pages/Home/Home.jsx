import React from "react";
import "./home.css";

import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div id="#home">
      <Header />
      <section className="home-section">
        <p className="greeting">Hello, I'm</p>

        <h1 className="name">Surya Narayana Murthy Nalam</h1>

        <span className="job-role">Full Stack Developer</span>

        <div className="actions-div">
          <a href="../../assets/resume.pdf" download="Resume" rel="noreferrer">
            <button className="btn">Resume</button>
          </a>

          <a href="mailto:suryanalam3011@gmail.com">
            <button className="btn">Let's Talk</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
