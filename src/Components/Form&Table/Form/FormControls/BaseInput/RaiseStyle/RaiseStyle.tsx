import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Cancel, Disabled, EmailAddress, ExampleMultipleSelect, ExampleSelect, ExampleTextarea, Password, RaiseStyleTitle, Submit } from "@/Constant";
import { EdgesInputStyleSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { FormEvent } from "react";
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import CommonSelectDropdown from "../Common/CommonSelectDropdown";

export const RaiseStyle = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={RaiseStyleTitle} span={EdgesInputStyleSubTitle} />
        <CardBody className="custom-input">
          <Form className="theme-form raise-form" onSubmit={handleSubmit}>
            <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="raiseemail">{EmailAddress}</Label>
                  <Input id="raiseemail" type="email" placeholder="name@example.com" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="raisepwd">{Password}</Label>
                  <Input id="raisepwd" type="password" placeholder="Password" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="raisedisable">{Disabled}</Label>
                  <Input id="raisedisable" type="text" disabled placeholder="Disabled" />
                </FormGroup>
              </Col>
            </Row>
            <Row><CommonSelectDropdown title={ExampleSelect} options={[...Array(5)]} /></Row>
            <Row><CommonSelectDropdown title={ExampleMultipleSelect} options={[...Array(5)]} multiple={true} /></Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="raisetextarea">{ExampleTextarea}</Label>
                  <Input type="textarea" id="raisetextarea" rows="3" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-end">
                  <Button color="primary" className="btn-air-light me-2">{Submit}</Button>
                  <Button color="danger" className="btn-air-light">{Cancel}</Button>
                </div>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
}
