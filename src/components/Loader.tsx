function Loader({ height }: any) {
  return (
    <div className="loader-wrapper" style={{ height: height ?? height }}>
      <span className="loader">L &nbsp; ading...</span>
    </div>
  );
}

export default Loader;
