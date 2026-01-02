 

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 95 },
    { name: 'Redux', percentage: 85 }
  ];

  const professionalSkills = [
    { name: 'Communication', percentage: 85 },
    { name: 'Teamwork', percentage: 85 },
    { name: 'Problem Solving', percentage: 75 },
    { name: 'Creativity', percentage: 80 }
  ];

  const tools = [
    { icon: '📄', name: 'HTML5', color: '#e34c26' },
    { icon: '🎨', name: 'CSS3', color: '#264de4' },
    { icon: 'JS', name: 'JavaScript', color: '#f0db4f' },
    { icon: '⚛️', name: 'React', color: '#61dafb' },
    { icon: '📗', name: 'Node.js', color: '#68a063' },
    { icon: '🍃', name: 'MongoDB', color: '#4db33d' },
    { icon: '🔀', name: 'Git', color: '#f34f29' },
    { icon: '📦', name: 'npm', color: '#cb3837' },
    { icon: '💅', name: 'Sass', color: '#cc6699' },
    { icon: '🎯', name: 'Figma', color: '#a259ff' },
    { icon: '💻', name: 'VS Code', color: '#007acc' },
    { icon: '🐧', name: 'Linux', color: '#fcc624' }
  ];

  return (
    <>
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
                <div className="tool-icon" style={{ color: tool.color }}>
                  {tool.icon}
                </div>
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div> 
    </>
  );
};

export default Skills;