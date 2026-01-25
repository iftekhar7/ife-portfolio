function NoDataFound({ 
  title = "No Data Found", 
  description = "There is no data available to display." 
}) {
  return (
    <div className="no-data-found">
      <i className="fas fa-database" aria-hidden="true"></i>
      <h6 className="mb-1">{title}</h6>
      <p>{description}</p>
    </div>
  );
}

export default NoDataFound;

