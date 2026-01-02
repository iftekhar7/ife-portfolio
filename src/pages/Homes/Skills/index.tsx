import React from "react";
import { professionalSkills, technicalSkills, tools } from "./data";

const Skills = () => {
  return (
    <React.Fragment>
      <div className="skills-grid">
        <div className="skill-category">
          <h3 className="text-heading">Technical Skills</h3>
          <div className="skill-list">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="flex-between mb-2">
                  <span className="text-sub-heading mb-0">{skill.name}</span>
                  <span className="gradient-text">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h6 className="text-heading">Professional Skills</h6>
          <div className="skill-list">
            {professionalSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="flex-between mb-2">
                  <span className="text-sub-heading mb-0">{skill.name}</span>
                  <span className="gradient-text">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="tools-section">
        <h6 className="text-heading">
          Tools & <span className="gradient-text">Technologies</span>
        </h6>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-icon">
                {tool.icon.length <= 3 ? (
                  <span style={{ color: tool.color }}>{tool.icon}</span>
                ) : (
                  <i
                    className={`${tool.icon} text-xl`}
                    style={{ color: tool.color }}
                  />
                )}
              </div>
              <span className="tool-name ml-2">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
