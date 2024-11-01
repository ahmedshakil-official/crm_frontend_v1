import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomCheckboxTitle } from "@/Constant";
import { CustomCheckBoxSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col, Row } from "reactstrap";
import { BorderedCheckbox } from "./BorderedCheckbox";
import { FilledCheckbox } from "./FilledCheckbox";
import { IconCheckbox } from "./IconCheckbox";

export const CustomCheckbox = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={CustomCheckboxTitle} span={CustomCheckBoxSubTitle} />
        <CardBody>
          <Row className="g-3">
            <BorderedCheckbox />
            <IconCheckbox />
            <FilledCheckbox />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
