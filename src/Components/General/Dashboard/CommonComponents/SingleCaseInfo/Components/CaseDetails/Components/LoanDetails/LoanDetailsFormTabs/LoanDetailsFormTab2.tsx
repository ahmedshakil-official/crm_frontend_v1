import { LoanDetailsFormTab2Props } from "@/Types/CommonComponents/SingleCaseInfo/CaseDetails/LoanDetailsTypes";
import LenderList from "@/utils/LenderList";
import React, { useEffect } from "react";
import { Col, Form, FormGroup, FormText, Input, Label, Row } from "reactstrap";

const LoanDetailsFormTab2: React.FC<LoanDetailsFormTab2Props> = ({
  formData,
  handleFormChange,
}) => {
  const calculateLTV = (): string => {
    if (
      formData.loan_amount &&
      formData.property_valuation > 0 || formData.purchase_price>0 &&
      formData.loan_amount <= formData.property_valuation
    ) {
      const ltv = (formData.loan_amount / formData.estimated_value) * 100;
      return Math.min(ltv, 100).toFixed(2); // Cap LTV at 100%
    }
    return "";
  };

  // Update LTV whenever relevant fields change
  useEffect(() => {
    const calculatedLTV = calculateLTV();
    if (calculatedLTV !== "" && calculatedLTV !== formData.ltv) {
      handleFormChange("ltv", calculatedLTV);
    }
  }, [
    formData.property_valuation,
    formData.purchase_price,
    formData.estimated_value,
    formData.loan_amount,
  ]);

  return (
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="property_valuation">
              {formData.mortgage_type === "PURCHASE"
                ? "Purchase Price(£)*"
                : "Property Valuation(£)*"}
            </Label>
            <Input
              type="number"
              name={
                formData.mortgage_type === "PURCHASE"
                  ? "property_valuation"
                  : "purchase_price"
              }
              placeholder="0"
              required
              min="0"
              value={
                formData.mortgage_type === "PURCHASE"
                  ? formData.property_valuation || ""
                  : formData.purchase_price || ""
              }
              onChange={(e) =>
                handleFormChange(e.target.name, Number(e.target.value))
              }
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="loan_amount">Loan Amount(£)*</Label>
            <Input
              type="number"
              name="loan_amount"
              placeholder="0"
              required
              min="0"
              value={formData.loan_amount || ""}
              onChange={(e) =>
                handleFormChange(e.target.name, Number(e.target.value))
              }
            />
            <FormText className=" text-danger">
              {calculateLTV() === ""
                ? `Loan Amount can not be more than the ${formData.mortgage_type === "PURCHASE"
                  ? "Purchase Price"
                  : "Property Valuation"
              }*`
                : ""}
            </FormText>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="estimated_value">Estimated Value(£)*</Label>
            <Input
              type="number"
              name="estimated_value"
              placeholder="0"
              required
              min="0"
              value={formData.estimated_value || ""}
              onChange={(e) =>
                handleFormChange(e.target.name, Number(e.target.value))
              }
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="ltv">LTV(%)</Label>
            <Input
              type="text"
              name="ltv"
              placeholder="0.00"
              value={calculateLTV()}
              readOnly
            />
            <FormText>Calculated automatically</FormText>
          </FormGroup>
        </Col>
        <Col md={6}>
          <Label for="term_years">Term*</Label>
          <Row>
            <Col md="6">
              <FormGroup>
                <Input
                  type="number"
                  name="term_years"
                  placeholder="0"
                  required
                  min="0"
                  value={formData.term_years || ""}
                  onChange={(e) =>
                    handleFormChange(e.target.name, Number(e.target.value))
                  }
                />
                <FormText>*In years</FormText>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  type="number"
                  name="term_months"
                  placeholder="0"
                  required
                  min="0"
                  max="11"
                  value={formData.term_months || ""}
                  onChange={(e) =>
                    handleFormChange(e.target.name, Number(e.target.value))
                  }
                />
                <FormText>*In months (0-11)</FormText>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="interest_only_amount">Interest Only Amount</Label>
            <Input
              type="number"
              name="interest_only_amount"
              placeholder="0.00"
              min="0"
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
              min="0"
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
              min="0"
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
              type="date"
              name="date_of_purchase"
              value={formData.date_of_purchase || ""}
              onChange={(e) => handleFormChange(e.target.name, e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="advice_level">Advice Level</Label>
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
