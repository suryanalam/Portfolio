import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="Contact">
      <h1 className="headers">Connect</h1>
      <section className="contact_section">

      <section className="contact_wrapper">
          <h4>Reach Me Below</h4>
          <p>
            <a href="tel: +91 8978545846">+91 8978545846</a>
            <span> | </span>
            <a href="mailto:suryanalam3011@gmail.com">suryanalam3011@gmail.com</a>
          </p>
          <h2> Need an elegant UI for your website ?</h2>
          <p className="contact_desc">Don't Worry, I can make your visuals into real !!</p>
          <a href="mailto:suryanalam3011@gmail.com"><button className="contact_btn">Hire Me</button></a>
      </section>

      </section>
    </section>
  );
};

export default Contact;
