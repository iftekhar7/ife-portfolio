import { useMemo, useState } from "react";
import { projectDetailsData } from "./data";
import NoFound from "../../../components/NoFound";

function Projects({ data, setIsOpenModal }: any) {
  const [showAll, setShowAll] = useState(false);

  const visibleData = useMemo(() => {
    return showAll ? data : data?.slice(0, 6);
  }, [data, showAll]);

  const handleDetails = (name: string) => {
    const filterData =
      projectDetailsData?.filter((item) => item?.name === name) || [];
    setIsOpenModal({ isOpen: true, details: filterData, name });
  };

  return (
    <>
      {visibleData?.length ? (
        <div className="grid-responsive">
          {visibleData?.map((item: any) => (
            <div
              className="card card--hover p-0 mb-0"
              key={item.id}
              onClick={() => handleDetails(item?.projectName)}
              title="click here to see what I did on this project"
            >
              <div className="card-body py-0 position-relative">
                 <span className="badge badge-purple">{item?.type}</span>
                <div className="img-wrapper">
                  <img src={item.url} alt={item.projectName} loading="lazy" />
                </div>

                <div className="p-5">
                  <h3 className="text-heading mb-0">
                    {item.projectName ?? "N/A"},(NDA)
                  </h3>

                  <h6 className="text-sub-heading">
                    {item.companyName ?? "--"}
                  </h6>

                  <p className="text-sm">{item.description ?? "--"}</p>

                  <div className="flex-start flex-wrap mt-3 mb-2">
                    {item.languages?.map((lang: string, index: number) => (
                      <span
                        key={`${item.id}-${index}`}
                        className="pill pill-secondary mr-2 font-sxs px-2 mb-2"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>

                  <div className="card-footer">
                    <p className="text-content f-14">
                      {item.designStatus ?? "N/A"}
                    </p>
                    <button
                      className="btn btn-primary-text"
                      onClick={() => handleDetails(item?.projectName)}
                    >
                      My Contributions <i className="fas fa-arrow-right ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoFound
          title="No Results"
          description="No matching results found for your search."
        />
      )}

      {data?.length > 6 && !showAll && (
        <button
          className="btn btn-primary mt-4"
          onClick={() => setShowAll(true)}
        >
          View All Projects <i className="fas fa-arrow-right ml-2"></i>
        </button>
      )}
    </>
  );
}

export default Projects;
