 
import RunRow from "./ListRow";
// import Pagination from "./Pagination";

function Table(props: any) {
  const { data, isOpenModal, setIsOpenModal } = props;
  return (
    < > 
      <div className="list-wrapper">
        <div className="list-header">
          <h6 className="flex-40">Project</h6>
          <h6 className="flex-15">Company Name</h6> 
           <h6 className="flex-25">Languages</h6>
          <h6 className="flex-10">Start Date</h6>
          <h6 className="flex-10">End Date</h6>  
        </div>
        <ul className="list-view">
          {data.map((item: any) => (
            <RunRow key={item?.id} item={item} setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal}/>
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
