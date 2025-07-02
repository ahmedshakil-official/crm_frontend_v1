import { Col, Row } from "reactstrap";
import ScheduleSocialPost from "./ScheduleSocialPost/ScheduleSocialPost";

const SchedulerTab: React.FC = () => {
  return (
    <Row>
      <Col md="6">
        <ScheduleSocialPost />
      </Col>
      <Col md="6"></Col>
    </Row>
  );
};

export default SchedulerTab;
