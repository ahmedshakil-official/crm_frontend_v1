import { RootState } from "@/Redux/Store";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";

interface DebtRepaymentTabContentProps {
  updateField: (field: string, value: any) => void;
}

const DebtRepaymentTabContent: FC<DebtRepaymentTabContentProps> = ({
  updateField,
}) => {
  const budgetPlannerData = useSelector(
    (state: RootState) =>
      state.budgetPlanner ?? {
        current_debt_repayments: {},
        post_debt_repayments: {},
        current_priority_debt: {},
        post_priority_debt: {},
        current_unsecured_borrowing: {},
        post_unsecured_borrowing: {},
      }
  );
  const [currentValues, setCurrentValues] = useState<Record<string, string>>(
    {}
  );
  const [postValues, setPostValues] = useState<Record<string, string>>({});

  const debtRepaymentFieldMappings = {
    "Mortgage/Rent - Monthly": "mortgage_rent",
    "Second Mortgage - Monthly": "second_mortgage",
    "Shared Ownership Rental - Monthly": "shared_ownership_rental",
  };

  const priorityDebtFieldMappings = {
    "Mortgage Arrears - Monthly": "mortgage_arrears",
    "Gas Arrears - Monthly": "gas_arrears",
    "Maintenance Arrears - Monthly": "maintenance_arrears",
    "Defaults - Monthly": "defaults",
    "CCJs - Monthly": "ccjs",
    "Debt Management Plans - Monthly": "debt_management_plans",
    "Magistrate Court Fines - Monthly": "magistrate_court_fines",
    "Council Tax Arrears - Monthly": "council_tax_arrears",
  };

  const unsecuredBorrowingFieldMappings = {
    "Credit Cards - Monthly": "credit_cards",
    "Loans - Monthly": "loans",
    "Car Finance - Monthly": "car_finance",
    "Overdraft - Monthly": "overdraft",
    "Store Cards - Monthly": "store_cards",
    "Student Loans - Monthly": "student_loans",
    "Other Borrowing - Monthly": "other_borrowing",
  };

  // Initialize local state with Redux data
  useEffect(() => {
    if (!budgetPlannerData) return; // Add early return if data is null

    const initialCurrentValues: Record<string, string> = {};
    const initialPostValues: Record<string, string> = {};

    // Current Debt Repayments
    Object.entries(debtRepaymentFieldMappings).forEach(([field, key]) => {
      const value =
        budgetPlannerData?.current_debt_repayments?.[
          key as keyof typeof budgetPlannerData.current_debt_repayments
        ] ?? 0;
      initialCurrentValues[`CurrentBudgetPlanner.${field}`] =
        value !== 0 ? String(value) : "";
    });

    // Post Debt Repayments
    Object.entries(debtRepaymentFieldMappings).forEach(([field, key]) => {
      const value =
        budgetPlannerData?.post_debt_repayments?.[
          key as keyof typeof budgetPlannerData.post_debt_repayments
        ] ?? 0;
      initialPostValues[`PostCompletionBudgetPlanner.${field}`] =
        value !== 0 ? String(value) : "";
    });

    // Current Priority Debt
    Object.entries(priorityDebtFieldMappings).forEach(([field, key]) => {
      const value =
        budgetPlannerData?.current_priority_debt?.[
          key as keyof typeof budgetPlannerData.current_priority_debt
        ] ?? 0;
      initialCurrentValues[`CurrentBudgetPlanner.${field}`] =
        value !== 0 ? String(value) : "";
    });

    // Post Priority Debt
    Object.entries(priorityDebtFieldMappings).forEach(([field, key]) => {
      const value =
        budgetPlannerData?.post_priority_debt?.[
          key as keyof typeof budgetPlannerData.post_priority_debt
        ] ?? 0;
      initialPostValues[`PostCompletionBudgetPlanner.${field}`] =
        value !== 0 ? String(value) : "";
    });

    // Current Unsecured Borrowing
    Object.entries(unsecuredBorrowingFieldMappings).forEach(([field, key]) => {
      const value =
        budgetPlannerData?.current_unsecured_borrowing?.[
          key as keyof typeof budgetPlannerData.current_unsecured_borrowing
        ] ?? 0;
      initialCurrentValues[`CurrentBudgetPlanner.${field}`] =
        value !== 0 ? String(value) : "";
    });

    // Post Unsecured Borrowing
    Object.entries(unsecuredBorrowingFieldMappings).forEach(([field, key]) => {
      const value =
        budgetPlannerData?.post_unsecured_borrowing?.[
          key as keyof typeof budgetPlannerData.post_unsecured_borrowing
        ] ?? 0;
      initialPostValues[`PostCompletionBudgetPlanner.${field}`] =
        value !== 0 ? String(value) : "";
    });

    setCurrentValues((prev) => ({ ...prev, ...initialCurrentValues }));
    setPostValues((prev) => ({ ...prev, ...initialPostValues }));
  }, [budgetPlannerData]);

  // Update parent modal with current values
  useEffect(() => {
    const formatValues = (
      values: Record<string, string>,
      mappings: Record<string, string>,
      section: string
    ) => {
      const formatted = Object.entries(values)
        .filter(([key]) => key.startsWith("CurrentBudgetPlanner"))
        .reduce((acc, [key, value]) => {
          const fieldName = key.split(".")[1];
          const reduxFieldName = mappings[fieldName as keyof typeof mappings];
          if (reduxFieldName) {
            acc[reduxFieldName] = value === "" ? 0 : parseFloat(value);
          }
          return acc;
        }, {} as Record<string, number | 0>);
      formatted.total_debt_repayment =
        parseFloat(
          calculateSectionTotal(
            values,
            Object.keys(mappings),
            "CurrentBudgetPlanner"
          )
        ) || 0;
      updateField(section, formatted);
    };

    formatValues(
      currentValues,
      debtRepaymentFieldMappings,
      "current_debt_repayments"
    );
    formatValues(
      currentValues,
      priorityDebtFieldMappings,
      "current_priority_debt"
    );
    formatValues(
      currentValues,
      unsecuredBorrowingFieldMappings,
      "current_unsecured_borrowing"
    );
  }, [currentValues, updateField]);

  // Update parent modal with post values
  useEffect(() => {
    const formatValues = (
      values: Record<string, string>,
      mappings: Record<string, string>,
      section: string
    ) => {
      const formatted = Object.entries(values)
        .filter(([key]) => key.startsWith("PostCompletionBudgetPlanner"))
        .reduce((acc, [key, value]) => {
          const fieldName = key.split(".")[1];
          const reduxFieldName = mappings[fieldName as keyof typeof mappings];
          if (reduxFieldName) {
            acc[reduxFieldName] = value === "" ? 0 : parseFloat(value);
          }
          return acc;
        }, {} as Record<string, number | 0>);
      formatted.total_debt_repayment =
        parseFloat(
          calculateSectionTotal(
            values,
            Object.keys(mappings),
            "PostCompletionBudgetPlanner"
          )
        ) || 0;
      updateField(section, formatted);
    };

    formatValues(
      postValues,
      debtRepaymentFieldMappings,
      "post_debt_repayments"
    );
    formatValues(postValues, priorityDebtFieldMappings, "post_priority_debt");
    formatValues(
      postValues,
      unsecuredBorrowingFieldMappings,
      "post_unsecured_borrowing"
    );
  }, [postValues, updateField]);

  const renderForm = (
    prefix: string,
    fields: string[],
    mappings: Record<string, string>
  ) => (
    <Form>
      {fields.map((field) => {
        const fieldName = `${prefix}.${field}`;
        const reduxFieldName = mappings[field];
        return (
          <FormGroup row key={field} className="mb-2">
            <Label
              for={`${prefix}_${reduxFieldName}`}
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
                  name={fieldName}
                  id={`${prefix}_${reduxFieldName}`}
                  className="numeric-decimal debt-repayment"
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
              </InputGroup>
            </Col>
          </FormGroup>
        );
      })}
    </Form>
  );

  const calculateSectionTotal = (
    values: Record<string, string>,
    fields: string[],
    prefix: string
  ) => {
    return fields
      .reduce((sum, field) => {
        const fieldName = `${prefix}.${field}`;
        return sum + (parseFloat(values[fieldName]) || 0);
      }, 0)
      .toFixed(2);
  };

  const calculateOverallTotal = (
    values: Record<string, string>,
    prefix: string
  ) => {
    const debtTotal = calculateSectionTotal(
      values,
      Object.keys(debtRepaymentFieldMappings),
      prefix
    );
    const priorityTotal = calculateSectionTotal(
      values,
      Object.keys(priorityDebtFieldMappings),
      prefix
    );
    const unsecuredTotal = calculateSectionTotal(
      values,
      Object.keys(unsecuredBorrowingFieldMappings),
      prefix
    );
    return (
      parseFloat(debtTotal) +
      parseFloat(priorityTotal) +
      parseFloat(unsecuredTotal)
    ).toFixed(2);
  };

  const handleCopyFromCurrent = (prefix: string) => {
    const newPostValues: Record<string, string> = {};
    Object.keys(currentValues).forEach((key) => {
      if (key.startsWith("CurrentBudgetPlanner")) {
        const newKey = key.replace("CurrentBudgetPlanner", prefix);
        newPostValues[newKey] = currentValues[key];
      }
    });
    setPostValues((prev) => ({ ...prev, ...newPostValues }));
  };

  const renderSection = (
    title: string,
    prefix: string,
    fields: string[],
    mappings: Record<string, string>,
    hasCalculate?: boolean,
    showCopyButton?: boolean
  ) => (
    <div className="col-md-6">
      <h4 className="text-center mb-3">
        {title === "Total Debt Repayment" ? "" : title}
      </h4>
      <div
        className={`panel-default panel panel-primary border rounded-3 shadow-sm ${
          title === "Total Debt Repayment" ? "no-padding-vr no-border" : ""
        }`}
      >
        <div
          className={`bg-light border-bottom p-3 ${
            showCopyButton
              ? "d-flex justify-content-between align-items-center"
              : ""
          }`}
        >
          {title !== "Total Debt Repayment" && (
            <span className="fw-bold text-primary">
              {title === "Debt Repayments"
                ? "Debt Repayments"
                : title === "Priority Debt"
                ? "Priority Debt"
                : "Unsecured Borrowing"}
            </span>
          )}
          {showCopyButton && (
            <Button
              color="primary"
              size="sm"
              onClick={() => handleCopyFromCurrent(prefix)}
            >
              Copy from Current
            </Button>
          )}
        </div>
        <div className="p-3">
          {title === "Total Debt Repayment" ? (
            <FormGroup row className="mb-2">
              <Label
                for={`${prefix}_TotalDebtRepayment`}
                sm={6}
                style={{ fontSize: "0.9rem" }}
              >
                Total Debt Repayment - Monthly
              </Label>
              <Col sm={6}>
                <InputGroup>
                  <InputGroupText>£</InputGroupText>
                  <Input
                    type="number"
                    name={`${prefix}.TotalDebtRepayment`}
                    id={`${prefix}_TotalDebtRepayment`}
                    className="numeric-decimal fw-bold"
                    readOnly
                    placeholder="0.00"
                    value={calculateOverallTotal(
                      prefix === "CurrentBudgetPlanner"
                        ? currentValues
                        : postValues,
                      prefix
                    )}
                  />
                </InputGroup>
              </Col>
            </FormGroup>
          ) : (
            renderForm(prefix, fields, mappings)
          )}
        </div>
        {hasCalculate && (
          <div className="p-3 bg-light border-top">
            <FormGroup row className="mb-0">
              <Label
                className="control-label fw-bold text-primary"
                for={`${prefix}_TotalDebt`}
                sm={6}
                style={{ fontSize: "0.9rem" }}
              >
                Total {title}
              </Label>
              <Col sm={6}>
                <InputGroup>
                  <InputGroupText>£</InputGroupText>
                  <Input
                    type="number"
                    name={`${prefix}.TotalDebt`}
                    id={`${prefix}_TotalDebt`}
                    className="numeric-decimal fw-bold"
                    readOnly
                    placeholder="0.00"
                    value={calculateSectionTotal(
                      prefix === "CurrentBudgetPlanner"
                        ? currentValues
                        : postValues,
                      fields,
                      prefix
                    )}
                  />
                </InputGroup>
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
        <small>
          Add debt repayments like credit card minimum payments here. Do not
          include regular credit card spending - that goes in living costs.
        </small>
      </p>
      <Row>
        {renderSection(
          "Current",
          "CurrentBudgetPlanner",
          Object.keys(debtRepaymentFieldMappings),
          debtRepaymentFieldMappings,
          true
        )}
        {renderSection(
          "Post Completion",
          "PostCompletionBudgetPlanner",
          Object.keys(debtRepaymentFieldMappings),
          debtRepaymentFieldMappings,
          true,
          true
        )}
      </Row>
      <Row className="mt-4">
        {renderSection(
          "Priority Debt",
          "CurrentBudgetPlanner",
          Object.keys(priorityDebtFieldMappings),
          priorityDebtFieldMappings
        )}
        {renderSection(
          "Priority Debt",
          "PostCompletionBudgetPlanner",
          Object.keys(priorityDebtFieldMappings),
          priorityDebtFieldMappings,
          false,
          true
        )}
      </Row>
      <Row className="mt-4">
        {renderSection(
          "Unsecured Borrowing",
          "CurrentBudgetPlanner",
          Object.keys(unsecuredBorrowingFieldMappings),
          unsecuredBorrowingFieldMappings,
          true
        )}
        {renderSection(
          "Unsecured Borrowing",
          "PostCompletionBudgetPlanner",
          Object.keys(unsecuredBorrowingFieldMappings),
          unsecuredBorrowingFieldMappings,
          true,
          true
        )}
      </Row>
      <Row className="mt-4">
        {renderSection("Total Debt Repayment", "CurrentBudgetPlanner", [], {})}
        {renderSection(
          "Total Debt Repayment",
          "PostCompletionBudgetPlanner",
          [],
          {}
        )}
      </Row>
    </div>
  );
};

export default DebtRepaymentTabContent;
