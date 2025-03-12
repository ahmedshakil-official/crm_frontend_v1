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

      {/* Debt Repayments Section */}
      <section className="row">
        <div className="col-md-6">
          <h4 className="text-center mb-3">Current</h4>
          <div className="border rounded-3 shadow-sm">
            <div className="bg-light border-bottom p-3">
              <span className="fw-bold text-primary">Debt Repayments</span>
            </div>
            <div className="p-3">
              <Form>
                <FormGroup row className="mb-2">
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

                <FormGroup row className="mb-2">
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

                <FormGroup row className="mb-2">
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
                <FormGroup row className="mb-2">
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="PostCompletionBudgetPlanner_Mortgage"
                    sm={6}
                  >
                    Mortgage/Rent - Monthly
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="PostCompletionBudgetPlanner.Mortgage"
                        id="PostCompletionBudgetPlanner_Mortgage"
                        className="numeric-decimal debt-repayment"
                        placeholder="0.00"
                      />
                      <Button
                        color="primary"
                        id="PostCompletionMortgageCalculate"
                      >
                        Calculate
                      </Button>
                    </InputGroup>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="PostCompletionBudgetPlanner_SecondMortgage"
                    sm={6}
                  >
                    Second Mortgage - Monthly
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="PostCompletionBudgetPlanner.SecondMortgage"
                        id="PostCompletionBudgetPlanner_SecondMortgage"
                        className="numeric-decimal debt-repayment"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    style={{ fontSize: "0.9rem" }}
                    for="PostCompletionBudgetPlanner_SharedOwnershipRental"
                    sm={6}
                  >
                    Shared Ownership Rental - Monthly
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        name="PostCompletionBudgetPlanner.SharedOwnershipRental"
                        id="PostCompletionBudgetPlanner_SharedOwnershipRental"
                        className="numeric-decimal debt-repayment"
                        placeholder="0.00"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
              </Form>
            </div>

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

      {/* Priority Debt Section */}
      <section className="row mt-4">
        <div className="col-md-6">
          <h4 className="text-center mb-3">Current</h4>
          <div className="panel-default panel panel-primary border rounded-3 shadow-sm">
            <div className="panel-heading bg-light border-bottom p-3">
              <span className="panel-title fw-bold text-primary">
                Priority Debt
              </span>
            </div>
            <div className="p-3">
              <Form>
                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="CurrentBudgetPlanner_MortgageArrears"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Mortgage Arrears - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="CurrentBudgetPlanner_MortgageArrears"
                        name="CurrentBudgetPlanner.MortgageArrears"
                        data-val="true"
                        data-val-number="The field Mortgage Arrears - Monthly must be a number."
                        data-val-range="Mortgage Arrears exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue=""
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="CurrentBudgetPlanner.MortgageArrears"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="CurrentBudgetPlanner_GasArrears"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Gas Arrears - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="CurrentBudgetPlanner_GasArrears"
                        name="CurrentBudgetPlanner.GasArrears"
                        data-val="true"
                        data-val-number="The field Gas Arrears - Monthly must be a number."
                        data-val-range="Gas Arrears exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue=""
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="CurrentBudgetPlanner.GasArrears"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="CurrentBudgetPlanner_MaintenanceArrears"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Maintenance Arrears - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="CurrentBudgetPlanner_MaintenanceArrears"
                        name="CurrentBudgetPlanner.MaintenanceArrears"
                        data-val="true"
                        data-val-number="The field Maintenance Arrears - Monthly must be a number."
                        data-val-range="Maintenance Arrears exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue=""
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="CurrentBudgetPlanner.MaintenanceArrears"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="CurrentBudgetPlanner_Defaults"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Defaults - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="CurrentBudgetPlanner_Defaults"
                        name="CurrentBudgetPlanner.Defaults"
                        data-val="true"
                        data-val-number="The field Defaults - Monthly must be a number."
                        data-val-range="Defaults exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue=""
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="CurrentBudgetPlanner.Defaults"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="CurrentBudgetPlanner_CCJs"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    CCJs - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="CurrentBudgetPlanner_CCJs"
                        name="CurrentBudgetPlanner.CCJs"
                        data-val="true"
                        data-val-number="The field CCJs - Monthly must be a number."
                        data-val-range="CCJs exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue=""
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="CurrentBudgetPlanner.CCJs"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="CurrentBudgetPlanner_DebtManagementPlans"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Debt Management Plans - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="CurrentBudgetPlanner_DebtManagementPlans"
                        name="CurrentBudgetPlanner.DebtManagementPlans"
                        data-val="true"
                        data-val-number="The field Debt Management Plans - Monthly must be a number."
                        data-val-range="Debt Management Plans exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue=""
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="CurrentBudgetPlanner.DebtManagementPlans"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="CurrentBudgetPlanner_MagistrateCourtFines"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Magistrate Court Fines - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="CurrentBudgetPlanner_MagistrateCourtFines"
                        name="CurrentBudgetPlanner.MagistrateCourtFines"
                        data-val="true"
                        data-val-number="The field Magistrate Court Fines - Monthly must be a number."
                        data-val-range="Magistrate Court Fines exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue=""
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="CurrentBudgetPlanner.MagistrateCourtFines"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="CurrentBudgetPlanner_CouncilTaxArrears"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Council Tax Arrears - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="CurrentBudgetPlanner_CouncilTaxArrears"
                        name="CurrentBudgetPlanner.CouncilTaxArrears"
                        data-val="true"
                        data-val-number="The field Council Tax Arrears - Monthly must be a number."
                        data-val-range="Council Tax Arrears exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue=""
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="CurrentBudgetPlanner.CouncilTaxArrears"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h4 className="text-center mb-3">Post Completion</h4>
          <div className="panel-default panel panel-primary border rounded-3 shadow-sm">
            <div className="panel-heading bg-light border-bottom p-3 d-flex justify-content-between align-items-center">
              <span className="panel-title fw-bold text-primary">
                Priority Debt
              </span>
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
                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="PostCompletionBudgetPlanner_MortgageArrears"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Mortgage Arrears - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="PostCompletionBudgetPlanner_MortgageArrears"
                        name="PostCompletionBudgetPlanner.MortgageArrears"
                        data-val="true"
                        data-val-number="The field Mortgage Arrears - Monthly must be a number."
                        data-val-range="Mortgage Arrears exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue=""
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="PostCompletionBudgetPlanner.MortgageArrears"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="PostCompletionBudgetPlanner_GasArrears"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Gas Arrears - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="PostCompletionBudgetPlanner_GasArrears"
                        name="PostCompletionBudgetPlanner.GasArrears"
                        data-val="true"
                        data-val-number="The field Gas Arrears - Monthly must be a number."
                        data-val-range="Gas Arrears exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue=""
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="PostCompletionBudgetPlanner.GasArrears"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="PostCompletionBudgetPlanner_MaintenanceArrears"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Maintenance Arrears - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="PostCompletionBudgetPlanner_MaintenanceArrears"
                        name="PostCompletionBudgetPlanner.MaintenanceArrears"
                        data-val="true"
                        data-val-number="The field Maintenance Arrears - Monthly must be a number."
                        data-val-range="Maintenance Arrears exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue=""
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="PostCompletionBudgetPlanner.MaintenanceArrears"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="PostCompletionBudgetPlanner_Defaults"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Defaults - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="PostCompletionBudgetPlanner_Defaults"
                        name="PostCompletionBudgetPlanner.Defaults"
                        data-val="true"
                        data-val-number="The field Defaults - Monthly must be a number."
                        data-val-range="Defaults exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue=""
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="PostCompletionBudgetPlanner.Defaults"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="PostCompletionBudgetPlanner_CCJs"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    CCJs - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="PostCompletionBudgetPlanner_CCJs"
                        name="PostCompletionBudgetPlanner.CCJs"
                        data-val="true"
                        data-val-number="The field CCJs - Monthly must be a number."
                        data-val-range="CCJs exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue=""
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="PostCompletionBudgetPlanner.CCJs"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="PostCompletionBudgetPlanner_DebtManagementPlans"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Debt Management Plans - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="PostCompletionBudgetPlanner_DebtManagementPlans"
                        name="PostCompletionBudgetPlanner.DebtManagementPlans"
                        data-val="true"
                        data-val-number="The field Debt Management Plans - Monthly must be a number."
                        data-val-range="Debt Management Plans exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue=""
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="PostCompletionBudgetPlanner.DebtManagementPlans"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="PostCompletionBudgetPlanner_MagistrateCourtFines"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Magistrate Court Fines - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="PostCompletionBudgetPlanner_MagistrateCourtFines"
                        name="PostCompletionBudgetPlanner.MagistrateCourtFines"
                        data-val="true"
                        data-val-number="The field Magistrate Court Fines - Monthly must be a number."
                        data-val-range="Magistrate Court Fines exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue=""
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="PostCompletionBudgetPlanner.MagistrateCourtFines"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="PostCompletionBudgetPlanner_CouncilTaxArrears"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Council Tax Arrears - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="PostCompletionBudgetPlanner_CouncilTaxArrears"
                        name="PostCompletionBudgetPlanner.CouncilTaxArrears"
                        data-val="true"
                        data-val-number="The field Council Tax Arrears - Monthly must be a number."
                        data-val-range="Council Tax Arrears exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue=""
                      />
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="PostCompletionBudgetPlanner.CouncilTaxArrears"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Unsecured Borrowing Section */}
      <section className="row mt-4">
        <div className="col-md-6">
          <h4 className="text-center mb-3">Current</h4>
          <div className="panel-default panel panel-primary border rounded-3 shadow-sm">
            <div className="panel-heading bg-light border-bottom p-3">
              <span className="panel-title fw-bold text-primary">
                Unsecured Borrowing
              </span>
            </div>
            <div className="p-3">
              <Form>
                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="CurrentBudgetPlanner_CreditCards"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Credit Cards - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="CurrentBudgetPlanner_CreditCards"
                        name="CurrentBudgetPlanner.CreditCards"
                        data-val="true"
                        data-val-number="The field Credit Cards - Monthly must be a number."
                        data-val-range="Credit Cards exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue="0"
                      />
                      <Button color="primary" id="CurrentCreditCardsCalculate">
                        Calculate
                      </Button>
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="CurrentBudgetPlanner.CreditCards"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="CurrentBudgetPlanner_Loans"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Loans - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="CurrentBudgetPlanner_Loans"
                        name="CurrentBudgetPlanner.Loans"
                        data-val="true"
                        data-val-number="The field Loans - Monthly must be a number."
                        data-val-range="Loans exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue="0"
                      />
                      <Button color="primary" id="CurrentLoansCalculate">
                        Calculate
                      </Button>
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="CurrentBudgetPlanner.Loans"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="CurrentBudgetPlanner_CarFinance"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Car Finance - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="CurrentBudgetPlanner_CarFinance"
                        name="CurrentBudgetPlanner.CarFinance"
                        data-val="true"
                        data-val-number="The field Car Finance - Monthly must be a number."
                        data-val-range="Car Finance exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue="0"
                      />
                      <Button color="primary" id="CurrentCarFinanceCalculate">
                        Calculate
                      </Button>
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="CurrentBudgetPlanner.CarFinance"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="CurrentBudgetPlanner_Overdraft"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Overdraft - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="CurrentBudgetPlanner_Overdraft"
                        name="CurrentBudgetPlanner.Overdraft"
                        data-val="true"
                        data-val-number="The field Overdraft - Monthly must be a number."
                        data-val-range="Overdraft exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue="0"
                      />
                      <Button color="primary" id="CurrentOverdraftCalculate">
                        Calculate
                      </Button>
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="CurrentBudgetPlanner.Overdraft"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="CurrentBudgetPlanner_StoreCards"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Store Cards - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="CurrentBudgetPlanner_StoreCards"
                        name="CurrentBudgetPlanner.StoreCards"
                        data-val="true"
                        data-val-number="The field Store Cards - Monthly must be a number."
                        data-val-range="Store Cards exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue="0"
                      />
                      <Button color="primary" id="CurrentStoreCardsCalculate">
                        Calculate
                      </Button>
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="CurrentBudgetPlanner.StoreCards"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="CurrentBudgetPlanner_StudentLoans"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Student Loans - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="CurrentBudgetPlanner_StudentLoans"
                        name="CurrentBudgetPlanner.StudentLoans"
                        data-val="true"
                        data-val-number="The field Student Loans - Monthly must be a number."
                        data-val-range="Student Loans exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue="0"
                      />
                      <Button color="primary" id="CurrentStudentLoansCalculate">
                        Calculate
                      </Button>
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="CurrentBudgetPlanner.StudentLoans"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="CurrentBudgetPlanner_OtherBorrowing"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Other Borrowing - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="CurrentBudgetPlanner_OtherBorrowing"
                        name="CurrentBudgetPlanner.OtherBorrowing"
                        data-val="true"
                        data-val-number="The field Other Borrowing - Monthly must be a number."
                        data-val-range="Other Borrowing exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue="0"
                      />
                      <Button
                        color="primary"
                        id="CurrentOtherBorrowingCalculate"
                      >
                        Calculate
                      </Button>
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="CurrentBudgetPlanner.OtherBorrowing"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h4 className="text-center mb-3">Post Completion</h4>
          <div className="panel-default panel panel-primary border rounded-3 shadow-sm">
            <div className="panel-heading bg-light border-bottom p-3 d-flex justify-content-between align-items-center">
              <span className="panel-title fw-bold text-primary">
                Unsecured Borrowing
              </span>
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
                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="PostCompletionBudgetPlanner_CreditCards"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Credit Cards - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="PostCompletionBudgetPlanner_CreditCards"
                        name="PostCompletionBudgetPlanner.CreditCards"
                        data-val="true"
                        data-val-number="The field Credit Cards - Monthly must be a number."
                        data-val-range="Credit Cards exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue="0"
                      />
                      <Button
                        color="primary"
                        id="PostCompletionCreditCardsCalculate"
                      >
                        Calculate
                      </Button>
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="PostCompletionBudgetPlanner.CreditCards"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="PostCompletionBudgetPlanner_Loans"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Loans - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="PostCompletionBudgetPlanner_Loans"
                        name="PostCompletionBudgetPlanner.Loans"
                        data-val="true"
                        data-val-number="The field Loans - Monthly must be a number."
                        data-val-range="Loans exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue="0"
                      />
                      <Button color="primary" id="PostCompletionLoansCalculate">
                        Calculate
                      </Button>
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="PostCompletionBudgetPlanner.Loans"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="PostCompletionBudgetPlanner_CarFinance"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Car Finance - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="PostCompletionBudgetPlanner_CarFinance"
                        name="PostCompletionBudgetPlanner.CarFinance"
                        data-val="true"
                        data-val-number="The field Car Finance - Monthly must be a number."
                        data-val-range="Car Finance exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue="0"
                      />
                      <Button
                        color="primary"
                        id="PostCompletionCarFinanceCalculate"
                      >
                        Calculate
                      </Button>
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="PostCompletionBudgetPlanner.CarFinance"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="PostCompletionBudgetPlanner_Overdraft"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Overdraft - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="PostCompletionBudgetPlanner_Overdraft"
                        name="PostCompletionBudgetPlanner.Overdraft"
                        data-val="true"
                        data-val-number="The field Overdraft - Monthly must be a number."
                        data-val-range="Overdraft exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue="0"
                      />
                      <Button
                        color="primary"
                        id="PostCompletionOverdraftCalculate"
                      >
                        Calculate
                      </Button>
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="PostCompletionBudgetPlanner.Overdraft"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="PostCompletionBudgetPlanner_StoreCards"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Store Cards - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="PostCompletionBudgetPlanner_StoreCards"
                        name="PostCompletionBudgetPlanner.StoreCards"
                        data-val="true"
                        data-val-number="The field Store Cards - Monthly must be a number."
                        data-val-range="Store Cards exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue="0"
                      />
                      <Button
                        color="primary"
                        id="PostCompletionStoreCardsCalculate"
                      >
                        Calculate
                      </Button>
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="PostCompletionBudgetPlanner.StoreCards"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="PostCompletionBudgetPlanner_StudentLoans"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Student Loans - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="PostCompletionBudgetPlanner_StudentLoans"
                        name="PostCompletionBudgetPlanner.StudentLoans"
                        data-val="true"
                        data-val-number="The field Student Loans - Monthly must be a number."
                        data-val-range="Student Loans exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue="0"
                      />
                      <Button
                        color="primary"
                        id="PostCompletionStudentLoansCalculate"
                      >
                        Calculate
                      </Button>
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="PostCompletionBudgetPlanner.StudentLoans"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>

                <FormGroup row className="mb-2">
                  <Label
                    className="control-label"
                    for="PostCompletionBudgetPlanner_OtherBorrowing"
                    sm={6}
                    style={{ fontSize: "0.9rem" }}
                  >
                    Other Borrowing - Monthly
                    <span className="required" style={{ visibility: "hidden" }}>
                      *
                    </span>
                  </Label>
                  <Col sm={6}>
                    <InputGroup>
                      <InputGroupText>£</InputGroupText>
                      <Input
                        type="text"
                        className="numeric-decimal debt-repayment"
                        id="PostCompletionBudgetPlanner_OtherBorrowing"
                        name="PostCompletionBudgetPlanner.OtherBorrowing"
                        data-val="true"
                        data-val-number="The field Other Borrowing - Monthly must be a number."
                        data-val-range="Other Borrowing exceeds maximum length of 16 digits"
                        data-val-range-max="1E+16"
                        data-val-range-min="-1E+15"
                        defaultValue="0"
                      />
                      <Button
                        color="primary"
                        id="PostCompletionOtherBorrowingCalculate"
                      >
                        Calculate
                      </Button>
                    </InputGroup>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="PostCompletionBudgetPlanner.OtherBorrowing"
                      data-valmsg-replace="true"
                    ></span>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Total Debt Repayment Section */}
      <section className="row mt-4">
        <div className="col-md-6">
          <div className="panel-default panel no-padding-vr no-border">
            <div className="panel-body no-padding-vr no-border">
              <FormGroup row className="mb-2">
                <Label
                  className="control-label"
                  for="CurrentBudgetPlanner_TotalDebtRepayment"
                  sm={6}
                  style={{ fontSize: "0.9rem" }}
                >
                  Total Debt Repayment - Monthly
                  <span className="required" style={{ visibility: "hidden" }}>
                    *
                  </span>
                </Label>
                <Col sm={6}>
                  <InputGroup>
                    <InputGroupText>£</InputGroupText>
                    <Input
                      type="text"
                      className="numeric-decimal fw-bold"
                      id="CurrentBudgetPlanner_TotalDebtRepayment"
                      name="CurrentBudgetPlanner.TotalDebtRepayment"
                      readOnly
                      data-val="true"
                      data-val-number="The field Total Debt Repayment - Monthly must be a number."
                      data-val-range="Total Debt Repayment exceeds maximum length of 16 digits"
                      data-val-range-max="1E+16"
                      data-val-range-min="-1E+15"
                      placeholder="0.00"
                    />
                  </InputGroup>
                  <span
                    className="field-validation-valid"
                    data-valmsg-for="CurrentBudgetPlanner.TotalDebtRepayment"
                    data-valmsg-replace="true"
                  ></span>
                </Col>
              </FormGroup>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="panel-default panel no-padding-vr no-border">
            <div className="panel-body no-padding-vr no-border">
              <FormGroup row className="mb-2">
                <Label
                  className="control-label"
                  for="PostCompletionBudgetPlanner_TotalDebtRepayment"
                  sm={6}
                  style={{ fontSize: "0.9rem" }}
                >
                  Total Debt Repayment - Monthly
                  <span className="required" style={{ visibility: "hidden" }}>
                    *
                  </span>
                </Label>
                <Col sm={6}>
                  <InputGroup>
                    <InputGroupText>£</InputGroupText>
                    <Input
                      type="text"
                      className="numeric-decimal fw-bold"
                      id="PostCompletionBudgetPlanner_TotalDebtRepayment"
                      name="PostCompletionBudgetPlanner.TotalDebtRepayment"
                      readOnly
                      data-val="true"
                      data-val-number="The field Total Debt Repayment - Monthly must be a number."
                      data-val-range="Total Debt Repayment exceeds maximum length of 16 digits"
                      data-val-range-max="1E+16"
                      data-val-range-min="-1E+15"
                      placeholder="0.00"
                    />
                  </InputGroup>
                  <span
                    className="field-validation-valid"
                    data-valmsg-for="PostCompletionBudgetPlanner.TotalDebtRepayment"
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

export default DebtRepaymentTabContent;
