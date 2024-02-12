import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="section-bg">
      <h1 className="heading">about &nbsp;me</h1>
      <div className="about-container">
        <div className="about-left">
          <p className="about-desc">
            An undergraduate student with a focused and enlightened personality
            with a decent skill set in frontend technologies and graphic
            designing.
          </p>
          <p className="about-desc">
            Being Enthusiastic, he is splendid at communication additionally, he
            bagged ample work experience by being a part of a few student
            organizations at LPU and can be the best fit to play a vital role as
            a team lead.
          </p>
          <p className="about-desc">
            As per the technical skills, he has a good understanding of core
            concepts in computer science and engineering like OOPS, DBMS, OS,
            and Networking as well as frontend technologies like HTML5, CSS3,
            JavaScript, Bootstrap, JQuery, and ReactJs.
          </p>
        </div>
        <div className="about-right">
          <img
            src={process.env.PUBLIC_URL + "/assets/profile.png"}
            alt="about-img"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
