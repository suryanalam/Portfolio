import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <section id="Home" className="home_section">
      <p className="home_greet">Hello, my name is</p>

      <h1 className="home_heading_1">Surya Narayana Murthy Nalam</h1>

      <h4 className="home_heading_2">Frontend Developer</h4>

      <p className="home_desc">
          A frontend developer with a flair to implement the visuals into real time by formulating the responsive UI designs to make user experience seamless additionally, having the good grip on the core concepts related to the field of computer science and engineering.
      </p>

      <a href="https://drive.google.com/file/d/19muYUkB8tszy-y6ClWf85QYpSOz8GFNT/view?usp=sharing" target="_blank">
        <button className="home_btn">Resume</button>
      </a>
    </section>
  );
};

export default Home;
