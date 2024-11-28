import { Card, Col } from "reactstrap";
import AdvisorListBody from "./AdvisorListBody";

const AdvisorList = () => {
  return (
    <Col>
      <Card className="job-card">
        <AdvisorListBody />
      </Card>
    </Col>
  );
};

export default AdvisorList;
