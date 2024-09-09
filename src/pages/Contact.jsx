import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="contact" className="contact-bg">
      <h1 className="heading">Contact Me</h1>
      <div className="contact-container" data-aos="fade-up">
        <a className="icon-div" href="tel:+91897545846">
          <div className="sm-icon-div">
            <FaPhone className="sm-icons" />
          </div>
          <span className="contact-text">Phone</span>
        </a>

        <a className="icon-div" href="mailto:suryanalam3011@gmail.com">
          <div className="sm-icon-div">
            <IoMail className="sm-icons" />
          </div>

          <span className="contact-text">Email</span>
        </a>

        <a
          className="icon-div"
          href="https://maps.app.goo.gl/KARZ4HPxj64YuaWA8"
        >
          <div className="sm-icon-div">
            <FaMapMarkerAlt className="sm-icons" />
          </div>

          <span className="contact-text">Address</span>
        </a>

        <a
          className="icon-div"
          href="https://www.linkedin.com/in/nalamsurya"
          target="_blank"
          rel="noreferrer"
        >
          <div className="sm-icon-div">
            <FaLinkedin className="sm-icons" />
          </div>
          <span className="contact-text"> LinkedIn </span>
        </a>

        <a
          className="icon-div"
          href="https://www.github.com/suryanalam"
          target="_blank"
          rel="noreferrer"
        >
          <div className="sm-icon-div">
            <FaGithub className="sm-icons" />
          </div>
          <span className="contact-text">GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
