import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { InlineInputTypesTitle } from "@/Constant";
import { InlineInputTypesSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col, Row } from "reactstrap";
import { InlineCheckboxRadio } from "./InlineCheckboxRadio";
import { InlineSwitches } from "./InlineSwitches";

export const InlineInputTypes = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={InlineInputTypesTitle} span={InlineInputTypesSubTitle} />
        <CardBody>
          <Row className="g-3">
            <InlineCheckboxRadio />
            <InlineSwitches />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
