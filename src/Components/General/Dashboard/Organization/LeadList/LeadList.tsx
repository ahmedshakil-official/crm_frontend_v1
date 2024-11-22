import { Card, Col } from "reactstrap";
import LeadListBody from "./LeadListBody";
import LeadListHeader from "./LeadListHeader";

const LeadList = () => {
  return (
    <Col>
      <Card className="job-card">
        <LeadListHeader />
        <LeadListBody />
      </Card>
    </Col>
  );
};

export default LeadList;
