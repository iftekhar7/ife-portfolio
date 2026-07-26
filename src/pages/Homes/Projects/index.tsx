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

  const handleRedirect = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!url) return;

    window.open(url, "_blank", "noopener,noreferrer");
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
                <div className="badge-right flex-start">
                  <span className="badge badge-purple ">
                    {item?.projectType ?? "--"}
                  </span>
                </div>
                <div
                  className={`img-wrapper ${item.projectName === "ISS - Student Management System" && "custom-image"}`}
                >
                  <img src={item.url} alt={item.projectName} loading="lazy" />
                </div>

                <div className="p-5">
                  <h3 className="text-heading mb-0">
                    {item.projectName ?? "N/A"}{" "}
                    {item.projectName !== "ISS - Student Management System" &&
                      ",(NDA)"}
                  </h3>
                  <div className="flex-start mb-3 mt-1">
                    <h6 className="text-sub-heading mb-0">
                      {item.companyName ?? "--"}
                    </h6>
                    <span className="badge badge-primary truncate ml-3">
                      {item?.type}
                    </span>
                    {item.projectName === "ISS - Student Management System" && (
                      <span
                        className=" url-link"
                        onClick={(e) => handleRedirect(item?.liveUrl, e)}
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>{" "}
                        Live Demo
                      </span>
                    )}
                  </div>

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
