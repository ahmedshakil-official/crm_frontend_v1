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
  return (
    <div>
      <p className="fs-9">
        <small>
          List all monthly household income after tax and deductions, including
          regular and irregular sources.
        </small>
      </p>
      {/* Replace the section and its immediate children divs */}
      <section className="row g-4">
        <div className="col-md-6">
          <h4 className="text-center mb-3">Current</h4>
          <div className="border rounded-3 shadow-sm">
            <div className="bg-light border-bottom p-3">
              <span className="fw-bold text-primary">Income</span>
            </div>
            <div className="p-3">
              <Form>
                <FormGroup row className="mb-2">
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_Applicant1Salary"
                    sm={6}
                    className="text-sm fw-medium"
                  >
                    Applicant 1 Net Monthly Income
                  </Label>
                  <Col sm={6}>
                    <InputGroup size="sm">
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.Applicant1Salary"
                        id="CurrentBudgetPlanner_Applicant1Salary"
                        className="numeric-decimal living-expense"
                        placeholder="0.00"
                      />
                      <Button
                        color="primary"
                        id="Applicant1CurrentSalaryCalculate"
                      >
                        Calculate
                      </Button>
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Applicant 2 Net Monthly Income */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_Applicant2Salary"
                    sm={6}
                  >
                    Applicant 2 Net Monthly Income
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.Applicant2Salary"
                        id="CurrentBudgetPlanner_Applicant2Salary"
                        className="numeric-decimal living-expense"
                        placeholder="0.00"
                      />
                      <Button
                        color="primary"
                        id="Applicant2CurrentSalaryCalculate"
                      >
                        Calculate
                      </Button>
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Rental Income */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_RentalIncome"
                    sm={6}
                  >
                    Rental Income
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.RentalIncome"
                        id="CurrentBudgetPlanner_RentalIncome"
                        className="numeric-decimal living-expense"
                        placeholder="0.00"
                      />
                      <Button color="primary" id="CurrentRentalIncomeCalculate">
                        Calculate
                      </Button>
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Part Time Income */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_PartTimeIncome"
                    sm={6}
                  >
                    Part Time Income
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.PartTimeIncome"
                        id="CurrentBudgetPlanner_PartTimeIncome"
                        className="numeric-decimal living-expense"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Jobseeker's Allowance */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_JSA"
                    sm={6}
                  >
                    Jobseeker's Allowance
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.JSA"
                        id="CurrentBudgetPlanner_JSA"
                        className="numeric-decimal living-expense"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Child Benefit */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_ChildBenefit"
                    sm={6}
                  >
                    Child Benefit
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.ChildBenefit"
                        id="CurrentBudgetPlanner_ChildBenefit"
                        className="numeric-decimal living-expense"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Tax Credits */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_TaxCredits"
                    sm={6}
                  >
                    Tax Credits
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.TaxCredits"
                        id="CurrentBudgetPlanner_TaxCredits"
                        className="numeric-decimal living-expense"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Working Tax Credits */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_WorkingTaxCredits"
                    sm={6}
                  >
                    Working Tax Credits
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.WorkingTaxCredits"
                        id="CurrentBudgetPlanner_WorkingTaxCredits"
                        className="numeric-decimal living-expense"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Maintenance */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_Maintenance"
                    sm={6}
                  >
                    Maintenance
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.Maintenance"
                        id="CurrentBudgetPlanner_Maintenance"
                        className="numeric-decimal living-expense"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Pension */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_Pension"
                    sm={6}
                  >
                    Pension
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.Pension"
                        id="CurrentBudgetPlanner_Pension"
                        className="numeric-decimal living-expense"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Other Benefits */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_OtherBenefits"
                    sm={6}
                  >
                    Other Benefits
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.OtherBenefits"
                        id="CurrentBudgetPlanner_OtherBenefits"
                        className="numeric-decimal living-expense"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
              </Form>
            </div>

            {/* Total Income - Moved outside the form div */}
            <div className="mt-2 p-3 bg-light border-top">
              <Row>
                <Col lg={12}>
                  <FormGroup row className="mb-0">
                    <Label
                      style={{ fontSize: "0.9rem" }}
                      for="CurrentBudgetPlanner_TotalIncome"
                      sm={6}
                      className="fw-bold text-primary"
                    >
                      Total Income
                    </Label>
                    <Col sm={6}>
                      <InputGroup>
                        <InputGroupText>£</InputGroupText>
                        <Input
                          type="text"
                          name="CurrentBudgetPlanner.TotalIncome"
                          id="CurrentBudgetPlanner_TotalIncome"
                          className="numeric-decimal fw-bold"
                          readOnly
                          placeholder="0.00"
                        />
                      </InputGroup>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4 className="text-center mb-3">Post Completion</h4>
          <div className="border rounded-3 shadow-sm">
            <div className="bg-light border-bottom p-3 d-flex justify-content-between align-items-center">
              <span className="fw-bold text-primary">Income</span>
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
              <Form>
                {/* Applicant 1 Net Monthly Income */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="PostCompletionsBudgetPlanner_Applicant1Salary"
                    sm={6}
                  >
                    Applicant 1 Net Monthly Income
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="PostCompletionsBudgetPlanner.Applicant1Salary"
                        id="PostCompletionsBudgetPlanner_Applicant1Salary"
                        className="numeric-decimal living-expensePC"
                        placeholder="0.00"
                      />
                      <Button
                        color="primary"
                        id="Applicant1PostSalaryCalculate"
                      >
                        Calculate
                      </Button>
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Applicant 2 Net Monthly Income */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="PostCompletionsBudgetPlanner_Applicant2Salary"
                    sm={6}
                  >
                    Applicant 2 Net Monthly Income
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="PostCompletionsBudgetPlanner.Applicant2Salary"
                        id="PostCompletionsBudgetPlanner_Applicant2Salary"
                        className="numeric-decimal living-expensePC"
                        placeholder="0.00"
                      />
                      <Button
                        color="primary"
                        id="Applicant2PostSalaryCalculate"
                      >
                        Calculate
                      </Button>
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Rental Income */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="PostCompletionsBudgetPlanner_RentalIncome"
                    sm={6}
                  >
                    Rental Income
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="PostCompletionsBudgetPlanner.RentalIncome"
                        id="PostCompletionsBudgetPlanner_RentalIncome"
                        className="numeric-decimal living-expensePC"
                        placeholder="0.00"
                      />
                      <Button color="primary" id="PostRentalIncomeCalculate">
                        Calculate
                      </Button>
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Part Time Income */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="PostCompletionsBudgetPlanner_PartTimeIncome"
                    sm={6}
                  >
                    Part Time Income
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="PostCompletionsBudgetPlanner.PartTimeIncome"
                        id="PostCompletionsBudgetPlanner_PartTimeIncome"
                        className="numeric-decimal living-expensePC"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Jobseeker's Allowance */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="PostCompletionsBudgetPlanner_JSA"
                    sm={6}
                  >
                    Jobseeker's Allowance
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="PostCompletionsBudgetPlanner.JSA"
                        id="PostCompletionsBudgetPlanner_JSA"
                        className="numeric-decimal living-expensePC"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Child Benefit */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="PostCompletionsBudgetPlanner_ChildBenefit"
                    sm={6}
                  >
                    Child Benefit
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="PostCompletionsBudgetPlanner.ChildBenefit"
                        id="PostCompletionsBudgetPlanner_ChildBenefit"
                        className="numeric-decimal living-expensePC"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Tax Credits */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="PostCompletionsBudgetPlanner_TaxCredits"
                    sm={6}
                  >
                    Tax Credits
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="PostCompletionsBudgetPlanner.TaxCredits"
                        id="PostCompletionsBudgetPlanner_TaxCredits"
                        className="numeric-decimal living-expensePC"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Working Tax Credits */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="PostCompletionsBudgetPlanner_WorkingTaxCredits"
                    sm={6}
                  >
                    Working Tax Credits
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="PostCompletionsBudgetPlanner.WorkingTaxCredits"
                        id="PostCompletionsBudgetPlanner_WorkingTaxCredits"
                        className="numeric-decimal living-expensePC"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Maintenance */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="PostCompletionsBudgetPlanner_Maintenance"
                    sm={6}
                  >
                    Maintenance
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="PostCompletionsBudgetPlanner.Maintenance"
                        id="PostCompletionsBudgetPlanner_Maintenance"
                        className="numeric-decimal living-expensePC"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Pension */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="PostCompletionsBudgetPlanner_Pension"
                    sm={6}
                  >
                    Pension
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="PostCompletionsBudgetPlanner.Pension"
                        id="PostCompletionsBudgetPlanner_Pension"
                        className="numeric-decimal living-expensePC"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Other Benefits - Last form group in Post Completion */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="PostCompletionsBudgetPlanner_OtherBenefits"
                    sm={6}
                  >
                    Other Benefits
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="PostCompletionsBudgetPlanner.OtherBenefits"
                        id="PostCompletionsBudgetPlanner_OtherBenefits"
                        className="numeric-decimal living-expensePC"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
              </Form>
            </div>

            {/* Total Income - Moved outside the form div */}
            <div className="mt-2 p-3 bg-light border-top">
              <Row>
                <Col lg={12}>
                  <FormGroup row className="mb-0">
                    <Label
                      style={{ fontSize: "0.9rem" }}
                      for="PostCompletionsBudgetPlanner_TotalIncome"
                      sm={6}
                      className="fw-bold text-primary"
                    >
                      Total Income
                    </Label>
                    <Col sm={6}>
                      <InputGroup>
                        <InputGroupText>£</InputGroupText>
                        <Input
                          type="text"
                          name="PostCompletionsBudgetPlanner.TotalIncome"
                          id="PostCompletionsBudgetPlanner_TotalIncome"
                          className="numeric-decimal"
                          readOnly
                          placeholder="0.00"
                        />
                      </InputGroup>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HouseHoldIncomeTabContent;
