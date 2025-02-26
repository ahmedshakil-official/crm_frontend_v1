import { Spinner } from "reactstrap";

const LoadingSpinner = () => {
  return (
    <Spinner
      className="d-flex justify-content-center align-items-center"
      color="primary"
    >
      Loading...
    </Spinner>
  );
};

export default LoadingSpinner;
