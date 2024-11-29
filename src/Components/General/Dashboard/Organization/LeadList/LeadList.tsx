import { Card, Col } from "reactstrap";
import LeadListBody from "./LeadListBody";

const LeadList = () => {
  return (
    <Col>
      <Card className="job-card">
        <LeadListBody />
      </Card>
    </Col>
  );
};

export default LeadList;
