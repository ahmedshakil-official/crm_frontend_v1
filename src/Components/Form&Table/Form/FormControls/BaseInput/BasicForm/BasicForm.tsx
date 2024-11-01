import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicFormTitle, EmailAddress, ExampleTextarea } from "@/Constant";
import { BasicFormSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

export const BasicForm = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={BasicFormTitle} span={BasicFormSubTitle} />
        <CardBody className="basic-form">
          <div className="card-wrapper border rounded-3">
            <Form>
              <Row>
                <FormGroup>
                  <Label>{EmailAddress}</Label>
                  <Input type="email" placeholder="name@example.com" />
                </FormGroup>
                <div>
                  <Label>{ExampleTextarea}</Label>
                  <Input type="textarea" rows={3} />
                </div>
              </Row>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
