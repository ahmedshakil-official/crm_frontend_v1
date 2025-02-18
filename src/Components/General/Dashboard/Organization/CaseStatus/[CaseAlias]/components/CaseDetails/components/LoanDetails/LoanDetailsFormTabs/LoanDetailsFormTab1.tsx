import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const LoanDetailsFormTab1 = () => {
  const [formData, setFormData] = useState({
    application_type: "",
    lenders_reference: "",
    mortgage_type: "",
    loan_purpose: "",
    borrower_type: "",
    interest_rate_type: "",
    product_term: "",
    lender: "",
    repayment_method: "",
    repayment_vehicle: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          {/* First Column */}
          <Col md={6}>
            <FormGroup>
              <Label>Application Type</Label>
              <Input
                type="select"
                name="application_type"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="BUSINESS_LOAN">Business Loan</option>
                <option value="BUY_TO_LET">Buy to Let Mortgage</option>
                <option value="COMMERCIAL_MORTGAGE">Commercial Mortgage</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Mortgage Type</Label>
              <Input type="select" name="mortgage_type" onChange={handleChange}>
                <option value="">Select</option>
                <option value="PURCHASE">Purchase</option>
                <option value="REMORTGAGE">Remortgage</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Loan Purpose</Label>
              <Input type="select" name="loan_purpose" onChange={handleChange}>
                <option value="">Select</option>
                <option value="PURCHASE">Purchase</option>
                <option value="DEBT_CONSOLIDATION">Debt Consolidation</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Borrower Type</Label>
              <Input type="select" name="borrower_type" onChange={handleChange}>
                <option value="">Select</option>
                <option value="HOMEMOVER">Homemover</option>
                <option value="FIRST_TIME_BUYER">First Time Buyer</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Interest Rate Type</Label>
              <Input
                type="select"
                name="interest_rate_type"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="FIXED">Fixed</option>
                <option value="VARIABLE">Variable</option>
              </Input>
            </FormGroup>
          </Col>

          {/* Second Column */}
          <Col md={6}>
            <FormGroup>
              <Label>Product Term</Label>
              <Input type="select" name="product_term" onChange={handleChange}>
                <option value="">Select</option>
                <option value="ONE_YEAR">1 Year</option>
                <option value="TWO_YEARS">2 Years</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Lender</Label>
              <Input type="select" name="lender" onChange={handleChange}>
                <option value="">Select</option>
                <option value="BARCLAYS">Barclays</option>
                <option value="HSBC">HSBC</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Repayment Method</Label>
              <Input
                type="select"
                name="repayment_method"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="CAPITAL_AND_INTEREST">
                  Capital and Interest
                </option>
                <option value="INTEREST_ONLY">Interest Only</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Repayment Vehicle</Label>
              <Input
                type="select"
                name="repayment_vehicle"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="ENDOWMENT">Endowment</option>
                <option value="PENSION">Pension</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Lenders Reference</Label>
              <Input
                type="text"
                name="lenders_reference"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoanDetailsFormTab1;
