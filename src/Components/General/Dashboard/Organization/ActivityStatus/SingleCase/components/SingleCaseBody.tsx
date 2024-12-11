import FileManager from "./FileManager";
import SingleCaseInfo from "./SingleCaseInfo";

const SingleCaseBody = () => {
  return (
    <div className="d-flex gap-1">
      <div className="col-12 col-md-5">
        <SingleCaseInfo />
      </div>
      <div className="col-12 col-md-7">
        <FileManager />
      </div>
    </div>
  );
};

export default SingleCaseBody;
