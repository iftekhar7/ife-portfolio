

function Work() {
  return (
    <div className="timeline-section">
      <div className="timeline-container">
        {/* Timeline Line */}
        <div className={`timeline-line `} />

        <div className="timeline-items">
          {[
            {
              year: "2022 - Present",
              role: "Software Engineer",
              company: "LexSi",
              description:
                "Worked as a UX/UI Designer and Front-End Developer at LexSi, responsible for designing and developing web templates, creating reusable UI component libraries and templates. Improved application performance by 90% through code-splitting and lazy loading. Converted Figma wireframes into production-ready React components using JavaScript best practices.",
              gradientClass: "pink-gradient",
            },
            {
              year: "2021 - 2022",
              role: "Full Stack Development Bootcamp",
              company: "Neerlon School",
              description:
                "Learned technical stack: Java, HTML, CSS, JavaScript, React, React Router, and Bootstrap. Participated in various projects: a food ordering app, a calculator, a Tic-Tac-Toe game, and a Facebook login page.",
              gradientClass: "blue-gradient",
            },
            {
              year: "2017 - 2021",
              role: "Bachelor of Technology",
              company:
                "Malout Institute of Management & Information Technology, Punjab",
              description:
                "Completed Bachelor of Technology in Mechanical Engineering with a CGPA of 6.91/10.0. Gained foundational knowledge in engineering principles and problem-solving.",
              gradientClass: "purple-gradient",
            },
          ].map((item, i) => (
            <div key={i} className="timeline-item">
              {/* Timeline Dot */}
              <div className={`timeline-dot ${item.gradientClass}`}>
                <div className={`dot-inner `} />
              </div>

              {/* Content Card */}
              <div className={`timeline-card light`}>
                <div className={`year-badge light`}>{item.year}</div>

                <h4 className="role-title">{item.role}</h4>
                <p className={`company-name light`}>{item.company}</p>

                <p className={`description light`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
