import { data } from "./data";

function Work() {
  return (
    <div className="timeline-section">
      <div className="timeline-line" /> 
      {data.map((item) => (
        <div key={item.id} className="timeline-item">
          <div className={`timeline-dot ${item.gradientClass}`}>
            <div className="dot-inner" />
          </div> 
          <div className="timeline-card card">
            <div className="card-header flex-between flex-align-start">
              <div>
                <h4 className="text-heading mb-1">{item.role}</h4>
                <p className="text-primary">{item.company}</p>
              </div>
              <span className="pill pill-secondary mr-0">{item.year}</span>
            </div> 
            <ul className="pl-8">
              {item.description.map((subItem, index) => (
                <li className="text-sm mb-2" key={`${item.id}-${index}`}>
                  {subItem.paragraph}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Work;
