import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Cancel, Disabled, EmailAddress, ExampleMultipleSelect, ExampleSelect, ExampleTextarea, FlatStyleTitle, Password, Submit } from "@/Constant";
import { FlatStyleSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { FormEvent } from "react";
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import CommonSelectDropdown from "../Common/CommonSelectDropdown";

export const FlatStyle = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FlatStyleTitle} span={FlatStyleSubTitle} />
        <CardBody className="basic-form">
          <Form className="theme-form flat-form" onSubmit={handleSubmit}>
            <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="email">{EmailAddress}</Label>
                  <Input id="email" type="email" placeholder="name@example.com" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="pwd">{Password}</Label>
                  <Input className="mb-3" id="pwd" type="password" placeholder="Password" />
                  <Input id="pwdre" type="password" placeholder="Re Enter Password" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="disable">{Disabled}</Label>
                  <Input id="disable" type="text" disabled placeholder="Disabled" />
                </FormGroup>
              </Col>
            </Row>
            <Row><CommonSelectDropdown title={ExampleSelect} options={[...Array(5)]} /></Row>
            <Row><CommonSelectDropdown title={ExampleMultipleSelect} options={[...Array(5)]} multiple={true} /></Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="textarea">{ExampleTextarea}</Label>
                  <Input type="textarea" id="textarea" rows="3" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-end">
                  <Button color="primary" className="me-2 btn-square">{Submit}</Button>
                  <Button color="danger" className="btn-square">{Cancel}</Button>
                </div>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};
