import { RootState } from "@/Redux/Store";
import { HouseHoldIncomeTabContentProps } from "@/Types/CommonComponents/SingleCaseInfo/CaseDetails/BudgetPlannerTypes";
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

const HouseHoldIncomeTabContent: FC<HouseHoldIncomeTabContentProps> = ({
  updateField,
}) => {
  const budgetPlannerData = useSelector(
    (state: RootState) =>
      state.budgetPlanner ?? {
        current_income: {},
        post_income: {},
      }
  );
  const [currentValues, setCurrentValues] = useState<Record<string, string>>(
    {}
  );
  const [postValues, setPostValues] = useState<Record<string, string>>({});

  const incomeFieldMappings = {
    "Applicant 1 Net Monthly Income": "applicant_one_net_monthly_income",
    "Applicant 2 Net Monthly Income": "applicant_two_net_monthly_income",
    "Rental Income": "rental_income",
    "Part Time Income": "part_time_income",
    "Jobseeker's Allowance": "jobseekers_allowance",
    "Child Benefit": "child_benefit",
    "Tax Credits": "tax_credits",
    "Working Tax Credits": "working_tax_credits",
    Maintenance: "maintenance",
    Pension: "pension",
    "Other Benefits": "other_benefits",
  };

  // Initialize local state with Redux data
  useEffect(() => {
    const initialCurrentValues: Record<string, string> = {};
    const initialPostValues: Record<string, string> = {};

    // Current Income
    Object.entries(incomeFieldMappings).forEach(([field, key]) => {
      const value =
        budgetPlannerData?.current_income?.[
          key as keyof typeof budgetPlannerData.current_income
        ] ?? 0;
      initialCurrentValues[`CurrentBudgetPlanner.${field}`] =
        value !== 0 ? String(value) : "";
    });

    // Post Income
    Object.entries(incomeFieldMappings).forEach(([field, key]) => {
      const value =
        budgetPlannerData?.post_income?.[
          key as keyof typeof budgetPlannerData.post_income
        ] ?? 0;
      initialPostValues[`PostCompletionsBudgetPlanner.${field}`] =
        value !== 0 ? String(value) : "";
    });

    setCurrentValues((prev) => ({ ...prev, ...initialCurrentValues }));
    setPostValues((prev) => ({ ...prev, ...initialPostValues }));
  }, [budgetPlannerData]);

  // Update parent modal with current values
  useEffect(() => {
    const formattedCurrentValues = {
      ...Object.entries(currentValues).reduce((acc, [key, value]) => {
        const fieldName = key.split(".")[1];
        const reduxFieldName =
          incomeFieldMappings[fieldName as keyof typeof incomeFieldMappings];
        if (reduxFieldName) {
          acc[reduxFieldName] = value === "" ? 0 : parseFloat(value);
        }
        return acc;
      }, {} as Record<string, number>),
      total_income: parseFloat(calculateTotal(currentValues)) || 0,
    };

    updateField("current_income", formattedCurrentValues);
  }, [currentValues, updateField]);

  // Update parent modal with post values
  useEffect(() => {
    const formattedPostValues = {
      ...Object.entries(postValues).reduce((acc, [key, value]) => {
        const fieldName = key.split(".")[1];
        const reduxFieldName =
          incomeFieldMappings[fieldName as keyof typeof incomeFieldMappings];
        if (reduxFieldName) {
          acc[reduxFieldName] = value === "" ? 0 : parseFloat(value);
        }
        return acc;
      }, {} as Record<string, number>),
      total_income: parseFloat(calculateTotal(postValues)) || 0,
    };

    updateField("post_income", formattedPostValues);
  }, [postValues, updateField]);

  const renderForm = (prefix: string, className: string) => (
    <Form>
      {Object.entries(incomeFieldMappings).map(([label, fieldKey]) => {
        const fieldName = `${prefix}.${label}`;
        return (
          <FormGroup row key={fieldKey}>
            <Label
              for={`${prefix}_${fieldKey}`}
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
                  id={`${prefix}_${fieldKey}`}
                  className={`numeric-decimal ${className}`}
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

  // Handle copy from current button click
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

  // Calculate totals
  const calculateTotal = (values: Record<string, string>) => {
    return Object.values(values)
      .reduce((sum, value) => sum + (parseFloat(value) || 0), 0)
      .toFixed(2);
  };

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
              {renderForm("CurrentBudgetPlanner", "living-expense")}
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
                      value={calculateTotal(currentValues)}
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
              <Button
                color="primary"
                size="sm"
                id="copyFromCurrentButton"
                onClick={handleCopyFromCurrent}
              >
                Copy from Current
              </Button>
            </div>
            <div className="p-3">
              {renderForm("PostCompletionsBudgetPlanner", "living-expensePC")}
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
                      value={calculateTotal(postValues)}
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
