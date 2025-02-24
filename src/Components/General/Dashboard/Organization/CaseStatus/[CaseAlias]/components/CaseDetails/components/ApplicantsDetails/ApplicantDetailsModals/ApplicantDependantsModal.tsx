import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

const DependantForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date_of_birth: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  interface FormData {
    name: string;
    date_of_birth: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <Container className="m-2 p-4 border rounded shadow-sm">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name" className="small">
            Name
          </Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </FormGroup>

        <FormGroup>
          <Label for="date_of_birth" className="small">
            Date of Birth
          </Label>
          <Input
            type="date"
            name="date_of_birth"
            id="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
          />
        </FormGroup>

        <Row className="justify-content-end">
          <Col xs="auto">
            <Button color="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default DependantForm;
