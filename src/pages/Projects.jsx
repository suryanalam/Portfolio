import { useEffect, useState } from "react";
import projects from "../utils/projects";

const Projects = () => {
  const [currentProjectId, setCurrentProjectId] = useState(1);
  const [currentProject, setCurrentProject] = useState({});

  // fetch product details using the project Id
  const getProjectDetails = (id) => {
    const project = projects.find((product) => product.id === id);
    return project;
  };

  // set/update the states related to project
  const handleProduct = (id) => {
    setCurrentProjectId(id);
    const project = getProjectDetails(id);

    if (!project?.id) {
      alert("Product not found !!");
    }

    setCurrentProject(project);
  };

  // set "currentProject" with details of 1st project (onMount)
  useEffect(() => {
      handleProduct(currentProjectId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="projects" className="bg-container">
      <div className="content-wrapper">
        <h1 className="heading">Projects</h1>
        <div className="projects-container">
          <div className="projects-left" data-aos="fade-up">
            {projects.map((project) => (
              <div
                key={project.id}
                className={
                  project.id === currentProjectId
                    ? "project-title active"
                    : "project-title"
                }
                onClick={() => handleProduct(project.id)}
              >
                {project.title}
              </div>
            ))}
          </div>
          {currentProject?.id && (
            <div className="projects-right" data-aos="fade-up">
              <h2 className="project-name">{currentProject?.name}</h2>
              <div className="project-details-div">
                <h4 className="project-heading">Description</h4>
                <ul>
                  {currentProject?.description.map((item, index) => (
                    <li key={index} className="details">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project-details-div">
                <h4 className="project-heading">Technologies</h4>
                <div className="technologies-div">
                  {currentProject?.skills.map((skill, index) => (
                    <span key={index} className="technologies">
                      <span className="technologies-count">
                        {index + 1}.&nbsp;
                      </span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-details-div">
                {currentProject?.github_repo_link && (
                  <a
                    href={currentProject.github_repo_link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                )}

                {currentProject?.webapp_live_link && (
                  <a
                    href={currentProject.webapp_live_link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
