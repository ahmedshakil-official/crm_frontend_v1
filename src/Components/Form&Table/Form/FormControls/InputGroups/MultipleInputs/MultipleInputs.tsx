import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FirstAndLastName, MultipleInputsTitle } from "@/Constant";
import { MultipleInputsSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from "reactstrap";

export const MultipleInputs = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={MultipleInputsTitle} span={MultipleInputsSubTitle} />
        <CardBody className="common-flex main-custom-form card-wrapper multiple-inputs">
          <InputGroup>
            <InputGroupText>{FirstAndLastName}</InputGroupText>
            <Input type="text" />
            <Input type="text" />
          </InputGroup>
          <InputGroup className="multi-input">
            <InputGroupText>{"$"}</InputGroupText>
            <InputGroupText>{"0.00"}</InputGroupText>
            <Input type="text" />
          </InputGroup>
          <InputGroup className="multi-input-2">
            <Input type="text" />
            <InputGroupText>{"$"}</InputGroupText>
            <InputGroupText>{"0.00"}</InputGroupText>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
