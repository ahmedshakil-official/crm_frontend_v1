import React from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

interface LoanDetailsFormTab2Props {
  formData: {
    property_valuation: number;
    loan_amount: number;
    estimated_value: number;
    ltv: string | null;
    term_years: number;
    term_months: number;
    interest_only_amount: null | string;
    outstanding_balance: null | string;
    current_monthly_payment: null | string;
    current_lender: string;
    original_purchase_price: string;
    date_of_purchase: string | null;
    advice_level: string;
  };
  handleFormChange: (name: string, value: any) => void;
}

const LoanDetailsFormTab2: React.FC<LoanDetailsFormTab2Props> = ({
  formData,
  handleFormChange,
}) => {
  return (
    <Form>
      <Row>
        <Col>
          <FormGroup>
            <Label for="property_valuation">Property Valuation*</Label>
            <Input
              type="number"
              name="property_valuation"
              required
              value={formData.property_valuation}
              onChange={(e) =>
                handleFormChange(e.target.name, Number(e.target.value))
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="loan_amount">Loan Amount*</Label>
            <Input
              type="number"
              name="loan_amount"
              required
              value={formData.loan_amount}
              onChange={(e) =>
                handleFormChange(e.target.name, Number(e.target.value))
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="estimated_value">Estimated Value*</Label>
            <Input
              type="number"
              name="estimated_value"
              required
              value={formData.estimated_value}
              onChange={(e) =>
                handleFormChange(e.target.name, Number(e.target.value))
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="ltv">LTV</Label>
            <Input
              type="text"
              name="ltv"
              value={formData.ltv}
              onChange={(e) => handleFormChange(e.target.name, e.target.value)}
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="term_years">Term (Years)</Label>
            <Input
              type="number"
              name="term_years"
              value={formData.term_years}
              onChange={(e) =>
                handleFormChange(e.target.name, Number(e.target.value))
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="term_months">Term (Months)</Label>
            <Input
              type="number"
              name="term_months"
              value={formData.term_months}
              onChange={(e) => handleFormChange(e.target.name, Number(e.target.value))}
            />
          </FormGroup>

          <FormGroup>
            <Label for="interest_only_amount">Interest Only Amount</Label>
            <Input
              type="text"
              name="interest_only_amount"
              value={formData.interest_only_amount}
              onChange={(e) => handleFormChange(e.target.name, e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="outstanding_balance">Outstanding Balance</Label>
            <Input
              type="text"
              name="outstanding_balance"
              value={formData.outstanding_balance}
              onChange={(e) => handleFormChange(e.target.name, e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default LoanDetailsFormTab2;
