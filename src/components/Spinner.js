export const Spinner = () => {
  return (
    <div className="d-flex justify-content-center spinner-container">
      <div className="row align-items-center">
        <div className="spinner-border col" role="status">
          <span className="visually-hidden col">Loading...</span>
        </div>
      </div>
    </div>
  );
};
