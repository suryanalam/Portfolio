import React, { useState } from "react";
import "./Projects.css";
import projects from "../../projects";

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  return (
    <section id="projects" className="section-bg">
      <h1 className="heading">Projects</h1>
      <div className="projects-container">
        <div className="projects-left" data-aos = "fade-up">
          {projects.map((project, index) => (
            <div
              className={
                index === projectIndex
                  ? "project-title active"
                  : "project-title"
              }
              onClick={() => setProjectIndex(index)}
            >
              {project.title}
            </div>
          ))}
        </div>
        <div className="projects-right" data-aos = "fade-up">
          <h2 className="project-name">{projects[projectIndex].name}</h2>
          <div className="project-details-div">
            <h4 className="project-heading">Summary:</h4>
            <ul>
              {projects[projectIndex].description.map((item, index) => (
                <li key={index} className="details">{item}</li>
              ))}
            </ul>
          </div>

          <div className="project-details-div">
            <h4 className="project-heading">Technologies</h4>
            <div className="technologies-div">
              {projects[projectIndex].skills.map((skill, index) => (
                <span key={index} className="technologies">
                  <span className="technologies-count">{index+1}.&nbsp;</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="project-details-div">
            <a
              href={projects[projectIndex].github_repo_link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub
            </a>

            <a
              href={projects[projectIndex].webapp_live_link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
