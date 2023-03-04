import React from "react";
import profile_img from '../../profile_img.png'
import "./About.css";

const About = () => {
  return (
    <section id="About">
      <div className="about_container">

        <div className="about_left">
            <p className="about_desc">
                An undergraduate student with a focused and enlightened personality with a decent skill set in frontend technologies and graphic designing.
            </p>
            <p className="about_desc">
                Being Enthusiastic, he is splendid at communication additionally, he bagged ample work experience by being a part of a few student organizations at LPU and can be the best fit to play a vital role as a team lead.
            </p>
            <p className="about_desc">
                As per the technical skills, he has a good understanding of core concepts in computer science and engineering like OOPS, DBMS, OS, and Networking as well as frontend technologies like HTML5, CSS3, JavaScript, Bootstrap, JQuery, and ReactJs.
            </p>
            <p className="about_desc">
                On the other hand, He has hands-on experience in designing platforms like Photoshop, Canva, and Figma and a grip on concepts like typography, color theory, golden ratio furthermore the basics of UI/UX.
            </p>
        </div>

        <div className="about_right">
          <img src={profile_img} alt="image" className="about_profile_img" />
          <div className="about_img_border" />
        </div>

      </div>
    </section>
  );
};

export default About;
