import React from "react";
import "./contact.css";

import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="section-bg">
      <h1 className="heading">Contact Me</h1>
      <div className="contact-container">
        <div className="contact-left">
          <form action="" className="form-bg">
            <div className="form-group-wrapper">
              <div className="form-group">
                <label htmlFor="first_name" className="form-group-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  className="form-group-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name" className="form-group-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  className="form-group-input"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-group-label">
                Email
              </label>
              <input type="text" name="email" className="form-group-input" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-group-label">
                Message
              </label>
              <textarea
                name="message"
                rows="10"
                className="form-group-input"
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
        <div className="contact-right">
          <div className="contact-info-div">

            <div className="icon-div">
              <div className="sm-icon-div">
                <FaPhone className="sm-icons" />
              </div>
              <a href="tel:+91897545846"><span className="contact-text">+918978545846</span></a>
            </div>

            <div className="icon-div">
              <div className="sm-icon-div">
                <IoMail className="sm-icons" />
              </div>
              <a href="mailto:suryanalam3011@gmail.com"><span className="contact-text">suryanalam3011@gmail.com</span></a>
            </div>

            <div className="icon-div">
              <div className="sm-icon-div">
                <FaMapMarkerAlt className="sm-icons" />
              </div>
              <span className="contact-text">Andhra Pradesh, India</span>
            </div>

            <h4 className="contact-heading">Follow me</h4>

            <div className="sm-icons-wrapper">
              <div className="sm-icon-div">
                <a href="https://www.linkedin.com/in/nalamsurya" target="_blank" rel="noreferrer"><FaLinkedin className="sm-icons"/></a>
              </div>
              <div className="sm-icon-div">
                  <a href="https://www.github.com/suryanalam" target="_blank" rel="noreferrer"><FaGithub className="sm-icons"/></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
