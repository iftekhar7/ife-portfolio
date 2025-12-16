function SearchInput({ placeholder, value, onChange }: any) {
  return (
    <div className="search-bar">
      <i className="fas fa-search search-icon" />
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="form-control "
        placeholder={placeholder ?? "Search..."}
      />
    </div>
  );
}
export default SearchInput;
