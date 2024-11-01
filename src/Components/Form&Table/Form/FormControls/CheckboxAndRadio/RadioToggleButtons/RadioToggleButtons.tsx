import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Checked, Disabled, Radio, RadioToggleButtonsTitle } from "@/Constant";
import { RadioToggleButtonsSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col, Input, Label } from "reactstrap";

export const RadioToggleButtons = () => {
  return (
    <Col md="6" className="mb-lg-3">
      <Card>
        <CommonCardHeader title={RadioToggleButtonsTitle} span={RadioToggleButtonsSubTitle} />
        <CardBody className="common-flex main-radio-toggle">
          <Input className="btn-check radio-light-secondary" id="option1" type="radio" name="options" defaultChecked />
          <Label className="btn list-light-secondary" htmlFor="option1">
            {Checked}
          </Label>
          <Input className="btn-check radio-light-secondary" id="option2" type="radio" name="options" />
          <Label className="btn list-light-secondary" htmlFor="option2">
            {Radio}
          </Label>
          <Input className="btn-check radio-light-secondary" id="option3" type="radio" name="options" disabled />
          <Label className="btn list-light-secondary" htmlFor="option3">
            {Disabled}
          </Label>
          <Input className="btn-check radio-light-secondary" id="option4" type="radio" name="options" />
          <Label className="btn list-light-secondary" htmlFor="option4">
            {Radio}
          </Label>
        </CardBody>
      </Card>
    </Col>
  );
};
