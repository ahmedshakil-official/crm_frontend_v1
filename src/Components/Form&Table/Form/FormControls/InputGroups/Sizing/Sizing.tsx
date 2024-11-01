import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DefaultInputText, LargeInput, SizingTitle, SmallInput } from "@/Constant";
import { SizingSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from "reactstrap";

export const Sizing = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={SizingTitle} span={SizingSubTitle} />
        <CardBody className="card-wrapper input-group-wrapper">
          <InputGroup size="sm">
            <InputGroupText> {SmallInput} </InputGroupText>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <InputGroupText> {DefaultInputText} </InputGroupText>
            <Input type="text" />
          </InputGroup>
          <InputGroup size="lg">
            <InputGroupText> {LargeInput} </InputGroupText>
            <Input type="text" />
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
