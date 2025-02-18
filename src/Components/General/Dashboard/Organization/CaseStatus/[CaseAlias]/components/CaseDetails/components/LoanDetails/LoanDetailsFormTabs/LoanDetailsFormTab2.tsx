import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

const LoanDetailsFormTab2 = () => {
  const [formData, setFormData] = useState({
    property_valuation: "",
    loan_amount: "",
    estimated_value: "",
    ltv: "",
    term_years: "",
    term_months: "",
    interest_only_amount: "",
    outstanding_balance: "",
    current_monthly_payment: "",
    current_lender: "",
    original_purchase_price: "",
    date_of_purchase: "",
    advice_level: "",
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
            <Label for="property_valuation">Property Valuation</Label>
            <Input
              type="text"
              name="property_valuation"
              value={formData.property_valuation}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="loan_amount">Loan Amount</Label>
            <Input
              type="text"
              name="loan_amount"
              value={formData.loan_amount}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="estimated_value">Estimated Value</Label>
            <Input
              type="text"
              name="estimated_value"
              value={formData.estimated_value}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="ltv">LTV</Label>
            <Input
              type="text"
              name="ltv"
              value={formData.ltv}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="term_years">Term in Years</Label>
            <Input
              type="number"
              name="term_years"
              value={formData.term_years}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="term_months">Term in Months</Label>
            <Input
              type="number"
              name="term_months"
              value={formData.term_months}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="interest_only_amount">Interest Only Amount</Label>
            <Input
              type="number"
              name="interest_only_amount"
              value={formData.interest_only_amount}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="outstanding_balance">Outstanding Balance</Label>
            <Input
              type="text"
              name="outstanding_balance"
              value={formData.outstanding_balance}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="current_monthly_payment">Current Monthly Payment</Label>
            <Input
              type="text"
              name="current_monthly_payment"
              value={formData.current_monthly_payment}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="original_purchase_price">Original Purchase Price</Label>
            <Input
              type="text"
              name="original_purchase_price"
              value={formData.original_purchase_price}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="date_of_purchase">Date of Purchase</Label>
            <Input
              type="date"
              name="date_of_purchase"
              value={formData.date_of_purchase}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="current_lender">Current Lender</Label>
            <Input
              type="select"
              name="current_lender"
              value={formData.current_lender}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option>Unknown</option>
              <option>Accord Mortgages</option>
              <option>Ahli United Bank</option>
              <option>Al Rayan Bank</option>
              <option>Aldermore Mortgages</option>
              <option>Barclays</option>
              <option>HSBC</option>
              <option>NatWest</option>
              <option>Santander</option>
              <option>Virgin Money</option>
            </Input>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="advice_level">Advice Level</Label>
            <Input
              type="select"
              name="advice_level"
              value={formData.advice_level}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option>Advising</option>
              <option>Execution Only</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>

      <Button type="submit" color="primary">
        Submit
      </Button>
    </Form>
  );
};

export default LoanDetailsFormTab2;
