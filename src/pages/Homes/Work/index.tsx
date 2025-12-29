import { data } from "./data";

function Work() {
  return (
    <div className="timeline-section">
      <div className="timeline-container">
        <div className="timeline-line" />

        <div className="timeline-items">
          {data.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className={`timeline-dot ${item.gradientClass}`}>
                <div className="dot-inner" />
              </div>

              <div className="timeline-card card">
                <div className="card-header flex-between">
                <h4 className="role-title">{item.role}</h4>
                <div className="pill pill-secondary mr-0">{item.year}</div> 
                </div>

                <p className="company-name light">{item.company}</p>

                <ul className="pl-8">
                  {item.description.map((subItem, index) => (
                    <li className="text-sm" key={`${item.id}-${index}`}>
                      {subItem.paragraph}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
