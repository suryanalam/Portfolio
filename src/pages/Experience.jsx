import { experiences } from "../utils/data.js";

const Experience = () => {
  return (
    <section id="experience" className="bg-container">
      <div className="content-wrapper">
        <h1 className="heading">Work Experience</h1>
        <div className="work-experience-bg">
          {experiences.map((exp) => (
            <section
              className="experience-container"
              data-aos="fade-up"
              key={exp.id}
            >
              <section className="company-logo-div">
                <img src={exp.logo} alt="rentomojo" className="company-logo" />
              </section>
              <section className="title-div">
                <h2 className="role">{exp.role}</h2>
                <span className="duration">{exp.duration}</span>
              </section>
              <span className="company-info">{exp.name}</span>
              <h4 className="work-list-title">Roles and Responsibilities</h4>
              <ul className="work-list">
                {exp.description.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
