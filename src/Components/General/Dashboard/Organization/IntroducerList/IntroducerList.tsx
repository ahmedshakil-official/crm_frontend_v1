import { Card, Col } from "reactstrap";
import IntroducerListBody from "./IntroducerListBody";

const IntroducerList = () => {
  return (
    <Col>
      <Card className="job-card">
        <IntroducerListBody />
      </Card>
    </Col>
  );
};

export default IntroducerList;
