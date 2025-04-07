import { useUpdateDIPHistoryDetailsMutation } from "@/Redux/Reducers/CaseDetails/DIPHistoryDetails/DIPHistoryDetailsApi";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import AddNewLenderHistoryModal from "./Modals/AddNewLenderHistoryModal";

const DIPHistoryContent: React.FC<{ dipData: any }> = ({ dipData }) => {
  //   const [hasDecision, setHasDecision] = useState<boolean>(dipData?.has_decision || false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    is_this_application_had_a_decision_in_principle:
      dipData?.is_this_application_had_a_decision_in_principle || false,
    lender: dipData?.lender || "",
    dipDate: dipData?.dip_date || "",
    dipDecision: dipData?.dip_decision || "",
    dipReference: dipData?.dip_reference_number || "",
    notes: dipData?.notes || "",
  });

  const [updateDIPHistoryDetails] = useUpdateDIPHistoryDetailsMutation();
  const { casealias } = useParams();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateDIPHistoryDetails({
        case_alias: casealias,
        dipHistory_alias: dipData?.alias,
        payload: formData,
      }).unwrap();
      toast.success("DIP History updated successfully!");
    } catch (error) {
      toast.error("Failed to update DIP History");
    }
  };

  return (
    <div className="p-3">
      <div className="border rounded p-3 mb-3">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <FormGroup className="mb-4">
                <Label className="mb-2">
                  Has this application had a Decision in Principle?
                </Label>
                <div>
                  {["yes", "no"].map((option) => (
                    <FormGroup key={option.toLowerCase()} check inline>
                      <Input
                        type="radio"
                        id={`radio-${option}`}
                        name="is_this_application_had_a_decision_in_principle"
                        checked={
                          option === "yes"
                            ? formData.is_this_application_had_a_decision_in_principle
                            : !formData.is_this_application_had_a_decision_in_principle
                        }
                        onChange={() =>
                          setFormData((prev) => ({
                            ...prev,
                            is_this_application_had_a_decision_in_principle:
                              option === "yes",
                          }))
                        }
                      />
                      <Label check for={`radio-${option}`}>
                        {option.charAt(0).toUpperCase() +
                          option.slice(1).toLowerCase()}
                      </Label>
                    </FormGroup>
                  ))}
                </div>
              </FormGroup>
            </Col>
          </Row>
          {formData?.is_this_application_had_a_decision_in_principle && (
            <>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Lender</Label>
                    <Input
                      type="select"
                      name="lender"
                      value={formData.lender}
                      onChange={handleInputChange}
                    >
                      <option value="">Select...</option>
                      <option value="Amicus PLC">Amicus PLC</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>DIP Date</Label>
                    <Input
                      type="date"
                      name="dipDate"
                      value={formData.dipDate}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>DIP Decision</Label>
                    <Input
                      type="select"
                      name="dipDecision"
                      value={formData.dipDecision}
                      onChange={handleInputChange}
                    >
                      <option value="">Select...</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Declined">Declined</option>
                      <option value="Referred">Referred</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>DIP Reference Number</Label>
                    <Input
                      type="text"
                      name="dipReference"
                      value={formData.dipReference}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label>Notes</Label>
                    <Input
                      type="textarea"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </>
          )}
          <Row>
            <Col className="mt-4 d-flex justify-content-between align-items-center">
              <Button
                color="secondary"
                className="me-2"
                onClick={() => setModalIsOpen(true)}
                type="button"
              >
                Add New Lender History
              </Button>
              <Button color="primary" type="submit">
                Save History
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      {/* Modal Component */}
      <AddNewLenderHistoryModal
        isOpen={modalIsOpen}
        toggle={() => setModalIsOpen(!modalIsOpen)}
      />
    </div>
  );
};

export default DIPHistoryContent;
