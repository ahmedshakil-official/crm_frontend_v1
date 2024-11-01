import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomRadiosTitle } from "@/Constant";
import { CustomRadioBoxSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col, Row } from "reactstrap";
import { BorderedRadio } from "./BorderedRadio";
import { FilledRadio } from "./FilledRadio";
import { IconsRadio } from "./IconsRadio";

export const CustomRadio = () => {
  return (
    <Col xs="12">
      <Card className="custom-radio-failld">
        <CommonCardHeader title={CustomRadiosTitle} span={CustomRadioBoxSubTitle} />
        <CardBody className="checkbox-checked">
          <Row className="g-3">
            <BorderedRadio /> 
            <IconsRadio /> 
            <FilledRadio /> 
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
