import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience" className="section-bg">
      <h1 className="heading">Work Experience</h1>
      <div className="experience-container">
        <section className="experience-section-bg" data-aos = "fade-up">
          <section className="company-logo-bg">
            <img
              src={process.env.PUBLIC_URL + "/assets/externsclub.png"}
              alt="externsclub"
              className="company-logo"
            />
          </section>

          <section className="title-section">
            <h2 className="role">Full Stack Developer Intern</h2>
            <span className="duration">Sept'23 - Present</span>
          </section>

          <span className="company-info">
            Externsclub Pvt Ltd - Benguluru, Karanataka
          </span>

          <h4 className="work-list-title">Roles and Responsibilities</h4>

          <ul className="work-list">
            <li>
              Engineered a CRM application to manage the sales and
              employee data efficeintly in an organization.
            </li>
            <li>
              Crafted an intuitive interface with a responsive design, ensuring
              all users to utilize the application across various devices.
            </li>
            <li>
                Features: Payments Gateway Integration, Google Sheets Synchronization, Dynamic Charts Data, Import & Export CSV files functionality.
            </li>
          </ul>
        </section>

        <section className="experience-section-bg" data-aos = "fade-up">
          <section className="company-logo-bg">
            <img
              src={process.env.PUBLIC_URL + "/assets/celebal.png"}
              alt="externsclub"
              className="company-logo"
            />
          </section>
          <section className="title-section">
            <h2 className="role">React JS Intern</h2>
            <span className="duration">May'23 - July'23</span>
          </section>

          <span className="company-info">
            Celebal Technologies - Jaipur, Rajasthan
          </span>

          <h4 className="work-list-title">Roles and Responsibilities</h4>

          <ul className="work-list">
            <li>
              Completed weekly tasks and delivered a food ordering app with Cart
              Management, Dynamic Billing, and Real-time notifications.
            </li>
            <li>
              Actively engaged in industry mentor-led classes, contributing to
              skill development.
            </li>
            <li>
              Recognized with a golden badge for exceptional performance during
              the internship.
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Experience;
