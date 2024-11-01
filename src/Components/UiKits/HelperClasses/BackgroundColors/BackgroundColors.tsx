import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BackgroundColorsTitle } from "@/Constant";
import { BackgroundColorSubTitle } from "@/Data/Uikits/HelperClasses";
import { Card, CardBody, Col, Row } from "reactstrap";
import { DarkBackground } from "./DarkBackground";
import { ExtendedBackground } from "./ExtendedBackground";
import { LightBackground } from "./LightBackground";

export const BackgroundColors = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={BackgroundColorsTitle} span={BackgroundColorSubTitle} />
        <CardBody>
          <Row className="g-3">
            <DarkBackground />
            <LightBackground />
            <ExtendedBackground />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
