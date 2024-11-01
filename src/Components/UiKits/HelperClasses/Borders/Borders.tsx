import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BordersTitle } from "@/Constant";
import { BordersSubTitle } from "@/Data/Uikits/HelperClasses";
import { Card, CardBody, Col, Row } from "reactstrap";
import { AdditiveBorder } from "./AdditiveBorder";
import { AdditiveRadius } from "./AdditiveRadius";
import { SubtractiveBorder } from "./SubtractiveBorder";

export const Borders = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={BordersTitle} span={BordersSubTitle} />
        <CardBody>
          <Row className="g-3">
            <AdditiveBorder />
            <SubtractiveBorder />
            <AdditiveRadius />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
