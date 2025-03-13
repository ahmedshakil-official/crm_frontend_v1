import { FC } from "react";
import {
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupText,
  Button,
} from "reactstrap";

const MonthlyBudgetTabContents: FC = () => {
  const subtotalFields = [
    {
      label: "Total Income",
      id: "TotalIncome",
      inputId: "TotalIncomeSubTotal",
    },
    {
      label: "Total Debt Repayment - Monthly",
      id: "TotalDebtRepayment",
      inputId: "TotalDebtRepaymentSubTotal",
    },
    {
      label: "Total Living Expenses",
      id: "TotalHome",
      inputId: "TotalHomeSubTotal",
    },
  ];

  // Available Income field (separate due to different styling and placement)
  const availableIncomeField = {
    label: "Available Income",
    id: "AvailableIncome",
    inputId: "CurrentBudgetPlanner_AvailableIncome",
  };
  return (
    <div>
      <p>
        <small>
          A positive difference between Income and Outgoings is favorable, but
          verify all expenses are included. For negative differences, explore
          income maximization or expense reduction options.
        </small>
      </p>
      <section className="row mt-4">
        {/* Current Column */}
        <div className="col-md-6">
          <h4 className="text-center mb-3">Current</h4>
          <div className="border rounded-3 shadow-sm">
            <div className="bg-light border-bottom p-3">
              <span className="fw-bold text-primary">Sub-Totals</span>
            </div>
            <div className="p-3">
              {subtotalFields.map((field) => (
                <FormGroup row className="mb-2" key={field.id}>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for={`CurrentBudgetPlanner_${field.id}`}
                    sm={6}
                    className="control-label"
                  >
                    {field.label}
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name={`CurrentBudgetPlanner.${field.id}`}
                        id={field.inputId}
                        className="subtotal form-control fw-bold"
                        readOnly
                        placeholder="0.00"
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for={`CurrentBudgetPlanner.${field.id}`}
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>
              ))}
            </div>
            <div className="bg-light border-top p-3">
              <FormGroup row className="mb-0">
                <Label
                  style={{ fontSize: "0.9rem" }}
                  for={availableIncomeField.inputId}
                  sm={6}
                  className="control-label text-primary"
                >
                  {availableIncomeField.label}
                  <span className="required" style={{ visibility: "hidden" }}>
                    *
                  </span>
                </Label>
                <Col sm={6}>
                  <InputGroup>
                    <InputGroupText>£</InputGroupText>
                    <Input
                      type="text"
                      name={`CurrentBudgetPlanner.${availableIncomeField.id}`}
                      id={availableIncomeField.inputId}
                      className="availableIncome form-control fw-bold"
                      readOnly
                      placeholder="0.00"
                      data-val="true"
                      data-val-number="The field AvailableIncome must be a number."
                      data-val-range="Available Income exceeds maximum length of 16 digits"
                      data-val-range-max="1E+16"
                      data-val-range-min="-1E+15"
                    />
                  </InputGroup>
                  <span
                    className="field-validation-valid"
                    data-valmsg-for={`CurrentBudgetPlanner.${availableIncomeField.id}`}
                    data-valmsg-replace="true"
                  ></span>
                </Col>
              </FormGroup>
            </div>
          </div>
        </div>

        {/* Post Completion Column */}
        <div className="col-md-6">
          <h4 className="text-center mb-3">Post Completion</h4>
          <div className="border rounded-3 shadow-sm">
            <div className="bg-light border-bottom p-3 d-flex justify-content-between align-items-center">
              <span className="fw-bold text-primary">Sub-Totals</span>
              <Button
                color="primary"
                size="sm"
                id="copyFromCurrentButton"
                className="copyFromCurrentButton"
              >
                Copy from Current
              </Button>
            </div>
            <div className="p-3">
              {subtotalFields.map((field) => (
                <FormGroup row className="mb-2" key={field.id}>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for={`PostCompletionsBudgetPlanner_${field.id}`}
                    sm={6}
                    className="control-label"
                  >
                    {field.label}
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name={`PostCompletionsBudgetPlanner.${field.id}`}
                        id={`Post_${field.inputId}`}
                        className="subtotal form-control fw-bold"
                        readOnly
                        placeholder="0.00"
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for={`PostCompletionsBudgetPlanner.${field.id}`}
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>
              ))}
            </div>
            <div className="bg-light border-top p-3">
              <FormGroup row className="mb-0">
                <Label
                  style={{ fontSize: "0.9rem" }}
                  for={`PostCompletionsBudgetPlanner_${availableIncomeField.id}`}
                  sm={6}
                  className="control-label text-primary"
                >
                  {availableIncomeField.label}
                  <span className="required" style={{ visibility: "hidden" }}>
                    *
                  </span>
                </Label>
                <Col sm={6}>
                  <InputGroup>
                    <InputGroupText>£</InputGroupText>
                    <Input
                      type="text"
                      name={`PostCompletionsBudgetPlanner.${availableIncomeField.id}`}
                      id={`PostCompletionsBudgetPlanner_${availableIncomeField.id}`}
                      className="availableIncome form-control fw-bold"
                      readOnly
                      placeholder="0.00"
                      data-val="true"
                      data-val-number="The field AvailableIncome must be a number."
                      data-val-range="Available Income exceeds maximum length of 16 digits"
                      data-val-range-max="1E+16"
                      data-val-range-min="-1E+15"
                    />
                  </InputGroup>
                  <span
                    className="field-validation-valid"
                    data-valmsg-for={`PostCompletionsBudgetPlanner.${availableIncomeField.id}`}
                    data-valmsg-replace="true"
                  ></span>
                </Col>
              </FormGroup>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MonthlyBudgetTabContents;
