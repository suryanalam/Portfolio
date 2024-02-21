import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home-section" data-aos="fade-up">
      <p className="greeting">Hello, I'm</p>

      <h1 className="name">Surya Narayana Murthy Nalam</h1>

      <span className="job-role">Full Stack Developer</span>

      <div className="actions-div">
        <a
          href={process.env.PUBLIC_URL + "/assets/resume.pdf"}
          rel="noreferrer"
          download="Surya Narayana Murthy Nalam"
        >
          <button className="btn">Resume</button>
        </a>

        <a href="mailto:suryanalam3011@gmail.com">
          <button className="btn">Let's Talk</button>
        </a>
      </div>
    </section>
  );
};

export default Home;
