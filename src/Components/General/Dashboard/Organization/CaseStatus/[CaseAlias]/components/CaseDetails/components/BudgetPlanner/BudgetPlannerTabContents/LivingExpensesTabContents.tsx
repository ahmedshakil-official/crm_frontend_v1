import { FC, useState } from "react";
import { FaEdit } from "react-icons/fa";
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

const LivingExpensesTabContents: FC = () => {
  // State to manage visibility of notes sections
  const [visibleNotes, setVisibleNotes] = useState<{ [key: string]: boolean }>(
    {}
  );

  // Function to toggle notes visibility
  const toggleNotes = (event: React.MouseEvent, noteId: string) => {
    event.preventDefault();
    setVisibleNotes((prev) => ({
      ...prev,
      [noteId]: !prev[noteId],
    }));
  };

  // List of fields for reusability
  const livingCostFields = [
    { label: "Electricity", id: "Electricity" },
    { label: "Gas", id: "Gas" },
    { label: "Water", id: "Water" },
    { label: "Landline/Mobile Phones", id: "Phone" },
    { label: "TV Licence", id: "TVLicence" },
    { label: "Council Tax", id: "CouncilTax" },
    {
      label: "Ground Rent & Service Charges",
      id: "GroundRentServiceCharges",
      hasCalculate: true,
    },
    { label: "Buildings & Contents", id: "BuildingsContentsInsurance" },
    { label: "Mortgage Payment Protection", id: "MortgagePaymentProtection" },
    { label: "Endowment", id: "Endowment" },
    { label: "Pension Contribution", id: "PensionContribution" },
    { label: "Childcare", id: "Childcare" },
    { label: "Maintenance", id: "OutgoingMaintenance" },
    { label: "Food", id: "Food" },
    { label: "Car Maintenance", id: "CarMaintenance" },
    { label: "Fuel", id: "Fuel" },
    { label: "Public Transport", id: "PublicTransport" },
    { label: "TV Broadband", id: "TVBroadband" },
    { label: "Recreation/Holidays", id: "Hobbies" },
    { label: "Clothing", id: "Clothing" },
    { label: "Medical Expenses", id: "MedicalExpenses" },
    { label: "Education", id: "Education" },
    { label: "Other Living Costs", id: "OtherLivingCosts" },
  ];

  // List of fields for reusability
  const insuranceFields = [
    { label: "Motor Insurance", id: "MotorInsurance" },
    { label: "Health Insurance", id: "HealthInsurance" },
    { label: "Payment Protection", id: "PaymentProtection" },
    { label: "Life Insurance", id: "LifeInsurance" },
    { label: "Dental Insurance", id: "DentalInsurance" },
    { label: "Other Insurance", id: "OtherInsurance" },
  ];
  return (
    <div>
      <p>
        <small>
          Please enter all the household monthly living costs, make sure you
          don't under estimate or it will be difficult to keep to the budget. If
          your bills or living costs are not monthly you will need to convert
          them into a monthly expense. Multiply weekly amounts by 4.3 Divide
          quarterly amounts by 3 Divide annual amounts by 12.
        </small>
      </p>
      <section className="row">
        {/* Current Column */}
        <div className="col-md-6">
          <h4 className="text-center mb-3">Current</h4>
          <div className="border rounded-3 shadow-sm">
            <div className="bg-light border-bottom p-3">
              <span className="fw-bold text-primary">Living Costs</span>
            </div>
            <div className="p-3">
              <Form>
                {livingCostFields.map((field) => (
                  <div key={field.id}>
                    <FormGroup row className="mb-2">
                      <Label
                        style={{ fontSize: "0.9rem" }}
                        for={`CurrentBudgetPlanner_${field.id}`}
                        sm={6}
                      >
                        {field.label}
                        <span
                          className="required"
                          style={{ visibility: "hidden" }}
                        >
                          *
                        </span>
                      </Label>
                      <Col sm={6}>
                        <InputGroup>
                          <InputGroupText>£</InputGroupText>
                          <Input
                            type="text"
                            name={`CurrentBudgetPlanner.${field.id}`}
                            id={`CurrentBudgetPlanner_${field.id}`}
                            className="numeric-decimal living-cost"
                            placeholder="0.00"
                            data-val="true"
                            data-val-number={`The field ${field.label} must be a number.`}
                            data-val-range={`${field.label} exceeds maximum length of 16 digits`}
                            data-val-range-max="1E+16"
                            data-val-range-min="-1E+15"
                          />
                          {field.hasCalculate && (
                            <Button
                              color="primary"
                              id={`Current${field.id}Calculate`}
                            >
                              Calculate
                            </Button>
                          )}
                          <InputGroupText
                            className="penNoteIcon_Holder"
                            onClick={(e) => toggleNotes(e, `${field.id}_Notes`)}
                            style={{ cursor: "pointer" }}
                          >
                            <FaEdit />
                          </InputGroupText>
                        </InputGroup>
                        <span
                          className="field-validation-valid"
                          data-valmsg-for={`CurrentBudgetPlanner.${field.id}`}
                          data-valmsg-replace="true"
                        ></span>
                      </Col>
                    </FormGroup>
                    <FormGroup
                      className={`${field.id}_Notes_Holder mb-2`}
                      style={{
                        display: visibleNotes[`${field.id}_Notes`]
                          ? "block"
                          : "none",
                      }}
                    >
                      <Label
                        style={{ fontSize: "0.9rem" }}
                        for={`CurrentBudgetPlanner_${field.id}_Notes`}
                      >
                        Notes
                        <span
                          className="required"
                          style={{ visibility: "hidden" }}
                        >
                          *
                        </span>
                      </Label>
                      <Input
                        type="textarea"
                        name={`CurrentBudgetPlanner.${field.id}_Notes`}
                        id={`CurrentBudgetPlanner_${field.id}_Notes`}
                        className="textAreaRestrictions form-control"
                      />
                      <span
                        className="field-validation-valid"
                        data-valmsg-for={`CurrentBudgetPlanner.${field.id}_Notes`}
                        data-valmsg-replace="true"
                      ></span>
                    </FormGroup>
                  </div>
                ))}
              </Form>
            </div>
          </div>
        </div>

        {/* Post Completion Column */}
        <div className="col-md-6">
          <h4 className="text-center mb-3">Post Completion</h4>
          <div className="border rounded-3 shadow-sm">
            <div className="bg-light border-bottom p-3 d-flex justify-content-between align-items-center">
              <span className="fw-bold text-primary">Living Costs</span>
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
                {livingCostFields.map((field) => (
                  <div key={field.id}>
                    <FormGroup row className="mb-2">
                      <Label
                        style={{ fontSize: "0.9rem" }}
                        for={`PostCompletionBudgetPlanner_${field.id}`}
                        sm={6}
                      >
                        {field.label}
                        <span
                          className="required"
                          style={{ visibility: "hidden" }}
                        >
                          *
                        </span>
                      </Label>
                      <Col sm={6}>
                        <InputGroup>
                          <InputGroupText>£</InputGroupText>
                          <Input
                            type="text"
                            name={`PostCompletionBudgetPlanner.${field.id}`}
                            id={`PostCompletionBudgetPlanner_${field.id}`}
                            className="numeric-decimal living-cost"
                            placeholder="0.00"
                            data-val="true"
                            data-val-number={`The field ${field.label} must be a number.`}
                            data-val-range={`${field.label} exceeds maximum length of 16 digits`}
                            data-val-range-max="1E+16"
                            data-val-range-min="-1E+15"
                          />
                          {field.hasCalculate && (
                            <Button
                              color="primary"
                              id={`PostCompletion${field.id}Calculate`}
                            >
                              Calculate
                            </Button>
                          )}
                          <InputGroupText
                            className="penNoteIcon_Holder"
                            onClick={(e) =>
                              toggleNotes(e, `Post_${field.id}_Notes`)
                            }
                            style={{ cursor: "pointer" }}
                          >
                            <FaEdit />
                          </InputGroupText>
                        </InputGroup>
                        <span
                          className="field-validation-valid"
                          data-valmsg-for={`PostCompletionBudgetPlanner.${field.id}`}
                          data-valmsg-replace="true"
                        ></span>
                      </Col>
                    </FormGroup>
                    <FormGroup
                      className={`${field.id}_Notes_Holder mb-2`}
                      style={{
                        display: visibleNotes[`Post_${field.id}_Notes`]
                          ? "block"
                          : "none",
                      }}
                    >
                      <Label
                        style={{ fontSize: "0.9rem" }}
                        for={`PostCompletionBudgetPlanner_${field.id}_Notes`}
                      >
                        Notes
                        <span
                          className="required"
                          style={{ visibility: "hidden" }}
                        >
                          *
                        </span>
                      </Label>
                      <Input
                        type="textarea"
                        name={`PostCompletionBudgetPlanner.${field.id}_Notes`}
                        id={`PostCompletionBudgetPlanner_${field.id}_Notes`}
                        className="textAreaRestrictions form-control"
                      />
                      <span
                        className="field-validation-valid"
                        data-valmsg-for={`PostCompletionBudgetPlanner.${field.id}_Notes`}
                        data-valmsg-replace="true"
                      ></span>
                    </FormGroup>
                  </div>
                ))}
              </Form>
            </div>
          </div>
        </div>
      </section>
      <section className="row mt-4">
        {/* Current Column */}
        <div className="col-md-6">
          <h4 className="text-center mb-3">Current</h4>
          <div className="border rounded-3 shadow-sm">
            <div className="bg-light border-bottom p-3">
              <span className="fw-bold text-primary">Insurances</span>
            </div>
            <div className="p-3">
              <Form>
                {insuranceFields.map((field) => (
                  <div key={field.id}>
                    <FormGroup row className="mb-2">
                      <Label
                        style={{ fontSize: "0.9rem" }}
                        for={`CurrentBudgetPlanner_${field.id}`}
                        sm={6}
                      >
                        {field.label}
                        <span
                          className="required"
                          style={{ visibility: "hidden" }}
                        >
                          *
                        </span>
                      </Label>
                      <Col sm={6}>
                        <InputGroup>
                          <InputGroupText>£</InputGroupText>
                          <Input
                            type="text"
                            name={`CurrentBudgetPlanner.${field.id}`}
                            id={`CurrentBudgetPlanner_${field.id}`}
                            className="numeric-decimal living-cost"
                            placeholder="0.00"
                            data-val="true"
                            data-val-number={`The field ${field.label} must be a number.`}
                            data-val-range={`${field.label} exceeds maximum length of 16 digits`}
                            data-val-range-max="1E+16"
                            data-val-range-min="-1E+15"
                          />
                          <InputGroupText
                            className="penNoteIcon_Holder"
                            onClick={(e) => toggleNotes(e, `${field.id}_Notes`)}
                            style={{ cursor: "pointer" }}
                          >
                            <FaEdit />
                          </InputGroupText>
                        </InputGroup>
                        <span
                          className="field-validation-valid"
                          data-valmsg-for={`CurrentBudgetPlanner.${field.id}`}
                          data-valmsg-replace="true"
                        ></span>
                      </Col>
                    </FormGroup>
                    <FormGroup
                      className={`${field.id}_Notes_Holder mb-2`}
                      style={{
                        display: visibleNotes[`${field.id}_Notes`]
                          ? "block"
                          : "none",
                      }}
                    >
                      <Label
                        style={{ fontSize: "0.9rem" }}
                        for={`CurrentBudgetPlanner_${field.id}_Notes`}
                      >
                        Notes
                        <span
                          className="required"
                          style={{ visibility: "hidden" }}
                        >
                          *
                        </span>
                      </Label>
                      <Input
                        type="textarea"
                        name={`CurrentBudgetPlanner.${field.id}_Notes`}
                        id={`CurrentBudgetPlanner_${field.id}_Notes`}
                        className="textAreaRestrictions form-control"
                      />
                      <span
                        className="field-validation-valid"
                        data-valmsg-for={`CurrentBudgetPlanner.${field.id}_Notes`}
                        data-valmsg-replace="true"
                      ></span>
                    </FormGroup>
                  </div>
                ))}
              </Form>
            </div>
          </div>
        </div>

        {/* Post Completion Column */}
        <div className="col-md-6">
          <h4 className="text-center mb-3">Post Completion</h4>
          <div className="border rounded-3 shadow-sm">
            <div className="bg-light border-bottom p-3 d-flex justify-content-between align-items-center">
              <span className="fw-bold text-primary">Insurances</span>
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
                {insuranceFields.map((field) => (
                  <div key={field.id}>
                    <FormGroup row className="mb-2">
                      <Label
                        style={{ fontSize: "0.9rem" }}
                        for={`PostCompletionBudgetPlanner_${field.id}`}
                        sm={6}
                      >
                        {field.label}
                        <span
                          className="required"
                          style={{ visibility: "hidden" }}
                        >
                          *
                        </span>
                      </Label>
                      <Col sm={6}>
                        <InputGroup>
                          <InputGroupText>£</InputGroupText>
                          <Input
                            type="text"
                            name={`PostCompletionBudgetPlanner.${field.id}`}
                            id={`PostCompletionBudgetPlanner_${field.id}`}
                            className="numeric-decimal living-cost"
                            placeholder="0.00"
                            data-val="true"
                            data-val-number={`The field ${field.label} must be a number.`}
                            data-val-range={`${field.label} exceeds maximum length of 16 digits`}
                            data-val-range-max="1E+16"
                            data-val-range-min="-1E+15"
                          />
                          <InputGroupText
                            className="penNoteIcon_Holder"
                            onClick={(e) =>
                              toggleNotes(e, `Post_${field.id}_Notes`)
                            }
                            style={{ cursor: "pointer" }}
                          >
                            <FaEdit />
                          </InputGroupText>
                        </InputGroup>
                        <span
                          className="field-validation-valid"
                          data-valmsg-for={`PostCompletionBudgetPlanner.${field.id}`}
                          data-valmsg-replace="true"
                        ></span>
                      </Col>
                    </FormGroup>
                    <FormGroup
                      className={`${field.id}_Notes_Holder mb-2`}
                      style={{
                        display: visibleNotes[`Post_${field.id}_Notes`]
                          ? "block"
                          : "none",
                      }}
                    >
                      <Label
                        style={{ fontSize: "0.9rem" }}
                        for={`PostCompletionBudgetPlanner_${field.id}_Notes`}
                      >
                        Notes
                        <span
                          className="required"
                          style={{ visibility: "hidden" }}
                        >
                          *
                        </span>
                      </Label>
                      <Input
                        type="textarea"
                        name={`PostCompletionBudgetPlanner.${field.id}_Notes`}
                        id={`PostCompletionBudgetPlanner_${field.id}_Notes`}
                        className="textAreaRestrictions form-control"
                      />
                      <span
                        className="field-validation-valid"
                        data-valmsg-for={`PostCompletionBudgetPlanner.${field.id}_Notes`}
                        data-valmsg-replace="true"
                      ></span>
                    </FormGroup>
                  </div>
                ))}
              </Form>
            </div>
          </div>
        </div>
      </section>
      <section className="row mt-4">
        {/* Current Column */}
        <div className="col-md-6">
          <div className="panel-body no-padding-vr no-border">
            <FormGroup row className="mb-2">
              <Label
                style={{ fontSize: "0.9rem" }}
                for="CurrentBudgetPlanner_TotalHome"
                sm={6}
                className="control-label"
              >
                Total Living Expenses
                <span className="required" style={{ visibility: "hidden" }}>
                  *
                </span>
              </Label>
              <Col sm={6}>
                <InputGroup>
                  <InputGroupText>£</InputGroupText>
                  <Input
                    type="text"
                    name="CurrentBudgetPlanner.TotalHome"
                    id="CurrentBudgetPlanner_TotalHome"
                    className="form-control numeric-decimal fw-bold"
                    readOnly
                    placeholder="0.00"
                    data-val="true"
                    data-val-number="The field Total Living Expenses must be a number."
                    data-val-range="Total Living Expenses exceeds maximum length of 16 digits"
                    data-val-range-max="1E+16"
                    data-val-range-min="-1E+15"
                  />
                  <InputGroupText
                    className="penNoteIcon_Holder"
                    onClick={(e) => toggleNotes(e, "TotalHome_Notes")}
                    style={{ cursor: "pointer" }}
                  >
                    <FaEdit />
                  </InputGroupText>
                </InputGroup>
                <span
                  className="field-validation-valid"
                  data-valmsg-for="CurrentBudgetPlanner.TotalHome"
                  data-valmsg-replace="true"
                ></span>
              </Col>
            </FormGroup>
            <FormGroup
              className="TotalHome_Notes_Holder mb-2"
              style={{
                display: visibleNotes["TotalHome_Notes"] ? "block" : "none",
              }}
            >
              <Label
                style={{ fontSize: "0.9rem" }}
                for="CurrentBudgetPlanner_TotalHome_Notes"
                className="control-label"
              >
                Notes
                <span className="required" style={{ visibility: "hidden" }}>
                  *
                </span>
              </Label>
              <Input
                type="textarea"
                name="CurrentBudgetPlanner.TotalHome_Notes"
                id="CurrentBudgetPlanner_TotalHome_Notes"
                className="textAreaRestrictions form-control"
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="CurrentBudgetPlanner.TotalHome_Notes"
                data-valmsg-replace="true"
              ></span>
            </FormGroup>
          </div>
        </div>

        {/* Post Completion Column */}
        <div className="col-md-6">
          <div className="panel-body no-padding-vr no-border">
            <FormGroup row className="mb-2">
              <Label
                style={{ fontSize: "0.9rem" }}
                for="PostCompletionsBudgetPlanner_TotalHome"
                sm={6}
                className="control-label"
              >
                Total Living Expenses
                <span className="required" style={{ visibility: "hidden" }}>
                  *
                </span>
              </Label>
              <Col sm={6}>
                <InputGroup>
                  <InputGroupText>£</InputGroupText>
                  <Input
                    type="text"
                    name="PostCompletionsBudgetPlanner.TotalHome"
                    id="PostCompletionsBudgetPlanner_TotalHome"
                    className="form-control numeric-decimal fw-bold"
                    readOnly
                    placeholder="0.00"
                    data-val="true"
                    data-val-number="The field Total Living Expenses must be a number."
                    data-val-range="Total Living Expenses exceeds maximum length of 16 digits"
                    data-val-range-max="1E+16"
                    data-val-range-min="-1E+15"
                  />
                  <InputGroupText
                    className="penNoteIcon_Holder"
                    onClick={(e) => toggleNotes(e, "Post_TotalHome_Notes")}
                    style={{ cursor: "pointer" }}
                  >
                    <FaEdit />
                  </InputGroupText>
                </InputGroup>
                <span
                  className="field-validation-valid"
                  data-valmsg-for="PostCompletionsBudgetPlanner.TotalHome"
                  data-valmsg-replace="true"
                ></span>
              </Col>
            </FormGroup>
            <FormGroup
              className="TotalHome_Notes_HolderPC mb-2"
              style={{
                display: visibleNotes["Post_TotalHome_Notes"]
                  ? "block"
                  : "none",
              }}
            >
              <Label
                style={{ fontSize: "0.9rem" }}
                for="PostCompletionsBudgetPlanner_TotalHome_Notes"
                className="control-label"
              >
                Notes
                <span className="required" style={{ visibility: "hidden" }}>
                  *
                </span>
              </Label>
              <Input
                type="textarea"
                name="PostCompletionsBudgetPlanner.TotalHome_Notes"
                id="PostCompletionsBudgetPlanner_TotalHome_Notes"
                className="textAreaRestrictions form-control"
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="PostCompletionsBudgetPlanner.TotalHome_Notes"
                data-valmsg-replace="true"
              ></span>
            </FormGroup>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LivingExpensesTabContents;
