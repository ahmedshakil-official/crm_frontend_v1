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
  const [visibleNotes, setVisibleNotes] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [currentValues, setCurrentValues] = useState<Record<string, string>>(
    {}
  );
  const [postValues, setPostValues] = useState<Record<string, string>>({});

  const toggleNotes = (event: React.MouseEvent, noteId: string) => {
    event.preventDefault();
    setVisibleNotes((prev) => ({ ...prev, [noteId]: !prev[noteId] }));
  };

  const livingCostFields = [
    "Electricity",
    "Gas",
    "Water",
    "Landline/Mobile Phones",
    "TV Licence",
    "Council Tax",
    { label: "Ground Rent & Service Charges" },
    "Buildings & Contents",
    "Mortgage Payment Protection",
    "Endowment",
    "Pension Contribution",
    "Childcare",
    "Maintenance",
    "Food",
    "Car Maintenance",
    "Fuel",
    "Public Transport",
    "TV Broadband",
    "Recreation/Holidays",
    "Clothing",
    "Medical Expenses",
    "Education",
    "Other Living Costs",
  ];

  const insuranceFields = [
    "Motor Insurance",
    "Health Insurance",
    "Payment Protection",
    "Life Insurance",
    "Dental Insurance",
    "Other Insurance",
  ];

  const renderFields = (
    prefix: string,
    fields: (string | { label: string })[]
  ) => (
    <Form>
      {fields.map((field) => {
        const label = typeof field === "string" ? field : field.label;
        const id = label.replace(/[\s/&]/g, "");
        const fieldName = `${prefix}.${id}`;
        return (
          <div key={id}>
            <FormGroup row className="mb-2">
              <Label
                for={`${prefix}_${id}`}
                sm={6}
                style={{ fontSize: "0.9rem" }}
              >
                {label}
              </Label>
              <Col sm={6}>
                <InputGroup>
                  <InputGroupText>£</InputGroupText>
                  <Input
                    type="number"
                    name={fieldName}
                    id={`${prefix}_${id}`}
                    className="numeric-decimal living-cost"
                    placeholder="0.00"
                    step="0.01"
                    value={
                      prefix === "CurrentBudgetPlanner"
                        ? currentValues[fieldName] || ""
                        : postValues[fieldName] || ""
                    }
                    onChange={(e) => {
                      const newValues =
                        prefix === "CurrentBudgetPlanner"
                          ? { ...currentValues, [fieldName]: e.target.value }
                          : { ...postValues, [fieldName]: e.target.value };
                      prefix === "CurrentBudgetPlanner"
                        ? setCurrentValues(newValues)
                        : setPostValues(newValues);
                    }}
                  />
                  <InputGroupText
                    className="penNoteIcon_Holder"
                    onClick={(e) =>
                      toggleNotes(
                        e,
                        `${
                          prefix === "CurrentBudgetPlanner" ? "" : "Post_"
                        }${id}_Notes`
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <FaEdit />
                  </InputGroupText>
                </InputGroup>
              </Col>
            </FormGroup>
            <FormGroup
              className={`${id}_Notes_Holder mb-2`}
              style={{
                display: visibleNotes[
                  `${
                    prefix === "CurrentBudgetPlanner" ? "" : "Post_"
                  }${id}_Notes`
                ]
                  ? "block"
                  : "none",
              }}
            >
              <Label
                for={`${prefix}_${id}_Notes`}
                style={{ fontSize: "0.9rem" }}
              >
                Notes
              </Label>
              <Input
                type="textarea"
                name={`${prefix}.${id}_Notes`}
                id={`${prefix}_${id}_Notes`}
                className="textAreaRestrictions form-control"
                value={
                  prefix === "CurrentBudgetPlanner"
                    ? currentValues[`${prefix}.${id}_Notes`] || ""
                    : postValues[`${prefix}.${id}_Notes`] || ""
                }
                onChange={(e) => {
                  const newValues =
                    prefix === "CurrentBudgetPlanner"
                      ? {
                          ...currentValues,
                          [`${prefix}.${id}_Notes`]: e.target.value,
                        }
                      : {
                          ...postValues,
                          [`${prefix}.${id}_Notes`]: e.target.value,
                        };
                  prefix === "CurrentBudgetPlanner"
                    ? setCurrentValues(newValues)
                    : setPostValues(newValues);
                }}
              />
            </FormGroup>
          </div>
        );
      })}
    </Form>
  );

  // Calculate total for a section
  const calculateTotal = (
    values: Record<string, string>,
    fields: (string | { label: string })[],
    prefix: string // Added prefix parameter
  ) => {
    return fields
      .reduce((sum, field) => {
        const label = typeof field === "string" ? field : field.label;
        const fieldName = `${prefix}.${label.replace(/[\s/&]/g, "")}`;
        return sum + (parseFloat(values[fieldName]) || 0);
      }, 0)
      .toFixed(2);
  };

  // Handle copy functionality
  const handleCopyFromCurrent = () => {
    const newPostValues: Record<string, string> = {};
    Object.keys(currentValues).forEach((key) => {
      const newKey = key.replace(
        "CurrentBudgetPlanner",
        "PostCompletionBudgetPlanner"
      );
      newPostValues[newKey] = currentValues[key];
    });
    setPostValues(newPostValues);
  };

  const renderSection = (
    title: string,
    prefix: string,
    fields?: (string | { label: string })[],
    isTotal?: boolean
  ) => (
    <div className="col-md-6">
      {!isTotal && <h4 className="text-center mb-3">{title}</h4>}
      <div
        className={`border rounded-3 shadow-sm ${
          isTotal ? "no-padding-vr no-border" : ""
        }`}
      >
        {!isTotal && (
          <div
            className={`bg-light border-bottom p-3 ${
              title === "Post Completion"
                ? "d-flex justify-content-between align-items-center"
                : ""
            }`}
          >
            <span className="fw-bold text-primary">
              {fields === insuranceFields ? "Insurances" : "Living Costs"}
            </span>
            {title === "Post Completion" && (
              <Button
                color="primary"
                size="sm"
                id="copyFromCurrentButton"
                className="copyFromCurrentButton"
                onClick={handleCopyFromCurrent}
              >
                Copy from Current
              </Button>
            )}
          </div>
        )}
        <div className={`p-3 ${isTotal ? "no-padding-vr no-border" : ""}`}>
          {isTotal ? (
            <FormGroup row className="mb-2">
              <Label
                for={`${prefix}_TotalHome`}
                sm={6}
                style={{ fontSize: "0.9rem" }}
              >
                Total Living Expenses
              </Label>
              <Col sm={6}>
                <InputGroup>
                  <InputGroupText>£</InputGroupText>
                  <Input
                    type="number"
                    name={`${prefix}.TotalHome`}
                    id={`${prefix}_TotalHome`}
                    className="numeric-decimal fw-bold"
                    readOnly
                    placeholder="0.00"
                    step="0.01"
                    value={
                      prefix === "CurrentBudgetPlanner"
                        ? (
                            parseFloat(
                              calculateTotal(
                                currentValues,
                                livingCostFields,
                                prefix
                              )
                            ) +
                            parseFloat(
                              calculateTotal(
                                currentValues,
                                insuranceFields,
                                prefix
                              )
                            )
                          ).toFixed(2)
                        : (
                            parseFloat(
                              calculateTotal(
                                postValues,
                                livingCostFields,
                                prefix
                              )
                            ) +
                            parseFloat(
                              calculateTotal(
                                postValues,
                                insuranceFields,
                                prefix
                              )
                            )
                          ).toFixed(2)
                    }
                  />
                  <InputGroupText
                    className="penNoteIcon_Holder"
                    onClick={(e) =>
                      toggleNotes(
                        e,
                        `${
                          prefix === "CurrentBudgetPlanner" ? "" : "Post_"
                        }TotalHome_Notes`
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <FaEdit />
                  </InputGroupText>
                </InputGroup>
              </Col>
            </FormGroup>
          ) : (
            renderFields(prefix, fields!)
          )}
          {isTotal && (
            <FormGroup
              className="TotalHome_Notes_Holder mb-2"
              style={{
                display: visibleNotes[
                  `${
                    prefix === "CurrentBudgetPlanner" ? "" : "Post_"
                  }TotalHome_Notes`
                ]
                  ? "block"
                  : "none",
              }}
            >
              <Label
                for={`${prefix}_TotalHome_Notes`}
                style={{ fontSize: "0.9rem" }}
              >
                Notes
              </Label>
              <Input
                type="textarea"
                name={`${prefix}.TotalHome_Notes`}
                id={`${prefix}_TotalHome_Notes`}
                className="textAreaRestrictions form-control"
                value={
                  prefix === "CurrentBudgetPlanner"
                    ? currentValues[`${prefix}.TotalHome_Notes`] || ""
                    : postValues[`${prefix}.TotalHome_Notes`] || ""
                }
                onChange={(e) => {
                  const newValues =
                    prefix === "CurrentBudgetPlanner"
                      ? {
                          ...currentValues,
                          [`${prefix}.TotalHome_Notes`]: e.target.value,
                        }
                      : {
                          ...postValues,
                          [`${prefix}.TotalHome_Notes`]: e.target.value,
                        };
                  prefix === "CurrentBudgetPlanner"
                    ? setCurrentValues(newValues)
                    : setPostValues(newValues);
                }}
              />
            </FormGroup>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <p>
        <small>
          Please enter all monthly living costs accurately. Convert non-monthly
          expenses: multiply weekly by 4.3, divide quarterly by 3, annual by 12.
        </small>
      </p>
      <Row>
        {renderSection("Current", "CurrentBudgetPlanner", livingCostFields)}
        {renderSection(
          "Post Completion",
          "PostCompletionBudgetPlanner",
          livingCostFields
        )}
      </Row>
      <Row className="mt-4">
        {renderSection("Current", "CurrentBudgetPlanner", insuranceFields)}
        {renderSection(
          "Post Completion",
          "PostCompletionBudgetPlanner",
          insuranceFields
        )}
      </Row>
      <Row className="mt-4">
        {renderSection("", "CurrentBudgetPlanner", [], true)}
        {renderSection("", "PostCompletionBudgetPlanner", [], true)}
      </Row>
    </div>
  );
};

export default LivingExpensesTabContents;
