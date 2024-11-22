import { Card, Col } from "reactstrap";
import IntroducerListBody from "./IntroducerListBody";
import IntroducerListHeader from "./IntroducerListHeader";

const IntroducerList = () => {
  return (
    <Col>
      <Card className="job-card">
        <IntroducerListHeader />
        <IntroducerListBody />
      </Card>
    </Col>
  );
};

export default IntroducerList;
