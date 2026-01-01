 

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'Node.js', percentage: 80 }
  ];

  const professionalSkills = [
    { name: 'Communication', percentage: 90 },
    { name: 'Teamwork', percentage: 85 },
    { name: 'Problem Solving', percentage: 95 },
    { name: 'Creativity', percentage: 75 }
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
      <style>{`
        // .skills-section {
        //   padding: 5rem 0;
        //   background-color: #0f172a;
        //   color: #ffffff;
        // }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
  

        .gradient-text {
          background: linear-gradient(135deg, #06b6d4, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-underline {
          width: 5rem;
          height: 0.25rem;
          background: linear-gradient(to right, #06b6d4, #8b5cf6);
          margin: 0 auto;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .category-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-weight: 500;
        }

        .skill-percentage {
          color: #06b6d4;
        }

        .skill-bar {
          width: 100%;
          height: 0.5rem;
          background-color: #1e293b;
          border-radius: 9999px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, #06b6d4, #8b5cf6);
          border-radius: 9999px;
          transition: width 1s ease;
        }

        .tools-section {
          margin-top: 4rem;
        }

        .tools-title {
          font-size: 1.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .tools-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 768px) {
          .tools-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .tools-grid {
            grid-template-columns: repeat(6, 1fr);
          }
        }

        .tool-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem;
          background-color: #1e293b;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tool-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
        }

        .tool-icon {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .tool-name {
          font-size: 0.875rem;
          color: #94a3b8;
        }
      `}</style>
      {/* <section id="skills" className="skills-section"> */}
     

        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">Technical Skills</h3>
            <div className="skill-list">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
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
            <h3 className="category-title">Professional Skills</h3>
            <div className="skill-list">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
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
          <h3 className="tools-title">
            Tools & <span className="gradient-text">Technologies</span>
          </h3>
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