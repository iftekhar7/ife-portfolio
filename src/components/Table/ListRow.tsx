const RunRow = ({ item }: any) => {
  return (
    <li className={`list-view-item flex `} key={item?.id}>
      <div className="profile-list flex-25 ">
        <div className="profile-view-avatar">
          <i className="fa-solid fa-gear fa-lg"></i>
        </div>
        <div className="profile-info">
          <h6>{item?.projectName ?? "-"}</h6> 
          <p className="truncate pr-2">{item?.description ?? "--"}</p>
        </div>
      </div>

      <div className="flex-20">
        <h6 >{item?.companyName??'--'}</h6>
      </div> 
       
      <div className="flex-25 flex-start">
        {item?.languages?.map((item:string, index:string)=>{
            return <span className="pill pill-secondary mr-2 font-sxs" key={index}>{item}</span>
        })}
        
      </div>

      <div className="flex-15">
        <h6 className="truncate pr-2">
            h 
        </h6>
      </div>

      <div className="flex-15">
        <h6> j</h6>
      </div> 
    </li>
  );
};

export default RunRow;