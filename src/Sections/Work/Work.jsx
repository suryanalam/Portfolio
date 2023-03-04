import React from "react";
import "./Work.css";
import constant from "../../constant.json";

const Work = () => {
  return (
    <section id="Work">
      <div className="work_container">
        {
          constant.projects.map((project, idx) => (
                <div className="work_project">
                    <a href={project.link} target="_blank" rel="noreferrer" className="work_title">{project.title}</a>
                    <p className="work_desc">{project.desc}</p>
                    <div className="work_skill_container">
                      {project.skills.map((skill) => (<p className="work_skill">{skill}</p>))}
                    </div>   
                    <a href={project.link} target="_blank" className="work_link" rel="noreferrer">Live</a>
                </div>
          ))
        }
      </div>
    </section>
  );
};

export default Work;
