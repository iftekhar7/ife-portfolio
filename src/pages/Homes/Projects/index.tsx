import React from "react";

function Projects({ data }: any) {
  return (
    <React.Fragment>
      <div className="grid-basic">
        {data.map((item: any) => {
          return (
            <div className="card card--hover p-0 mb-0" key={item?.id}>
              <div className="card-body py-0">
                <div className="img-wrapper">
                  <img src={item?.url ?? ""} alt={item?.name} loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-heading mb-0">
                    {item?.projectName ?? "N/A"}{" "}
                  </h3>
                  <h6 className="text-sub-heading">
                    {" "}
                    {item?.companyName ?? "--"}{" "}
                  </h6>
                  <p className="text-sm">{item?.description ?? "--"}</p>
                  <div className="flex-start flex-wrap mt-3 mb-4">
                    {item?.languages?.length > 0
                      ? item?.languages.map((lang: string, index: number) => (
                          <span
                            className="pill pill-secondary mr-2 font-sxs px-2"
                            key={index}
                          >
                            {lang}
                          </span>
                        ))
                      : null}
                  </div>
                  <div className="card-footer">
                    <p className="text-content f-14">
                      {item?.designStatus ?? "N/A"}
                    </p>
                  </div>
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
