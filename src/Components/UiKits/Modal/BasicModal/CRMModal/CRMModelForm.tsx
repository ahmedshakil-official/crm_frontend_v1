import React from "react";
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";

export const CRMModelForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      };
      return (
        <Form className="needs-validation" onSubmit={handleSubmit}>
          <Row className="g-3">
            <Col md="6">
              <Label htmlFor="validationCustom01">{"First name"}</Label>
              <Input id="validationCustom01" type="text" placeholder="Enter your name" required={true} />
              <FormFeedback valid>{"Looks good!"}</FormFeedback>
            </Col>
            <Col md="6">
              <Label htmlFor="validationCustom02">{"Last name"}</Label>
              <Input id="validationCustom02" type="text" placeholder="Enter your surname" required={true} />
              <FormFeedback valid>{"Looks good!"}</FormFeedback>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Email address"}</Label>
                <Input id="exampleFormControlInput1" type="email" placeholder="crm@gmail.com" />
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup check>
                <Input id="flexCheckDefault" type="checkbox" />
                <Label htmlFor="flexCheckDefault" check>
                  {"You accept our Terms and Privacy Policy by clicking Submit below."}
                </Label>
              </FormGroup>
              <Button color="primary">{"Sign Up"}</Button>
            </Col>
          </Row>
        </Form>
      );
}
