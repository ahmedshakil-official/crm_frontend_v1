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

const DebtRepaymentTabContent: FC = () => {
  return (
    <div>
      <p className="fs-9">
        <small>
          Add debt repayments like credit card minimum payments here. Do not
          include regular credit card spending - that goes in living costs. Get
          your client's credit report to verify all debt payments.
        </small>
      </p>
      <section className="row">
        <div className="col-md-6">
          <h4 className="text-center mb-3">Current</h4>
          <div className="border rounded-3 shadow-sm">
            <div className="bg-light border-bottom p-3">
              <span className="fw-bold text-primary">Debt Repayments</span>
            </div>
            <div className="p-3">
              <Form>
                {/* Mortgage */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_Mortgage"
                    sm={6}
                  >
                    Mortgage/Rent - Monthly
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.Mortgage"
                        id="CurrentBudgetPlanner_Mortgage"
                        className="numeric-decimal debt-repayment"
                        placeholder="0.00"
                      />
                      <Button color="primary" id="CurrentMortgageCalculate">
                        Calculate
                      </Button>
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Second Mortgage */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_SecondMortgage"
                    sm={6}
                  >
                    Second Mortgage - Monthly
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.SecondMortgage"
                        id="CurrentBudgetPlanner_SecondMortgage"
                        className="numeric-decimal debt-repayment"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Shared Ownership Rental */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_SharedOwnershipRental"
                    sm={6}
                  >
                    Shared Ownership Rental - Monthly
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.SharedOwnershipRental"
                        id="CurrentBudgetPlanner_SharedOwnershipRental"
                        className="numeric-decimal debt-repayment"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
              </Form>
            </div>

            {/* Total Debt */}
            <div className="mt-2 p-3 bg-light border-top">
              <Row>
                <Col lg={12}>
                  <FormGroup row className="mb-0">
                    <Label
                      style={{ fontSize: "0.9rem" }}
                      for="CurrentBudgetPlanner_TotalDebt"
                      sm={6}
                      className="fw-bold text-primary"
                    >
                      Total Debt Repayments
                    </Label>
                    <Col sm={6}>
                      <InputGroup>
                        <InputGroupText>£</InputGroupText>
                        <Input
                          type="text"
                          name="CurrentBudgetPlanner.TotalDebt"
                          id="CurrentBudgetPlanner_TotalDebt"
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
              <span className="fw-bold text-primary">Debt Repayments</span>
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
                {/* Mortgage */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_Mortgage"
                    sm={6}
                  >
                    Mortgage/Rent - Monthly
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.Mortgage"
                        id="CurrentBudgetPlanner_Mortgage"
                        className="numeric-decimal debt-repayment"
                        placeholder="0.00"
                      />
                      <Button color="primary" id="CurrentMortgageCalculate">
                        Calculate
                      </Button>
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Second Mortgage */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_SecondMortgage"
                    sm={6}
                  >
                    Second Mortgage - Monthly
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.SecondMortgage"
                        id="CurrentBudgetPlanner_SecondMortgage"
                        className="numeric-decimal debt-repayment"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Shared Ownership Rental */}
                <FormGroup row>
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="CurrentBudgetPlanner_SharedOwnershipRental"
                    sm={6}
                  >
                    Shared Ownership Rental - Monthly
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="CurrentBudgetPlanner.SharedOwnershipRental"
                        id="CurrentBudgetPlanner_SharedOwnershipRental"
                        className="numeric-decimal debt-repayment"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
              </Form>
            </div>

            {/* Total Debt - Post Completion */}
            <div className="mt-2 p-3 bg-light border-top">
              <Row>
                <Col lg={12}>
                  <FormGroup row className="mb-0">
                    <Label
                      style={{ fontSize: "0.9rem" }}
                      for="PostCompletionsBudgetPlanner_TotalDebt"
                      sm={6}
                      className="fw-bold text-primary"
                    >
                      Total Debt Repayments
                    </Label>
                    <Col sm={6}>
                      <InputGroup>
                        <InputGroupText>£</InputGroupText>
                        <Input
                          type="text"
                          name="PostCompletionsBudgetPlanner.TotalDebt"
                          id="PostCompletionsBudgetPlanner_TotalDebt"
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
      </section>
    </div>
  );
};

export default DebtRepaymentTabContent;
