import { FC } from "react";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupText,
  Button,
} from "reactstrap";

const HouseHoldIncomeTabContent: FC = () => {
  const incomeFields = [
    "Applicant 1 Net Monthly Income",
    "Applicant 2 Net Monthly Income",
    "Rental Income",
    "Part Time Income",
    "Jobseeker's Allowance",
    "Child Benefit",
    "Tax Credits",
    "Working Tax Credits",
    "Maintenance",
    "Pension",
    "Other Benefits",
  ];

  const renderForm = (
    prefix: string,
    className: string,
    hasCalculate?: boolean
  ) => (
    <Form>
      {incomeFields.map((field, index) => (
        <FormGroup row key={field}>
          <Label
            for={`${prefix}_${field.replace(/\s/g, "")}`}
            sm={6}
            style={{ fontSize: "0.9rem" }}
          >
            {field}
          </Label>
          <Col sm={6}>
            <InputGroup>
              <InputGroupText>£</InputGroupText>
              <Input
                type="number"
                name={`${prefix}.${field.replace(/\s/g, "")}`}
                id={`${prefix}_${field.replace(/\s/g, "")}`}
                className={`numeric-decimal ${className}`}
                placeholder="0.00"
                step="0.01"
              />
              {hasCalculate && index < 3 && (
                <Button
                  color="primary"
                  id={`${field.replace(/\s/g, "")}${
                    prefix === "CurrentBudgetPlanner" ? "Current" : "Post"
                  }Calculate`}
                >
                  Calculate
                </Button>
              )}
            </InputGroup>
          </Col>
        </FormGroup>
      ))}
    </Form>
  );

  return (
    <div>
      <p className="fs-9">
        <small>
          List all monthly household income after tax and deductions.
        </small>
      </p>
      <Row className="g-4">
        <Col md={6}>
          <h4 className="text-center mb-3">Current</h4>
          <div className="border rounded-3 shadow-sm">
            <div className="bg-light border-bottom p-3">
              <span className="fw-bold text-primary">Income</span>
            </div>
            <div className="p-3">
              {renderForm("CurrentBudgetPlanner", "living-expense", true)}
            </div>
            <div className="p-3 bg-light border-top">
              <FormGroup row>
                <Label
                  for="CurrentBudgetPlanner_TotalIncome"
                  sm={6}
                  className="fw-bold text-primary"
                  style={{ fontSize: "0.9rem" }}
                >
                  Total Income
                </Label>
                <Col sm={6}>
                  <InputGroup>
                    <InputGroupText>£</InputGroupText>
                    <Input
                      type="number"
                      name="CurrentBudgetPlanner.TotalIncome"
                      id="CurrentBudgetPlanner_TotalIncome"
                      className="numeric-decimal fw-bold"
                      readOnly
                      placeholder="0.00"
                      step="0.01"
                    />
                  </InputGroup>
                </Col>
              </FormGroup>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h4 className="text-center mb-3">Post Completion</h4>
          <div className="border rounded-3 shadow-sm">
            <div className="bg-light border-bottom p-3 d-flex justify-content-between">
              <span className="fw-bold text-primary">Income</span>
              <Button color="primary" size="sm" id="copyFromCurrentButton">
                Copy from Current
              </Button>
            </div>
            <div className="p-3">
              {renderForm(
                "PostCompletionsBudgetPlanner",
                "living-expensePC",
                true
              )}
            </div>
            <div className="p-3 bg-light border-top">
              <FormGroup row>
                <Label
                  for="PostCompletionsBudgetPlanner_TotalIncome"
                  sm={6}
                  className="fw-bold text-primary"
                  style={{ fontSize: "0.9rem" }}
                >
                  Total Income
                </Label>
                <Col sm={6}>
                  <InputGroup>
                    <InputGroupText>£</InputGroupText>
                    <Input
                      type="number"
                      name="PostCompletionsBudgetPlanner.TotalIncome"
                      id="PostCompletionsBudgetPlanner_TotalIncome"
                      className="numeric-decimal"
                      readOnly
                      placeholder="0.00"
                      step="0.01"
                    />
                  </InputGroup>
                </Col>
              </FormGroup>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HouseHoldIncomeTabContent;
