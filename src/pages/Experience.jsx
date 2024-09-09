import externsclub from "../assets/images/externsclub.png";
import celebal from "../assets/images/celebal.png";

const Experience = () => {
  return (
    <section id="experience" className="bg-container">
      <div className="content-wrapper">
        <h1 className="heading">Work Experience</h1>
        <div className="work-experience-bg">
          <section className="experience-container" data-aos="fade-up">
            <section className="company-logo-div">
              <img
                src={externsclub}
                alt="externsclub"
                className="company-logo"
              />
            </section>
            <section className="title-div">
              <h2 className="role">Full Stack Developer Intern</h2>
              <span className="duration">Sept'23 - May'24</span>
            </section>
            <span className="company-info">
              Externsclub Pvt Ltd - Bengaluru, Karanataka
            </span>
            <h4 className="work-list-title">Roles and Responsibilities</h4>
            <ul className="work-list">
              <li>
                Engineered a full-stack CRM application to manage the sales and
                employee data efficeintly within an organization which led to
                increase the operational efficiency by 40%.
              </li>
              <li>
                Designed an intuitive and user-friendly interface for the LMS
                portal powered by EdMingle, ensuring cross-browser compatibility
                for easy navigation and responsive layout.
              </li>
              <li>
                Collaborated with UI/UX designers to develop web applications
                that adhere to best practices in design patterns and user
                experience principles.
              </li>
            </ul>
          </section>
          <section className="experience-container" data-aos="fade-up">
            <section className="company-logo-div">
              <img src={celebal} alt="externsclub" className="company-logo" />
            </section>
            <section className="title-div">
              <h2 className="role">React JS Intern</h2>
              <span className="duration">May'23 - July'23</span>
            </section>
            <span className="company-info">
              Celebal Technologies - Jaipur, Rajasthan
            </span>
            <h4 className="work-list-title">Roles and Responsibilities</h4>
            <ul className="work-list">
              <li>
                Developed a food ordering application with dynamic Cart
                Management, Real-time notifications and user-friendly interface.
              </li>
              <li>
                Actively engaged in industry mentor-led classes and completed
                weekly tasks to enhance overall skill development.
              </li>
              <li>
                Recognized with a golden badge for the exceptional performance
                and active participation during the internship.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Experience;
