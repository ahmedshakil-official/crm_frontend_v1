import { Card, Col } from "reactstrap";
import ActivityStatusBody from "./ActivityStatusBody";
import ActivityStatusHeader from "./ActivityStatusHeader";

const ActivityStatus = () => {
  return (
    <Col>
      <Card className="job-card">
        <ActivityStatusHeader />
        <ActivityStatusBody />
      </Card>
    </Col>
  );
};

export default ActivityStatus;
