import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { WarningBorderState } from "@/Constant";
import { BorderWarningData } from "@/Data/BonusUi/CreativeCard";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const BorderWarningState = () => {
  return (
    <Col xxl="4" md="6">
      <Card className="height-equal">
        <CommonCardHeader headClass="border-l-warning" title={WarningBorderState} span={BorderWarningData} />
        <CardBody className="mb-3">
          <ListGroup numbered>
            <ListGroupItem className="text-primary fw-bold">known for delivery of useful and usable solutions</ListGroupItem>
            <ListGroupItem className="text-danger fw-bold">Solve your problem with us</ListGroupItem>
            <ListGroupItem className="text-success fw-bold">Certified Professionals</ListGroupItem>
            <ListGroupItem className="text-warning fw-bold">Growth-Driven</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderWarningState;
