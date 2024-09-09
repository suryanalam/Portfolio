import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="contact" className="bg-container">
      <div className="content-wrapper">
        <h1 className="heading">Contact Me</h1>
        <div className="contact-container">
          <a className="contact-icon-wrapper" href="tel:+91897545846">
            <div className="contact-icon-bg">
              <FaPhone className="contact-icon" />
            </div>
            <span className="contact-icon-title">Phone</span>
          </a>

          <a className="contact-icon-wrapper" href="mailto:suryanalam3011@gmail.com">
            <div className="contact-icon-bg">
              <IoMail className="contact-icon" />
            </div>
            <span className="contact-icon-title">Email</span>
          </a>

          <a
            className="contact-icon-wrapper"
            href="https://maps.app.goo.gl/KARZ4HPxj64YuaWA8"
          >
            <div className="contact-icon-bg">
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <span className="contact-icon-title">Address</span>
          </a>

          <a
            className="contact-icon-wrapper"
            href="https://www.linkedin.com/in/nalamsurya"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-icon-bg">
              <FaLinkedin className="contact-icon" />
            </div>
            <span className="contact-icon-title"> LinkedIn </span>
          </a>

          <a
            className="contact-icon-wrapper"
            href="https://www.github.com/suryanalam"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-icon-bg">
              <FaGithub className="contact-icon" />
            </div>
            <span className="contact-icon-title">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
