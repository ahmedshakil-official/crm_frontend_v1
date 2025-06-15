import { LoanDetailsFormTab2Props } from "@/Types/CommonComponents/SingleCaseInfo/CaseDetails/LoanDetailsTypes";
import LenderList from "@/utils/LenderList";
import React from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const LoanDetailsFormTab2: React.FC<LoanDetailsFormTab2Props> = ({
  formData,
  handleFormChange,
}) => {
  return (
    <Form>
      <Row>
        <Col md={6}>
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
        </Col>
        <Col md={6}>
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
        </Col>
        <Col md={6}>
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
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="ltv">LTV</Label>
            <Input
              type="number"
              name="ltv"
              value={formData.ltv || ""}
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
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="term_months">Term (Months)</Label>
            <Input
              type="number"
              name="term_months"
              value={formData.term_months}
              onChange={(e) =>
                handleFormChange(e.target.name, Number(e.target.value))
              }
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="interest_only_amount">Interest Only Amount</Label>
            <Input
              type="number"
              name="interest_only_amount"
              value={formData.interest_only_amount || ""}
              onChange={(e) => handleFormChange(e.target.name, e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="outstanding_balance">Outstanding Balance</Label>
            <Input
              type="number"
              name="outstanding_balance"
              value={formData.outstanding_balance || ""}
              onChange={(e) => handleFormChange(e.target.name, e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="current_monthly_payment">Current Monthly Payment</Label>
            <Input
              type="number"
              name="current_monthly_payment"
              value={formData.current_monthly_payment || ""}
              onChange={(e) => handleFormChange(e.target.name, e.target.value)}
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
              onChange={(e) => handleFormChange(e.target.name, e.target.value)}
            >
              <option value="">Select...</option>
              <option value="UNKNOWN">Unknown</option>
              {LenderList.map((lender) => (
                <option key={lender.value} value={lender.label}>
                  {lender.label}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="date_of_purchase">Date Of Purchase</Label>
            <Input
              type="number"
              name="date_of_purchase"
              value={formData.date_of_purchase || ""}
              onChange={(e) => handleFormChange(e.target.name, e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="advice_level">Outstanding Balance</Label>
            <Input
              type="select"
              name="advice_level"
              value={formData.advice_level}
              onChange={(e) => handleFormChange(e.target.name, e.target.value)}
            >
              <option value="">Select...</option>
              <option value="ADVISING">Advising</option>
              <option value="EXECUTION_ONLY">Execution Only</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default LoanDetailsFormTab2;
