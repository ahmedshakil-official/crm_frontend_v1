import { Col, Row } from "reactstrap";
import PostTemplates from "./PostTemplates/PostTemplates";
import ScheduleSocialPost from "./ScheduleSocialPost/ScheduleSocialPost";

const SchedulerTab: React.FC = () => {
  return (
    <Row>
      <Col md="6">
        <ScheduleSocialPost />
      </Col>
      <Col md="6">
        <PostTemplates />
      </Col>
    </Row>
  );
};

export default SchedulerTab;
