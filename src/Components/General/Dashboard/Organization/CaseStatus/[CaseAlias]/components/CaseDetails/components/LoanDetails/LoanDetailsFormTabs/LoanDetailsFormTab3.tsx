import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

const LoanDetailsFormTab3 = () => {
  const [formData, setFormData] = useState({
    dip_accept_date: "",
    dip_expiry_date: "",
    expected_completion_date: "",
    product_expiry_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="dip_accept_date">DIP Accept Date</Label>
            <Input
              type="date"
              name="dip_accept_date"
              value={formData.dip_accept_date}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="dip_expiry_date">DIP Expiry Date</Label>
            <Input
              type="date"
              name="dip_expiry_date"
              value={formData.dip_expiry_date}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="expected_completion_date">
              Expected Completion Date
            </Label>
            <Input
              type="date"
              name="expected_completion_date"
              value={formData.expected_completion_date}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="product_expiry_date">Product Expiry Date</Label>
            <Input
              type="date"
              name="product_expiry_date"
              value={formData.product_expiry_date}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>

      <Button type="submit" color="primary">
        Submit
      </Button>
    </Form>
  );
};

export default LoanDetailsFormTab3;
