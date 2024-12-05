import { Card, Col } from "reactstrap";
import ActivityStatusBody from "./ActivityStatusBody";

const ActivityStatus = () => {
  return (
    <Col>
      <Card className="job-card">
        <ActivityStatusBody />
      </Card>
    </Col>
  );
};

export default ActivityStatus;
