const RunRow = ({ item }: any) => {
  return (
    <li className={`list-view-item flex `} key={item?.id}>
      <div className="profile-list flex-40 ">
        <div className="profile-view-avatar">
          {item?.url?
           <img src={item?.url ?? ""} alt={item?.name} loading="lazy" />: <i className="fa-solid fa-image"></i>}
         
        </div>
        <div className="profile-info">
          <h6>{item?.projectName ?? "-"}</h6> 
          <p className="truncate pr-2" style={{width:'381px'}}>{item?.description ?? "--"}</p>
        </div>
      </div>
      <div className="flex-15">
        <h6 >{item?.companyName??'--'}</h6>
      </div> 
      <div className="flex-25 flex-start">
        {item?.languages.slice(0, 2)?.map((item:string, index:string)=>{
            return <span className="pill pill-secondary mr-2 font-sxs" key={index}>{item}</span>
        })}
        <span className="pill pill-secondary mr-2 font-sxs"  >More... </span>
      </div> 
      <div className="flex-10">
        <h6 className="truncate pr-2">
            {item?.startDate??'--'}
        </h6>
      </div> 
      <div className="flex-10">
        <h6>{item?.endDate??'--'}</h6>
      </div> 
    </li>
  );
};

export default RunRow;