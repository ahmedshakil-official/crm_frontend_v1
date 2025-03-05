"use client";

import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";
import AddNewDefaultsModal from "./AdverseModals/AddNewDefaultsModal";
import AddNewRegisteredCCJsModal from "./AdverseModals/AddNewRegisteredccjsModal";
import AddNewCommitmentPaymentsMissedModal from "./AdverseModals/AddNewCommitmentPaymentsMissedModal";
import AddNewPropertiesRepossessedModal from "./AdverseModals/AddNewPropertiesRepossessedModal";
import AddNewBankruptciesModal from "./AdverseModals/AddNewBankruptciesModal";
import AddNewIVAsModal from "./AdverseModals/AddNewIVAsModal";
import AddNewDMPsModal from "./AdverseModals/AddNewDMPsModal";
import AddNewPayDayLoansModal from "./AdverseModals/AddNewPayDayLoansModal";
import { useGetSingleAdverseDetailsQuery } from "@/Redux/Reducers/CaseDetails/AdverseDetails/AdverseDetailsApi";
import { useParams } from "next/navigation";

export interface ApplicantsUsersProps {
  basicTab: string;
}

const AdverseTabContent: React.FC<ApplicantsUsersProps> = ({ basicTab }) => {
  const params = useParams();
  const { casealias } = params;
  const { data, isLoading } = useGetSingleAdverseDetailsQuery({
    case_alias: casealias,
    adverse_alias: basicTab,
  });

  const [formData, setFormData] = useState({
    alias: "",
    has_any_defaults_registered_in_the_last_six_years: false,
    has_any_ccj_registered_in_the_last_six_years: false,
    missed_any_payments_on_commitments_in_the_last_five_years: false,
    is_a_property_repossessed: false,
    has_ever_been_made_bankrupt: false,
    is_ever_enter_into_a_debt_management_plan_or_debt_relief_order: false,
    is_ever_taken_out_a_pay_day_loan: false,
    is_exceeded_your_overdraft_in_the_last_three_months: false,
    is_direct_debit_returned_in_the_last_three_months: false,
    why_did_the_adverse_occur: "",
    user: {
      id: 0,
      alias: "",
      email: "",
      phone: "",
      first_name: "",
      last_name: "",
      profile_image: null,
      user_type: "",
    },
  });

  // Log data to debug
  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  // Handle radio button changes
  const handleRadioChange = (key: keyof typeof formData, value: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Modals state
  const [addNewDefaultsModal, setAddNewDefaultsModal] = useState(false);
  const [addNewCCJsModal, setAddNewCCJsModal] = useState(false);
  const [
    addNewCommitmentPaymentsMissedModal,
    setAddNewCommitmentPaymentsMissedModal,
  ] = useState(false);
  const [
    addNewPropertiesRepossessedModal,
    setAddNewPropertiesRepossessedModal,
  ] = useState(false);
  const [addNewBankruptciesModal, setAddNewBankruptciesModal] = useState(false);
  const [addNewIVAsModal, setAddNewIVAsModal] = useState(false);
  const [addNewDMPsModal, setAddNewDMPsModal] = useState(false);
  const [addNewPayDayLoansModal, setAddNewPayDayLoansModal] = useState(false);

  // Handle Add New button click
  const handleAddNewClick = (key: keyof typeof formData) => {
    switch (key) {
      case "has_any_defaults_registered_in_the_last_six_years":
        setAddNewDefaultsModal(true);
        break;
      case "has_any_ccj_registered_in_the_last_six_years":
        setAddNewCCJsModal(true);
        break;
      case "missed_any_payments_on_commitments_in_the_last_five_years":
        setAddNewCommitmentPaymentsMissedModal(true);
        break;
      case "is_a_property_repossessed":
        setAddNewPropertiesRepossessedModal(true);
        break;
      case "has_ever_been_made_bankrupt":
        setAddNewBankruptciesModal(true);
        break;
      case "is_ever_enter_into_a_debt_management_plan_or_debt_relief_order":
        setAddNewDMPsModal(true);
        break;
      case "is_ever_taken_out_a_pay_day_loan":
        setAddNewPayDayLoansModal(true);
        break;
      default:
        break;
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={12}>
          <Card className="shadow-sm border-0 rounded-lg p-4">
            <CardBody>
              <Form>
                <Row>
                  {[
                    {
                      key: "has_any_defaults_registered_in_the_last_six_years",
                      label: "Defaults registered in the last 6 years?",
                    },
                    {
                      key: "has_any_ccj_registered_in_the_last_six_years",
                      label: "CCJ's registered in the last 6 years?",
                    },
                    {
                      key: "missed_any_payments_on_commitments_in_the_last_five_years",
                      label: "Missed commitment payments in the last 5 years?",
                    },
                    {
                      key: "is_a_property_repossessed",
                      label: "Property repossessed?",
                    },
                    {
                      key: "has_ever_been_made_bankrupt",
                      label: "Ever been made bankrupt?",
                    },
                    {
                      key: "is_ever_enter_into_a_debt_management_plan_or_debt_relief_order",
                      label: "Entered into a Debt Management Plan (DMP)?",
                    },
                    {
                      key: "is_ever_taken_out_a_pay_day_loan",
                      label: "Taken out a payday loan?",
                    },
                    {
                      key: "is_exceeded_your_overdraft_in_the_last_three_months",
                      label: "Exceeded overdraft in the last 3 months?",
                    },
                    {
                      key: "is_direct_debit_returned_in_the_last_three_months",
                      label:
                        "Had a direct debit returned in the last 3 months?",
                    },
                  ].map(({ key, label }) => (
                    <Col md={6} key={key} className="mb-3">
                      <FormGroup>
                        <Label>{label}</Label>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <Input
                              type="radio"
                              name={key}
                              onChange={() =>
                                handleRadioChange(
                                  key as keyof typeof formData,
                                  true
                                )
                              }
                              checked={
                                formData[key as keyof typeof formData] === true
                              }
                            />{" "}
                            Yes
                            <Input
                              type="radio"
                              name={key}
                              className="ms-2"
                              onChange={() =>
                                handleRadioChange(
                                  key as keyof typeof formData,
                                  false
                                )
                              }
                              checked={
                                formData[key as keyof typeof formData] === false
                              }
                            />{" "}
                            No
                          </div>
                        </div>
                        {formData[key as keyof typeof formData] === true &&
                          key !==
                            "is_exceeded_your_overdraft_in_the_last_three_months" &&
                          key !==
                            "is_direct_debit_returned_in_the_last_three_months" && (
                            <Button
                              color="success"
                              className="mt-2"
                              onClick={() =>
                                handleAddNewClick(key as keyof typeof formData)
                              }
                            >
                              Add New
                            </Button>
                          )}
                      </FormGroup>
                    </Col>
                  ))}
                </Row>

                <FormGroup>
                  <Label for="reasonForAdverse">
                    Reason for adverse credit (if applicable)
                  </Label>
                  <Input
                    type="textarea"
                    name="why_did_the_adverse_occur"
                    id="why_did_the_adverse_occur"
                    value={formData.why_did_the_adverse_occur || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        why_did_the_adverse_occur: e.target.value,
                      }))
                    }
                    disabled={
                      !Object.entries(formData)
                        .filter(([key, value]) => typeof value === "boolean")
                        .some(([_, value]) => value === true)
                    }
                  />
                </FormGroup>

                {/* Submit Button */}
                <div className="d-flex justify-content-end mt-4">
                  <Button color="primary">Submit</Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Modals */}
      {addNewDefaultsModal && (
        <AddNewDefaultsModal
          isOpen={addNewDefaultsModal}
          toggle={() => setAddNewDefaultsModal((prev) => !prev)}
        />
      )}

      {addNewCCJsModal && (
        <AddNewRegisteredCCJsModal
          isOpen={addNewCCJsModal}
          toggle={() => setAddNewCCJsModal((prev) => !prev)}
        />
      )}

      {addNewCommitmentPaymentsMissedModal && (
        <AddNewCommitmentPaymentsMissedModal
          isOpen={addNewCommitmentPaymentsMissedModal}
          toggle={() => setAddNewCommitmentPaymentsMissedModal((prev) => !prev)}
        />
      )}

      {addNewPropertiesRepossessedModal && (
        <AddNewPropertiesRepossessedModal
          isOpen={addNewPropertiesRepossessedModal}
          toggle={() => setAddNewPropertiesRepossessedModal((prev) => !prev)}
        />
      )}

      {addNewBankruptciesModal && (
        <AddNewBankruptciesModal
          isOpen={addNewBankruptciesModal}
          toggle={() => setAddNewBankruptciesModal((prev) => !prev)}
        />
      )}

      {addNewIVAsModal && (
        <AddNewIVAsModal
          isOpen={addNewIVAsModal}
          toggle={() => setAddNewIVAsModal((prev) => !prev)}
        />
      )}

      {addNewDMPsModal && (
        <AddNewDMPsModal
          isOpen={addNewDMPsModal}
          toggle={() => setAddNewDMPsModal((prev) => !prev)}
        />
      )}

      {addNewPayDayLoansModal && (
        <AddNewPayDayLoansModal
          isOpen={addNewPayDayLoansModal}
          toggle={() => setAddNewPayDayLoansModal((prev) => !prev)}
        />
      )}
    </Container>
  );
};

export default AdverseTabContent;
