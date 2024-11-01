import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Cancel, Disabled, EdgesStyleTitle, EmailAddress, ExampleMultipleSelect, ExampleSelect, ExampleTextarea, Password, Submit } from "@/Constant";
import { EdgesInputStyleSubTitle } from "@/Data/Form&Table/Form/FormControls";
import { FormEvent } from "react";
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import CommonSelectDropdown from "../Common/CommonSelectDropdown";

export const EdgesStyle = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={EdgesStyleTitle} span={EdgesInputStyleSubTitle} />
        <CardBody className="custom-input">
          <Form className="theme-form edges-form" onSubmit={handleSubmit}>
            <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="edgesmail">{EmailAddress}</Label>
                  <Input id="edgesmail" type="email" placeholder="name@example.com" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="edgespwd">{Password}</Label>
                  <Input className="btn-pill" id="edgespwd" type="password" placeholder="Password" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="edgesdisable">{Disabled}</Label>
                  <Input id="edgesdisable" type="text" disabled placeholder="Disabled" />
                </FormGroup>
              </Col>
            </Row>
            <Row><CommonSelectDropdown title={ExampleSelect} options={[...Array(5)]} /></Row>
            <Row><CommonSelectDropdown title={ExampleMultipleSelect} options={[...Array(5)]} multiple={true} /></Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label htmlFor="edgestextarea">{ExampleTextarea}</Label>
                  <Input type="textarea" id="edgestextarea" rows="3" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-end">
                  <Button color="primary" className="me-2">{Submit}</Button>
                  <Button color="danger">{Cancel}</Button>
                </div>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};
