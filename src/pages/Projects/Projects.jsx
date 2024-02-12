import React, { useState } from "react";
import "./Projects.css";
import projects from "../../projects";

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  return (
    <section id="projects" className="section-bg">
      <h1 className="heading">Projects</h1>
      <div className="projects-container">
        <div className="projects-left">
          <div className="project-titles-div">
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
        </div>
        <div className="projects-right">
          <h2 className="project-name">{projects[projectIndex].name}</h2>

          <div className="project-details-div">
            <h4 className="project-heading">Summary:</h4>
            <ul className="project-details">
              {projects[projectIndex].description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="project-details-div">
            <h4 className="project-heading">Technologies Used:</h4>
            <ul className="project-details">
              {projects[projectIndex].skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
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
