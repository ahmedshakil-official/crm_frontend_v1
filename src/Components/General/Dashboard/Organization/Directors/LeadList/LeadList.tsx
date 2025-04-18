import { Card, Col } from "reactstrap";
import LeadListBody from "./LeadListBody";

const LeadList: React.FC = () => {
  return (
    <Col>
      <Card className="job-card">
        <LeadListBody />
      </Card>
    </Col>
  );
};

export default LeadList;
