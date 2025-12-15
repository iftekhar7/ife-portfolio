import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { cardData } from "../data";

function Projects() {  

  return (
    <React.Fragment>
      <div className="grid-basic">
        {cardData.map((item: any) => {
          return (
            <div className="card mb-0" key={item?.id}>
              <div className="card-body py-0">
                <div className="img-wrapper">
                  <img src={item?.image} alt="project_image" />
                  <div
                    className="expand-icon"
                    data-tooltip-id={`${item?.projectName}`}
                    data-tooltip-content="Expand and View more"
                    // onClick={() => clickModalHandler(item?.projectName)}
                  >
                    <i className="fas fa-expand-wide"></i>
                  </div>
                  <Tooltip className="tooltip" id={`${item?.projectName}`} />
                </div>
                <div className="mt-4">
                  <h3 className="text-secondary text-left f-18">
                    {item?.projectName ? item?.projectName : "N/A"}{" "}
                    <span className="text-content-dark">
                      -{item?.companyName ? item?.companyName : "N/A"}
                    </span>
                  </h3>
                </div>
                <div className="flex-start">
                  <p className="text-sm mr-2 text-orange">
                    {item?.typeScript ? item?.typeScript : null}
                  </p>
                  <p className="text-sm mr-2 text-orange">
                    {item?.react ? item?.react : "N/A"}
                  </p>
                  <p className="text-sm mr-2 text-amber">
                    {item?.html ? item?.html : "N/A"}
                  </p>
                  <p className="text-sm mr-2 text-sky ">
                    {item?.framework ? item?.framework : "N/A"}
                  </p>
                  <p className="text-sm mr-2 text-darkGrey ">
                    {item?.eatonLibrary ? item?.eatonLibrary : null}
                  </p>
                  <p className="text-sm mr-2 text-teal">
                    {item?.scss ? item?.scss : "N/A"}
                  </p>
                  <p className="text-sm mr-2 text-slate">
                    {item?.amCharts ? item?.amCharts : "N/A"}
                  </p>
                </div>
                <div className="custom-card-footer">
                  <p className="text-content f-14">
                    {item?.designStatus ? item?.designStatus : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Projects;
