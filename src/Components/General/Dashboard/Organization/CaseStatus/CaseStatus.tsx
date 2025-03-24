import { Card, Col } from "reactstrap";
import CaseStatusBody from "./CaseStatusBody";

const CaseStatus: React.FC = () => {
  return (
    <Col>
      <Card className="job-card">
        <CaseStatusBody />
      </Card>
    </Col>
  );
};

export default CaseStatus;
