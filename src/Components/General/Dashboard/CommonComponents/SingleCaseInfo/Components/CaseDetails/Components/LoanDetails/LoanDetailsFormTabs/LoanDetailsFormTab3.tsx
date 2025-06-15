import { LoanDetailsFormTab3Props } from "@/Types/CommonComponents/SingleCaseInfo/CaseDetails/LoanDetailsTypes";
import React from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const LoanDetailsFormTab3: React.FC<LoanDetailsFormTab3Props> = ({
  formData,
  handleFormChange,
}) => {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="dip_accept_date">DIP Accept Date</Label>
            <Input
              type="date"
              name="dip_accept_date"
              value={formData.dip_accept_date || ""}
              onChange={(e) => handleFormChange(e.target.name, e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="dip_expiry_date">DIP Expiry Date</Label>
            <Input
              type="date"
              name="dip_expiry_date"
              value={formData.dip_expiry_date || ""}
              onChange={(e) => handleFormChange(e.target.name, e.target.value)}
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
              value={formData.expected_completion_date || ""}
              onChange={(e) => handleFormChange(e.target.name, e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="product_expiry_date">Product Expiry Date</Label>
            <Input
              type="date"
              name="product_expiry_date"
              value={formData.product_expiry_date || ""}
              onChange={(e) => handleFormChange(e.target.name, e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default LoanDetailsFormTab3;
