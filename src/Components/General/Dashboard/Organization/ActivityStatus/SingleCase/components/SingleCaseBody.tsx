import CaseInfo from "./CaseInfo";
import FileManager from "./FileManager";

const SingleCaseBody = () => {
  return (
    <div>
      <div className="col-12 col-md-6 mb-3">
        <CaseInfo />
      </div>
      <div className="col-12 col-md-6">
        <FileManager />
      </div>
    </div>
  );
};

export default SingleCaseBody;
