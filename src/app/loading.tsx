const Loading = () => {
  return (
    <div className="loader-wrapper">
      <div className="d-flex justify-content-center loader">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
