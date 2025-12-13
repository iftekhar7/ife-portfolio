import React from "react";
import dayjs from "dayjs";
import { files } from "./data";

const RunRow = ({ item }: any) => {
  return (
    <li className={`list-view-item flex  `} key={item?.id}>
      <div className="profile-list flex-20">
        <div className="profile-view-avatar">
          <i className="fa-solid fa-gear fa-lg"></i>
        </div>
        <div className="profile-info">
          <h6>{item?.name ?? "-"}</h6> 
        </div>
      </div>

      <div className="flex-20">
        {item?.tags && item?.tags.length > 0 ? (
          <span className="pill pill-primary mr-2">{item?.tags.join(", ")}</span>
        ) : (
          <h6 className="text-capitalize">--</h6>
        )}
      </div>

      <div className="flex-20">
        <h6 >{item?.brand??'--'}</h6>
      </div> 
      <div className="flex-20">
        <h6 className="truncate pr-2">
          {item?.size ? item?.size : "--"}
        </h6>
      </div>

      <div className="flex-15">
        <h6>{dayjs(item?.date).format("MM-DD-YYYY HH:mm:ss") ?? "—"}</h6>
      </div>

      <div className="flex-5">
        <div className="action-button">
          {/* {item?.status.toLowerCase().includes("fail") && (
            <>
              <button
                className="btn btn-primary-text"
               
                data-tooltip-id={`${item?.id}`}
                data-tooltip-content="View Log"
              >
                <i className="fas fa-file-alt mr-2" />
              </button>
            </>
          )} */}
        </div>
      </div>
    </li>
  );
};

function Product() {
  return (
    <div className="page-content">
      <div className="list-wrapper">
        <div className="list-header">
          <h6 className="flex-20">
            Name
          </h6>
          <h6 className="flex-20">Tags</h6>
          <h6 className="flex-20">Brand</h6>
          <h6 className="flex-20">Size</h6>
          <h6 className="flex-15">Date</h6> 
          <h6 className="flex-5"></h6>
        </div>
        <ul className="list-view">
          {files.map((item) => (
            <RunRow key={item?.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Product;
