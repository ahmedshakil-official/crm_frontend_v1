import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BorderRights, EmailAddress, EmailAddressPlaceHolders } from "@/Constant";
import { BorderRightData } from "@/Data/BonusUi/CreativeCard";
import { Card, CardBody, Col, Form, Input, Label } from "reactstrap";

const BorderRight = () => {
const BorderRightText1: string = "Us Technology offers web & mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them. .";

  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader headClass="border-r-secondary" title={BorderRights} span={BorderRightData} />
        <CardBody>
          <p>{BorderRightText1}</p>
          <Form>
            <Label>{EmailAddress}</Label>
            <Input type="email" placeholder={EmailAddressPlaceHolders} />
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderRight;
