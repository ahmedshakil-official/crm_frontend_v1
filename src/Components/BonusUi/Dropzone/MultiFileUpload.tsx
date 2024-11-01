import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MultiFileUploads } from "@/Constant";
import { FileUploadData } from "@/Data/BonusUi/Dropzone";
import { Card, Col } from "reactstrap";
import CommonFileUpload from "./Common/CommonFileUpload";

const MultiFileUpload = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={MultiFileUploads} span={FileUploadData} />
        <CommonFileUpload multiple={true} body={true} />
      </Card>
    </Col>
  );
};

export default MultiFileUpload;
