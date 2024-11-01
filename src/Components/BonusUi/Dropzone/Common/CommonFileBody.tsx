import { DropFilesHereOrClickToUpload } from "@/Constant";

const CommonFileBody = () => {
  return (
    <div className="dz-message needsclick">
      <i className="icon-cloud-up text-primary"></i>
      <h6 className="fs-6">{DropFilesHereOrClickToUpload}</h6>
      <span className="f-s-initial fw-lighter">
        (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
      </span>
    </div>
  );
};

export default CommonFileBody;