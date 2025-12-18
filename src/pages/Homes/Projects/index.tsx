import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Projects({ data }: any) {
  return (
    <React.Fragment>
      <div className="grid-basic">
        {data.map((item: any) => {
          return (
            <div className="card card--hover mb-0" key={item?.id}>
              <div className="card-body py-0">
                <div className="img-wrapper" style={{height:'200px'}}>
                  <img src={item?.image} alt="project_image" /> 
                </div>
                <div className="mt-4">
                  <h3 className="text-secondary text-left f-18">
                    {item?.projectName ? item?.projectName : "N/A"}{" "}
                    <span className="text-content-dark">
                      -{item?.companyName ? item?.companyName : "N/A"}
                    </span>
                  </h3>
                </div>
                <div className="flex-start flex-wrap mt-3 mb-3">
                  {item?.languages?.length > 0
                    ? item?.languages.map((lang: string, index: number) => (
                        <span className="pill pill-secondary mr-2 font-sxs" key={index}>{lang}</span>
                      ))
                    : null} 
                </div>
                <div className="card-footer">
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
