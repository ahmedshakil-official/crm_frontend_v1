import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BorderStyleTitle } from "@/Constant";
import { BorderStyleSubTitle } from "@/Data/Uikits/HelperClasses";
import { Card, CardBody, Col, Row } from "reactstrap";
import { BorderColor } from "./BorderColor";
import { BorderWidth } from "./BorderWidth";
import { CustomBorder } from "./CustomBorder";
import { TextColors } from "./TextColors";

export const BorderStyles = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={BorderStyleTitle} span={BorderStyleSubTitle} />
        <CardBody>
          <Row className="g-3">
            <CustomBorder />
            <BorderColor />
            <BorderWidth />
            <TextColors />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
