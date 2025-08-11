import LoadingSpinner from "@/app/loading";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { useGetSingleCaseQuery } from "@/Redux/Reducers/CommonComponents/Cases/CasesApi";
import { basicTabIndicator } from "@/Redux/Reducers/CommonComponents/SingleCaseInfo/CaseDetails/CaseDetailsTabIndicatorSlice";
import {
  useGetClientSurveyQuery,
  useUpdateClientSurveyMutation,
} from "@/Redux/Reducers/CommonComponents/SingleCaseInfo/CaseDetails/ClientSurvey/ClientSurveyApi";
import { getNextTabNav } from "@/utils/Helper/nextTabUtils";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import {
  Alert,
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

// Enum values for backend
const ANSWER_OPTIONS = [
  { label: "Better than expected", value: "BETTER_THAN_EXPECTED" },
  { label: "As Expected", value: "AS_EXPECTED" },
  { label: "Below Expected", value: "BELOW_EXPECTED" },
  { label: "N/A", value: "N/A" },
  { label: "Not mentioned to me", value: "NOT_MENTIONED_TO_ME" },
];

const ClientSurveyContent: React.FC = () => {
  const { data: session } = useSession();
  const { casealias } = useParams();
  const dispatch = useAppDispatch();

  // RTK Queries
  const { data: caseData, isLoading: isCaseFetching } = useGetSingleCaseQuery(
    { case_alias: casealias },
    { skip: !casealias }
  );

  const {
    data: clientSurveyList, // Now an array
    isLoading: isSurveyLoading,
    isError,
  } = useGetClientSurveyQuery({ case_alias: casealias }, { skip: !casealias });

  const [updateClientSurvey, { isLoading: isUpdating }] =
    useUpdateClientSurveyMutation();

  // Local form state
  const [adviserName, setAdviserName] = React.useState<string>("");
  const [question2, setQuestion2] = React.useState<string>("");
  const [question3, setQuestion3] = React.useState<string>("");
  const [question4, setQuestion4] = React.useState<string>("");

  const [clientSurvey, setClientSurvey] = React.useState<boolean>(false);

  // === STEP 1: Extract the Most Relevant Survey Record ===
  const selectedSurvey = useMemo(() => {
    if (!Array.isArray(clientSurveyList) || clientSurveyList.length === 0)
      return null;

    // Sort by creation date: newest first
    const sorted = [...clientSurveyList].sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    // Prefer a survey that has meaningful data (not placeholder)
    const validSurvey = sorted.find((survey) => {
      const hasAdviser =
        survey.adviser_name &&
        !["", "N/A", "n/a", "na", "NA"].includes(survey.adviser_name.trim());
      return hasAdviser;
    });

    return validSurvey || sorted[0]; // fallback to latest
  }, [clientSurveyList]);

  // === STEP 2: Generate surveyAlias for update ===
  const surveyAlias = selectedSurvey?.alias || null;

  // === STEP 3: Sync form state when selectedSurvey changes ===
  useEffect(() => {
    if (selectedSurvey && typeof selectedSurvey === "object") {
      setAdviserName(selectedSurvey.adviser_name || "");
      setQuestion2(
        selectedSurvey.is_clarification_explanation_of_the_service_firm || ""
      );
      setQuestion3(selectedSurvey.is_timely_service_delivery || "");
      setQuestion4(selectedSurvey.is_helpfulness_representative || "");
      setClientSurvey(selectedSurvey.client_survey || false);
    } else {
      // No existing survey — initialize as empty
      setAdviserName("");
      setQuestion2("");
      setQuestion3("");
      setQuestion4("");
      setClientSurvey(false);
    }
  }, [selectedSurvey]);

  // === STEP 4: Handlers ===
  const handleInputChange =
    (field: "adviserName" | "question2" | "question3" | "question4") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      switch (field) {
        case "adviserName":
          setAdviserName(value);
          break;
        case "question2":
          setQuestion2(value);
          break;
        case "question3":
          setQuestion3(value);
          break;
        case "question4":
          setQuestion4(value);
          break;
      }
    };

  const handleClientSurveyChange = (value: boolean) => {
    setClientSurvey(value);
    // Auto-update when clicked
    if (surveyAlias) {
      const payload = {
        case_alias: casealias,
        adviser_name: adviserName.trim(),
        is_clarification_explanation_of_the_service_firm: question2,
        is_timely_service_delivery: question3,
        is_helpfulness_representative: question4,
        client_survey: value,
      };

      updateClientSurvey({
        case_alias: casealias,
        survey_alias: surveyAlias,
        payload,
      })
        .unwrap()
        .then(() => {
          toast.success("Client survey updated successfully!");
        })
        .catch((error) => {
          toast.error("Failed to update client survey.");
          // Revert the state if update fails
          setClientSurvey(!value);
        });
    }
  };

  // === STEP 5: Final Submit (Validation) ===
  // In handleSubmit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!casealias) return toast.error("Case alias missing");

    const payload = {
      case_alias: casealias,
      adviser_name: adviserName.trim(),
      is_clarification_explanation_of_the_service_firm: question2,
      is_timely_service_delivery: question3,
      is_helpfulness_representative: question4,
      client_survey: clientSurvey,
    };

    try {
      if (surveyAlias) {
        await updateClientSurvey({
          case_alias: casealias,
          survey_alias: surveyAlias,
          payload,
        }).unwrap();
      }
      toast.success("Saved successfully!");
    } catch (error) {
      toast.error("Save failed. Check input or contact support.");
    }
  };

  // === STEP 6: Navigation ===
  const currentTab: string | null = useAppSelector(
    (state) => state.caseDetails.basicTabId
  );

  const handleNextTab = () => {
    const nextTabNav: string | null = getNextTabNav(
      caseData?.case_stage,
      currentTab!
    );
    if (nextTabNav) {
      dispatch(basicTabIndicator(nextTabNav));
    } else {
      toast.warning("This is the last tab.");
    }
  };

  // === STEP 7: Loading & Error States ===
  if (isSurveyLoading) {
    return (
      <div className="d-flex justify-content-center my-4">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    toast.error("Failed to load survey data.");
  }

  return (
    <Card>
      <CardBody>
        {/* Info Banner */}
        <div className="d-flex justify-content-between">
          {session?.user?.user_type !== "CLIENT" && (
            <div>
              <Form>
                <FormGroup>
                  <div className="d-flex align-items-center mb-3">
                    <Label className="me-3 mb-0">Client Survey:</Label>
                    <div className="d-flex gap-2">
                      <Button
                        color={clientSurvey ? "success" : "outline-success"}
                        size="sm"
                        onClick={() => handleClientSurveyChange(true)}
                        disabled={isUpdating}
                      >
                        Yes
                      </Button>
                      <Button
                        color={!clientSurvey ? "danger" : "outline-danger"}
                        size="sm"
                        onClick={() => handleClientSurveyChange(false)}
                        disabled={isUpdating}
                      >
                        No
                      </Button>
                    </div>
                    <Badge
                      color={
                        selectedSurvey?.client_survey ? "success" : "danger"
                      }
                      className="ms-2"
                    >
                      {selectedSurvey?.client_survey
                        ? "Enabled for Client"
                        : "Disabled for Client"}
                    </Badge>
                  </div>
                </FormGroup>
              </Form>
            </div>
          )}
          <div>
            {selectedSurvey === null ? (
              <Alert color="info" className="mb-4">
                No survey data found. A new survey will be created when you
                save.
              </Alert>
            ) : new Date(selectedSurvey?.created_at)
                .toISOString()
                .slice(0, 16) ===
              new Date(selectedSurvey?.updated_at)
                .toISOString()
                .slice(0, 16) ? (
              ""
            ) : (
              session?.user?.user_type !== "CLIENT" && (
                <p className="text-muted small mb-3">
                  Editing survey submitted on{" "}
                  {new Date(selectedSurvey.updated_at).toLocaleDateString()} by{" "}
                  <span className="fw-bold">
                    {selectedSurvey.updated_by?.first_name}{" "}
                    {selectedSurvey.updated_by?.last_name}
                  </span>
                </p>
              )
            )}
          </div>
        </div>
        {session?.user?.user_type !== "CLIENT" ||
        !!selectedSurvey?.client_survey ? (
          <>
            {/* Header */}
            <Row className="mb-3 d-flex justify-content-between gap-3">
              <Col className="border-b-primary border-2">
                <h3 className="text-center">Questions</h3>
              </Col>
              <Col className="border-b-primary border-2">
                <h3 className="text-center">Answers</h3>
              </Col>
            </Row>
            <Form onSubmit={handleSubmit}>
              {/* Question 1: Adviser Name */}
              <Row className="border-top border-primary border-2 p-2">
                <Col md={6}>
                  <Label htmlFor="adviserName">Your Adviser Name*</Label>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="text"
                      id="adviserName"
                      name="adviser_name"
                      placeholder="Enter adviser name"
                      required
                      value={adviserName}
                      onChange={handleInputChange("adviserName")}
                      disabled={isUpdating}
                    />
                  </FormGroup>
                </Col>
              </Row>

              {/* Question 2 */}
              <Row className="border-2 border-l-primary border-r-primary border-b-primary p-2">
                <Col md={6}>
                  <Label>
                    The clarification and explanation of the service to be
                    provided by the firm.
                  </Label>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    {ANSWER_OPTIONS.map((option) => (
                      <div
                        key={option.value}
                        className="d-flex align-items-center mb-1"
                      >
                        <Input
                          type="radio"
                          name="question2"
                          value={option.value}
                          checked={question2 === option.value}
                          onChange={handleInputChange("question2")}
                          disabled={isUpdating}
                        />
                        <span className="ms-1">{option.label}</span>
                      </div>
                    ))}
                  </FormGroup>
                </Col>
              </Row>

              {/* Question 3 */}
              <Row className="border-2 border-l-primary border-r-primary border-b-primary p-2">
                <Col md={6}>
                  <Label>The timely delivery of the service by the firm.</Label>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    {ANSWER_OPTIONS.map((option) => (
                      <div
                        key={option.value}
                        className="d-flex align-items-center mb-1"
                      >
                        <Input
                          type="radio"
                          name="question3"
                          value={option.value}
                          checked={question3 === option.value}
                          onChange={handleInputChange("question3")}
                          disabled={isUpdating}
                        />
                        <span className="ms-1">{option.label}</span>
                      </div>
                    ))}
                  </FormGroup>
                </Col>
              </Row>
              {/* Question 4 */}
              <Row className="border-2 border-l-primary border-r-primary border-b-primary p-2">
                <Col md={6}>
                  <Label>
                    The helpfulness of any representative of the firm who you
                    dealt with.
                  </Label>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    {ANSWER_OPTIONS.map((option) => (
                      <div
                        key={option.value}
                        className="d-flex align-items-center mb-1"
                      >
                        <Input
                          type="radio"
                          name="question4"
                          value={option.value}
                          checked={question4 === option.value}
                          onChange={handleInputChange("question4")}
                          disabled={isUpdating}
                        />
                        <span className="ms-1">{option.label}</span>
                      </div>
                    ))}
                  </FormGroup>
                </Col>
              </Row>

              {/* Action Buttons */}
              <div className="d-flex justify-content-end mt-4 gap-2">
                <Button color="primary" type="submit" disabled={isUpdating}>
                  {isUpdating ? "Saving..." : "Save Changes"}
                </Button>

                <Button
                  color="secondary"
                  onClick={async (e) => {
                    e.preventDefault();
                    if (
                      session?.user?.user_type === "CLIENT" &&
                      selectedSurvey?.updated_by !== null
                    ) {
                      handleNextTab();
                    } else {
                      await handleSubmit(e);
                      handleNextTab();
                    }
                  }}
                  disabled={isUpdating}
                >
                  {session?.user?.user_type === "CLIENT"
                    ? "Go To Next"
                    : "Save & Next"}
                </Button>
              </div>
            </Form>
          </>
        ) : (
          <p className="fs-3 text-muted text-center text-warning mb-3">
            Client survey is not enabled. Please! contact your adviser to enable
            it.
          </p>
        )}
      </CardBody>
    </Card>
  );
};

export default ClientSurveyContent;
