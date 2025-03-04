"use client";

import React, { useState } from "react";
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
import { AdverseData } from "./AdverseTab";
import AddNewDefaultsModal from "./AdverseModals/AddNewDefaultsModal";
import AddNewRegisteredCCJsModal from "./AdverseModals/AddNewRegisteredccjsModal";

export interface ApplicantsUsersProps {
  adverseData: AdverseData;
  basicTab: string | null;
}

const AdverseTabContent: React.FC<ApplicantsUsersProps> = ({
  adverseData,
  basicTab,
}) => {
  const [formData, setFormData] = useState<{
    hasRegisteredDefaults: boolean;
    hasRegisteredCCJs: boolean;
    hasCommitmentPaymentsMissed: boolean;
    hasPropertiesRepossessed: boolean;
    hasBankruptcies: boolean;
    hasIVAs: boolean;
    hasDMPs: boolean;
    hasPayDayLoans: boolean;
    hasExceededOverdraft: boolean;
    hasReturnedDirectDebits: boolean;
    reasonForAdverse: string;
  }>({
    hasRegisteredDefaults: false,
    hasRegisteredCCJs: false,
    hasCommitmentPaymentsMissed: false,
    hasPropertiesRepossessed: false,
    hasBankruptcies: false,
    hasIVAs: false,
    hasDMPs: false,
    hasPayDayLoans: false,
    hasExceededOverdraft: false,
    hasReturnedDirectDebits: false,
    reasonForAdverse: "",
  });

  // modals state
  const [addNewDefaultsModal, setAddNewDefaultsModal] = useState(false);
  const [addNewCCJsModal, setAddNewCCJsModal] = useState(false);

  const handleRadioChange = (key: keyof typeof formData, value: boolean) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddNewClick = (key: keyof typeof formData) => {
    console.log(`Add New clicked for: ${key}`);
    switch (key) {
      case "hasRegisteredDefaults":
        setAddNewDefaultsModal(true);
        break;
      case "hasRegisteredCCJs":
        setAddNewCCJsModal(true);
      default:
        break;
    }
  };

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
                      key: "hasRegisteredDefaults",
                      label: "Defaults registered in the last 6 years?",
                    },
                    {
                      key: "hasRegisteredCCJs",
                      label: "CCJ's registered in the last 6 years?",
                    },
                    {
                      key: "hasCommitmentPaymentsMissed",
                      label: "Missed commitment payments in the last 5 years?",
                    },
                    {
                      key: "hasPropertiesRepossessed",
                      label: "Property repossessed?",
                    },
                    {
                      key: "hasBankruptcies",
                      label: "Ever been made bankrupt?",
                    },
                    {
                      key: "hasIVAs",
                      label:
                        "Entered into an Individual Voluntary Arrangement (IVA)?",
                    },
                    {
                      key: "hasDMPs",
                      label: "Entered into a Debt Management Plan (DMP)?",
                    },
                    {
                      key: "hasPayDayLoans",
                      label: "Taken out a payday loan?",
                    },
                    {
                      key: "hasExceededOverdraft",
                      label: "Exceeded overdraft in the last 3 months?",
                    },
                    {
                      key: "hasReturnedDirectDebits",
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
                        {formData[key as keyof typeof formData] === true && (
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
                    name="reasonForAdverse"
                    id="reasonForAdverse"
                    value={formData.reasonForAdverse}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        reasonForAdverse: e.target.value as string,
                      }))
                    }
                    disabled={
                      !Object.values(formData).some((val) => val === true)
                    }
                  />
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* modals */}
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
    </Container>
  );
};

export default AdverseTabContent;
