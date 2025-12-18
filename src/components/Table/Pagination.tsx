function Pagination({ pageIndex, pageSize, totalRecords, onPageChange, onPageSizeChange }:any) {
  const pageCount = Math.ceil(totalRecords / pageSize);

  const canPreviousPage = pageIndex > 0;
  const canNextPage = pageIndex < pageCount - 1;

  return (
    <div className="list-pagination">
      <div className="pagination-buttons">
        <div className="flex-center">
          <span>Records per page</span>
          <select
            value={pageSize}
            className="form-control"
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
          >
            {[5, 10, 20, 30, 40, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
          <span>
            <strong>
              Page {pageIndex + 1} - {pageCount} of {totalRecords} 
            </strong>
          </span>
          <button
            onClick={() => onPageChange(pageIndex - 1)}
            disabled={!canPreviousPage}
            className="button "
            title="Previous"
          >
            <i className="fas fa-angle-left"></i>
          </button>
          <button
            onClick={() => onPageChange(pageIndex + 1)}
            disabled={!canNextPage}
            className="button"
            title="Next"
          >
            <i className="fas fa-angle-right"></i>
          </button> 
      </div>
    </div>
  );
}

export default Pagination;
