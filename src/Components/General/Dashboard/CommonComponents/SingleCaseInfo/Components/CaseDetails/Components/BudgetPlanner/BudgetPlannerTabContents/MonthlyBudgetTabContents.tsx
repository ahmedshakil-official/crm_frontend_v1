import { RootState } from "@/Redux/Store";
import { MonthlyBudgetTabContentsProps } from "@/Types/CommonComponents/SingleCaseInfo/CaseDetails/BudgetPlannerTypes";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Col,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
} from "reactstrap";

const MonthlyBudgetTabContents: FC<MonthlyBudgetTabContentsProps> = ({
  updateField,
}) => {
  const budgetPlannerData = useSelector(
    (state: RootState) => state.budgetPlanner
  );
  const [currentValues, setCurrentValues] = useState<Record<string, string>>(
    {}
  );
  const [postValues, setPostValues] = useState<Record<string, string>>({});

  const subtotalFieldMappings = {
    TotalIncome: "total_income",
    TotalDebtRepayment: "total_debt_repayment",
    TotalHome: "total_living_expenses",
    AvailableIncome: "available_income",
  };

  // Initialize local state with Redux data
  useEffect(() => {
    const initialCurrentValues: Record<string, string> = {};
    const initialPostValues: Record<string, string> = {};

    // Current Sub Totals
    Object.entries(subtotalFieldMappings).forEach(([field, key]) => {
      const value =
        budgetPlannerData?.current_sub_total?.[
          key as keyof typeof budgetPlannerData.current_sub_total
        ] ?? 0;
      initialCurrentValues[`CurrentBudgetPlanner.${field}`] =
        value !== 0 ? String(value) : "";
    });

    // Post Sub Totals
    Object.entries(subtotalFieldMappings).forEach(([field, key]) => {
      const value =
        budgetPlannerData?.post_sub_total?.[
          key as keyof typeof budgetPlannerData.post_sub_total
        ] ?? 0;
      initialPostValues[`PostCompletionsBudgetPlanner.${field}`] =
        value !== 0 ? String(value) : "";
    });

    setCurrentValues((prev) => ({ ...prev, ...initialCurrentValues }));
    setPostValues((prev) => ({ ...prev, ...initialPostValues }));
  }, [budgetPlannerData]);

  // Update parent modal with current values
  useEffect(() => {
    if (!budgetPlannerData?.current_sub_total) return;

    const formattedCurrentValues = {
      ...Object.entries(currentValues).reduce((acc, [key, value]) => {
        const fieldName = key.split(".")[1];
        const reduxFieldName =
          subtotalFieldMappings[
            fieldName as keyof typeof subtotalFieldMappings
          ];
        if (reduxFieldName) {
          acc[reduxFieldName] = value === "" ? 0 : parseFloat(value);
        }
        return acc;
      }, {} as Record<string, number | 0>),
      available_income:
        parseFloat(
          calculateAvailableIncome(currentValues, "CurrentBudgetPlanner")
        ) || 0,
    };

    updateField("current_sub_total", formattedCurrentValues);
  }, [currentValues, updateField, budgetPlannerData]);

  // Update parent modal with post values
  useEffect(() => {
    if (!budgetPlannerData?.post_sub_total) return;

    const formattedPostValues = {
      ...Object.entries(postValues).reduce((acc, [key, value]) => {
        const fieldName = key.split(".")[1];
        const reduxFieldName =
          subtotalFieldMappings[
            fieldName as keyof typeof subtotalFieldMappings
          ];
        if (reduxFieldName) {
          acc[reduxFieldName] = value === "" ? 0 : parseFloat(value);
        }
        return acc;
      }, {} as Record<string, number | 0>),
      available_income:
        parseFloat(
          calculateAvailableIncome(postValues, "PostCompletionsBudgetPlanner")
        ) || 0,
    };

    updateField("post_sub_total", formattedPostValues);
  }, [postValues, updateField, budgetPlannerData]);

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

  const availableIncomeField = {
    label: "Available Income",
    id: "AvailableIncome",
    inputId: "CurrentBudgetPlanner_AvailableIncome",
  };

  // Calculate Available Income
  const calculateAvailableIncome = (
    values: Record<string, string>,
    prefix: string
  ) => {
    const totalIncome = parseFloat(values[`${prefix}.TotalIncome`]) || 0;
    const totalDebt = parseFloat(values[`${prefix}.TotalDebtRepayment`]) || 0;
    const totalLiving = parseFloat(values[`${prefix}.TotalHome`]) || 0;
    return (totalIncome - totalDebt - totalLiving).toFixed(2);
  };

  // Handle copy from current
  const handleCopyFromCurrent = () => {
    const newPostValues: Record<string, string> = {};
    Object.keys(currentValues).forEach((key) => {
      const newKey = key.replace(
        "CurrentBudgetPlanner",
        "PostCompletionsBudgetPlanner"
      );
      newPostValues[newKey] = currentValues[key];
    });
    setPostValues(newPostValues);
  };

  const renderColumn = (
    title: string,
    prefix: string,
    showCopyButton?: boolean
  ) => (
    <div className="col-md-6">
      <h4 className="text-center mb-3">{title}</h4>
      <div className="border rounded-3 shadow-sm">
        <div
          className={`bg-light border-bottom p-3 ${
            showCopyButton
              ? "d-flex justify-content-between align-items-center"
              : ""
          }`}
        >
          <span className="fw-bold text-primary">Sub-Totals</span>
          {showCopyButton && (
            <Button color="primary" size="sm" onClick={handleCopyFromCurrent}>
              Copy from Current
            </Button>
          )}
        </div>
        <div className="p-3">
          {subtotalFields.map((field) => (
            <FormGroup row className="mb-2" key={field.id}>
              <Label
                style={{ fontSize: "0.9rem" }}
                for={`${prefix}_${field.id}`}
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
                    type="number"
                    name={`${prefix}.${field.id}`}
                    id={
                      prefix === "CurrentBudgetPlanner"
                        ? field.inputId
                        : `Post_${field.inputId}`
                    }
                    className="subtotal form-control fw-bold"
                    value={
                      prefix === "CurrentBudgetPlanner"
                        ? currentValues[`${prefix}.${field.id}`] || ""
                        : postValues[`${prefix}.${field.id}`] || ""
                    }
                    onChange={(e) => {
                      const newValues =
                        prefix === "CurrentBudgetPlanner"
                          ? {
                              ...currentValues,
                              [`${prefix}.${field.id}`]: e.target.value,
                            }
                          : {
                              ...postValues,
                              [`${prefix}.${field.id}`]: e.target.value,
                            };
                      prefix === "CurrentBudgetPlanner"
                        ? setCurrentValues(newValues)
                        : setPostValues(newValues);
                    }}
                  />
                </InputGroup>
                <span
                  className="field-validation-valid"
                  data-valmsg-for={`${prefix}.${field.id}`}
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
              for={
                prefix === "CurrentBudgetPlanner"
                  ? availableIncomeField.inputId
                  : `PostCompletionsBudgetPlanner_${availableIncomeField.id}`
              }
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
                  type="number"
                  name={`${prefix}.${availableIncomeField.id}`}
                  id={
                    prefix === "CurrentBudgetPlanner"
                      ? availableIncomeField.inputId
                      : `PostCompletionsBudgetPlanner_${availableIncomeField.id}`
                  }
                  className="availableIncome form-control fw-bold"
                  readOnly
                  placeholder="0.00"
                  value={
                    prefix === "CurrentBudgetPlanner"
                      ? calculateAvailableIncome(currentValues, prefix)
                      : calculateAvailableIncome(postValues, prefix)
                  }
                />
              </InputGroup>
              <span
                className="field-validation-valid"
                data-valmsg-for={`${prefix}.${availableIncomeField.id}`}
                data-valmsg-replace="true"
              ></span>
            </Col>
          </FormGroup>
        </div>
      </div>
    </div>
  );

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
        {renderColumn("Current", "CurrentBudgetPlanner")}
        {renderColumn("Post Completion", "PostCompletionsBudgetPlanner", true)}
      </section>
    </div>
  );
};

export default MonthlyBudgetTabContents;
