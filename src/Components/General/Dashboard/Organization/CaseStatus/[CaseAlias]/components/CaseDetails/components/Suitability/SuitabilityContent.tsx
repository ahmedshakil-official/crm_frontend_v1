import { defaultAnswersData } from "@/Data/Organization/Case/CaseDetails/SuitabilityData";
import {
  useGetSuitabilityQuery,
  useUpdateSuitabilityMutation,
} from "@/Redux/Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/Suitability/SuitabilityApi";
import LoadingSpinner from "@/app/loading";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const SuitabilityContent: React.FC = () => {
  const { casealias } = useParams();
  const [defaultAnswers, setDefaultAnswers] = useState(defaultAnswersData);
  const [formValue, setFormValue] = useState({
    circumstances_objectives: {
      circumstances_type: "",
      question_one_answer: "",
      question_two_answer: "",
      question_three_answer: "",
      question_one_sharia: "",
      question_two_sharia: "",
    },
    budget_affordability: {
      budget_affordability_type: "",
      question_one_answer: "",
      question_two_answer: "",
      question_one_sharia: "",
      question_two_sharia: "",
    },
  });

  // RTK hooks
  const { data: suitabilityData, isLoading } = useGetSuitabilityQuery({
    case_alias: casealias,
  });

  const [updateSuitability, { isLoading: isUpdating }] =
    useUpdateSuitabilityMutation();

  // Set initial form data when API data is available
  useEffect(() => {
    if (suitabilityData?.circumstances_objectives || suitabilityData?.budget_affordability) {
      setFormValue({
        ...formValue,
        circumstances_objectives: {
          circumstances_type:
            suitabilityData.circumstances_objectives.circumstances_type ||
            "GENERAL",
          question_one_answer:
            suitabilityData.circumstances_objectives.question_one_answer ||
            defaultAnswers.circumstancesAndObjectives_G_A1,
          question_two_answer:
            suitabilityData.circumstances_objectives.question_two_answer ||
            defaultAnswers.circumstancesAndObjectives_G_A2,
          question_three_answer:
            suitabilityData.circumstances_objectives.question_three_answer ||
            defaultAnswers.circumstancesAndObjectives_G_A3,
          question_one_sharia:
            suitabilityData.circumstances_objectives.question_one_sharia ||
            defaultAnswers.circumstancesAndObjectives_S_A1,
          question_two_sharia:
            suitabilityData.circumstances_objectives.question_two_sharia ||
            defaultAnswers.circumstancesAndObjectives_S_A2,
        },
        budget_affordability: {
          budget_affordability_type:
            suitabilityData.budget_affordability.budget_affordability_type ||
            "GENERAL",
          question_one_answer:
            suitabilityData.budget_affordability.question_one_answer ||
            defaultAnswers.budgetAndAffordability_G_A1,
          question_two_answer:
            suitabilityData.budget_affordability.question_two_answer ||
            defaultAnswers.budgetAndAffordability_G_A2,
          question_one_sharia:
            suitabilityData.budget_affordability.question_one_sharia ||
            defaultAnswers.budgetAndAffordability_S_A1,
          question_two_sharia:
            suitabilityData.budget_affordability.question_two_sharia ||
            defaultAnswers.budgetAndAffordability_S_A2,
        },
      });
    }
  }, [suitabilityData]);

  // Handle input changes for nested state
  const handleChange = <T extends keyof typeof formValue>(
    section: T,
    field: keyof (typeof formValue)[T],
    value: string
  ) => {
    setFormValue((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      alias: casealias,
      circumstances_objectives: {
        ...formValue.circumstances_objectives,
      },
      budget_affordability: {
        ...formValue.budget_affordability,
      },
    };
    try {
      await updateSuitability({
        payload: payload,
        case_alias: casealias,
      }).unwrap();
      toast.success("Changes saved successfully!");
    } catch (error) {
      console.error("Failed to update suitability:", error);
      toast.error("Failed to save changes. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      {/* Your circumstances and objectives */}
      <Card className="border-1 border-success">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h4>Your circumstances and objectives</h4>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input
                type="select"
                name="circumstances_type"
                value={formValue.circumstances_objectives.circumstances_type}
                onChange={(e) =>
                  handleChange(
                    "circumstances_objectives",
                    "circumstances_type",
                    e.target.value
                  )
                }
              >
                <option value="GENERAL">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          {formValue.circumstances_objectives.circumstances_type ===
            "GENERAL" && (
            <>
              <FormGroup>
                <Label>Answer 1</Label>
                <Input
                  type="textarea"
                  name="question_one_answer"
                  rows="3"
                  value={formValue.circumstances_objectives.question_one_answer}
                  onChange={(e) =>
                    handleChange(
                      "circumstances_objectives",
                      "question_one_answer",
                      e.target.value
                    )
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Answer 2</Label>
                <Input
                  type="textarea"
                  name="question_two_answer"
                  rows="3"
                  value={formValue.circumstances_objectives.question_two_answer}
                  onChange={(e) =>
                    handleChange(
                      "circumstances_objectives",
                      "question_two_answer",
                      e.target.value
                    )
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Answer 3</Label>
                <Input
                  type="textarea"
                  name="question_three_answer"
                  rows="3"
                  value={
                    formValue.circumstances_objectives.question_three_answer
                  }
                  onChange={(e) =>
                    handleChange(
                      "circumstances_objectives",
                      "question_three_answer",
                      e.target.value
                    )
                  }
                />
              </FormGroup>
            </>
          )}
          {formValue.circumstances_objectives.circumstances_type ===
            "SHARIA" && (
            <>
              <FormGroup>
                <Label>Answer 1</Label>
                <Input
                  type="textarea"
                  name="question_one_sharia"
                  rows="6"
                  value={formValue.circumstances_objectives.question_one_sharia}
                  onChange={(e) =>
                    handleChange(
                      "circumstances_objectives",
                      "question_one_sharia",
                      e.target.value
                    )
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Answer 2</Label>
                <Input
                  type="textarea"
                  name="question_two_sharia"
                  rows="3"
                  value={formValue.circumstances_objectives.question_two_sharia}
                  onChange={(e) =>
                    handleChange(
                      "circumstances_objectives",
                      "question_two_sharia",
                      e.target.value
                    )
                  }
                />
              </FormGroup>
            </>
          )}
          <div className="d-flex justify-content-start align-items-center">
            <Button color="success">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>

      {/* Budget and affordability */}
      <Card className="border-1 border-success mt-3">
        <CardHeader className="d-flex justify-content-between align-items-center">
          <Col md={6}>
            <h4>Budget and affordability</h4>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input
                type="select"
                name="budget_affordability_type"
                value={
                  formValue.budget_affordability.budget_affordability_type
                }
                onChange={(e) =>
                  handleChange(
                    "budget_affordability",
                    "budget_affordability_type",
                    e.target.value
                  )
                }
              >
                <option value="GENERAL">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          {formValue.budget_affordability.budget_affordability_type ===
            "GENERAL" && (
            <>
              <FormGroup>
                <Label>Answer 1</Label>
                <Input
                  type="textarea"
                  name="question_one_answer"
                  rows="3"
                  value={formValue.budget_affordability.question_one_answer}
                  onChange={(e) =>
                    handleChange(
                      "budget_affordability",
                      "question_one_answer",
                      e.target.value
                    )
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Answer 2</Label>
                <Input
                  type="textarea"
                  name="question_two_answer"
                  rows="3"
                  value={formValue.budget_affordability.question_two_answer}
                  onChange={(e) =>
                    handleChange(
                      "budget_affordability",
                      "question_two_answer",
                      e.target.value
                    )
                  }
                />
              </FormGroup>
            </>
          )}
          {formValue.budget_affordability.budget_affordability_type ===
            "SHARIA" && (
            <>
              <FormGroup>
                <Label>Answer 1</Label>
                <Input
                  type="textarea"
                  name="question_one_sharia"
                  rows="6"
                  value={formValue.budget_affordability.question_one_sharia}
                  onChange={(e) =>
                    handleChange(
                      "budget_affordability",
                      "question_one_sharia",
                      e.target.value
                    )
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Answer 2</Label>
                <Input
                  type="textarea"
                  name="question_two_sharia"
                  rows="3"
                  value={formValue.budget_affordability.question_two_sharia}
                  onChange={(e) =>
                    handleChange(
                      "budget_affordability",
                      "question_two_sharia",
                      e.target.value
                    )
                  }
                />
              </FormGroup>
            </>
          )}
          <div className="d-flex justify-content-start align-items-center">
            <Button color="success">Add More Answer</Button>
          </div>
        </CardBody>
      </Card>

      {/* Button for save changes */}
      <div className="d-flex justify-content-end mt-3 mb-0">
        <Button color="primary" type="submit" disabled={isUpdating}>
          {isUpdating ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </Form>
  );
};

export default SuitabilityContent;