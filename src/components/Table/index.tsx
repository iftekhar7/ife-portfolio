 
import RunRow from "./ListRow";
// import Pagination from "./Pagination";

function Table(props: any) {
  const { data } = props;
  return (
    < > 
      <div className="list-wrapper">
        <div className="list-header">
          <h6 className="flex-25">Project Name</h6>
          <h6 className="flex-20">Company Name</h6> 
           <h6 className="flex-25">Languages</h6>
          <h6 className="flex-15">Start Date</h6>
          <h6 className="flex-15">End Date</h6>  
        </div>
        <ul className="list-view">
          {data.map((item: any) => (
            <RunRow key={item?.id} item={item} />
          ))}
        </ul>
         {/* <Pagination
            pageIndex={pageIndex}
            pageSize={pageSize}
            totalRecords={getAttributesData?.data.count || 0}
            onPageChange={setPageIndex}
            onPageSizeChange={(size: number) => {
              setPageSize(size);
              setPageIndex(0);
            }}
          /> */}
      </div>
    </>
  );
}

export default Table;
