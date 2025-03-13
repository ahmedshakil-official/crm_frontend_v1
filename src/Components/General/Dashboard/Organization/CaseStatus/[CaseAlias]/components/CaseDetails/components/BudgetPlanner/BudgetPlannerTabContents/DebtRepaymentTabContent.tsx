import { FC } from "react";
import { Col, Row, Form, FormGroup, Label, Input, InputGroup, InputGroupText, Button } from "reactstrap";

const DebtRepaymentTabContent: FC = () => {
  const debtRepayments = ["Mortgage/Rent - Monthly", "Second Mortgage - Monthly", "Shared Ownership Rental - Monthly"];
  const priorityDebts = [
    "Mortgage Arrears - Monthly",
    "Gas Arrears - Monthly",
    "Maintenance Arrears - Monthly",
    "Defaults - Monthly",
    "CCJs - Monthly",
    "Debt Management Plans - Monthly",
    "Magistrate Court Fines - Monthly",
    "Council Tax Arrears - Monthly",
  ];
  const unsecuredBorrowings = [
    "Credit Cards - Monthly",
    "Loans - Monthly",
    "Car Finance - Monthly",
    "Overdraft - Monthly",
    "Store Cards - Monthly",
    "Student Loans - Monthly",
    "Other Borrowing - Monthly",
  ];

  const renderForm = (prefix: string, fields: string[], hasCalculate?: boolean) => (
    <Form>
      {fields.map((field, index) => (
        <FormGroup row key={field} className="mb-2">
          <Label 
            className="control-label" 
            for={`${prefix}_${field.replace(/[\s/-]/g, "")}`} 
            sm={6} 
            style={{ fontSize: "0.9rem" }}
          >
            {field}
            <span className="required" style={{ visibility: "hidden" }}>*</span>
          </Label>
          <Col sm={6}>
            <InputGroup>
              <InputGroupText>£</InputGroupText>
              <Input
                type="text"
                name={`${prefix}.${field.replace(/[\s/-]/g, "")}`}
                id={`${prefix}_${field.replace(/[\s/-]/g, "")}`}
                className="numeric-decimal debt-repayment"
                placeholder="0.00"
                data-val="true"
                data-val-number={`The field ${field} must be a number.`}
                data-val-range={`${field.split('-')[0].trim()} exceeds maximum length of 16 digits`}
                data-val-range-max="1E+16"
                data-val-range-min="-1E+15"
                defaultValue={fields === unsecuredBorrowings ? "0" : ""}
              />
              {hasCalculate && index === 0 && (
                <Button 
                  color="primary" 
                  id={`${prefix === "CurrentBudgetPlanner" ? "Current" : "PostCompletion"}${field.replace(/[\s/-]/g, "")}Calculate`}
                >
                  Calculate
                </Button>
              )}
            </InputGroup>
            <span
              className="field-validation-valid"
              data-valmsg-for={`${prefix}.${field.replace(/[\s/-]/g, "")}`}
              data-valmsg-replace="true"
            ></span>
          </Col>
        </FormGroup>
      ))}
    </Form>
  );

  const renderSection = (title: string, prefix: string, fields: string[], hasCalculate?: boolean, showCopyButton?: boolean) => (
    <div className="col-md-6">
      <h4 className="text-center mb-3">{title === "Total Debt Repayment" ? "" : title}</h4>
      <div className={`panel-default panel panel-primary border rounded-3 shadow-sm ${title === "Total Debt Repayment" ? "no-padding-vr no-border" : ""}`}>
        <div className={`bg-light border-bottom p-3 ${showCopyButton ? "d-flex justify-content-between align-items-center" : ""}`}>
          {title !== "Total Debt Repayment" && <span className="fw-bold text-primary">{title === "Debt Repayments" ? "Debt Repayments" : title === "Priority Debt" ? "Priority Debt" : "Unsecured Borrowing"}</span>}
          {showCopyButton && (
            <Button color="primary" size="sm" id={`${prefix}CopyFromCurrentButton`} className="copyFromCurrentButton">
              Copy from Current
            </Button>
          )}
        </div>
        <div className="p-3">
          {title === "Total Debt Repayment" ? (
            <div className="panel-default panel no-padding-vr no-border">
              <div className="panel-body no-padding-vr no-border">
                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for={`${prefix}_TotalDebtRepayment`}
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Total Debt Repayment - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>*</span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name={`${prefix}.TotalDebtRepayment`}
                        id={`${prefix}_TotalDebtRepayment`}
                        className="numeric-decimal fw-bold"
                        readOnly
                        placeholder="0.00"
                        data-val="true"
                        data-val-number="The field Total Debt Repayment - Monthly must be a number."
                        data-val-range="Total Debt Repayment exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for={`${prefix}.TotalDebtRepayment`}
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>
              </div>
            </div>
          ) : (
            renderForm(prefix, fields, hasCalculate)
          )}
        </div>
        {title === "Debt Repayments" && (
          <div className="p-3 bg-light border-top">
            <FormGroup row className="mb-0">
              <Label
                className="control-label fw-bold text-primary"
                for={`${prefix}_TotalDebt`}
                sm={6}
                style={{ fontSize: "0.9rem" }}
              >
                Total Debt Repayments
                <span className="required" style={{ visibility: "hidden" }}>*</span>
              </Label>
              <Col sm={6}>
                <InputGroup>
                  <InputGroupText>£</InputGroupText>
                  <Input
                    type="text"
                    name={`${prefix}.TotalDebt`}
                    id={`${prefix}_TotalDebt`}
                    className="numeric-decimal fw-bold"
                    readOnly
                    placeholder="0.00"
                    data-val="true"
                    data-val-number="The field Total Debt Repayments must be a number."
                    data-val-range="Total Debt Repayments exceeds maximum length of 16 digits"
                    data-val-range-max="1E+16"
                    data-val-range-min="-1E+15"
                  />
                </InputGroup>
                <span
                  className="field-validation-valid"
                  data-valmsg-for={`${prefix}.TotalDebt`}
                  data-valmsg-replace="true"
                ></span>
              </Col>
            </FormGroup>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <p className="fs-9">
        <small>Add debt repayments like credit card minimum payments here. Do not include regular credit card spending - that goes in living costs.</small>
      </p>
      <Row>
        {renderSection("Current", "CurrentBudgetPlanner", debtRepayments, true)}
        {renderSection("Post Completion", "PostCompletionBudgetPlanner", debtRepayments, true, true)}
      </Row>
      <Row className="mt-4">
        {renderSection("Priority Debt", "CurrentBudgetPlanner", priorityDebts)}
        {renderSection("Priority Debt", "PostCompletionBudgetPlanner", priorityDebts, false, true)}
      </Row>
      <Row className="mt-4">
        {renderSection("Unsecured Borrowing", "CurrentBudgetPlanner", unsecuredBorrowings, true)}
        {renderSection("Unsecured Borrowing", "PostCompletionBudgetPlanner", unsecuredBorrowings, true, true)}
      </Row>
      <Row className="mt-4">
        {renderSection("Total Debt Repayment", "CurrentBudgetPlanner", [])}
        {renderSection("Total Debt Repayment", "PostCompletionBudgetPlanner", [])}
      </Row>
    </div>
  );
};

export default DebtRepaymentTabContent;