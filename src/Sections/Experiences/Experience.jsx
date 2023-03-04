import React,{useState} from "react";
import "./Experience.css";
import constant from "../../constant.json";

const Experience = () => {
  const [currentIdx, setCurrentIndex] = useState(0);
  return (
    <section id="Experience">
      <h1 className="headers">Education</h1>
      <div className="experience_container">
        <div className="experience_left">
            {
              constant.experiences.map((experience, idx) => (
              <div
                className={
                  idx === currentIdx
                    ? "experience_tab experience_active_tab"
                    : "experience_tab"
                }
                onClick={() => setCurrentIndex(idx)}
              >
                {experience.education}
              </div>
              ))
            }
        </div>

        <div className="experience_right">
          <h4 className="experience_title">{constant.experiences[currentIdx].institute}</h4>
          <p className="experience_details">{constant.experiences[currentIdx].location}</p>
          <p className="experience_details">{constant.experiences[currentIdx].duration}</p>
          <p className="experience_details">{constant.experiences[currentIdx].aggregate}</p> 
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
