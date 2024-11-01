import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CheckboxesAndRadiosTitle } from "@/Constant";
import { CheckBoxesAndRadiosSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from "reactstrap";

export const CheckboxesAndRadios = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={CheckboxesAndRadiosTitle} span={CheckBoxesAndRadiosSubTitle} />
        <CardBody className="checkbox-checked card-wrapper input-group-wrapper checkbox-radios">
          <InputGroup>
            <InputGroupText>
              <Input className="mt-0" type="checkbox" />
            </InputGroupText>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <InputGroupText>
              <Input className="mt-0" type="radio" defaultChecked />
            </InputGroupText>
            <Input type="text" />
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
