import { useUpdateCaseDetailsMutation } from "@/Redux/Reducers/CaseDetails/CaseDetailsApi";
import { CaseInfo, UpdateCaseModalProps } from "@/Types/Organization/CaseTypes";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const UpdateCaseModal: React.FC<UpdateCaseModalProps> = ({
  isOpen,
  toggle,
  caseData,
}) => {
  const [formData, setFormData] = useState<CaseInfo>(caseData);

  const [updateCaseDetails, { isLoading: isUpdating }] =
    useUpdateCaseDetailsMutation();

  // Compare current data with the original data
  const hasChanges = JSON.stringify(formData) !== JSON.stringify(caseData);

  useEffect(() => {
    setFormData(caseData);
  }, [caseData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await updateCaseDetails({
        caseAlias: caseData?.alias,
        payload: formData,
      });
      toggle();
      toast.success("Case updated successfully.");
    } catch (error) {
      console.error("Error updating case:", error);
      toast.error("Failed to update the case. Please try again.");
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>Update Case</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="case_category">Case Category</Label>
            <Input
              type="select"
              name="case_category"
              id="case_category"
              value={formData?.case_category}
              onChange={handleInputChange}
            >
              <option value="">Select...</option>
              <option value="MORTGAGE">Mortgage</option>
              <option value="PROTECTION">Protection</option>
              <option value="GENERAL_INSURANCE">General Insurance</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="case_stage">Case Stage</Label>
            <Input
              type="select"
              name="case_stage"
              id="case_stage"
              value={formData?.case_stage}
              onChange={handleInputChange}
            >
              <option value="">Select...</option>
              <option value="INQUIRY">Inquiry</option>
              <option value="FACT_FIND">Fact Find</option>
              <option value="RESEARCH_COMPLIANCE_CHECK">
                Research and Compliance Check
              </option>
              <option value="DECISION_IN_PRINCIPLE">
                Decision in Principle
              </option>
              <option value="FULL_MORTGAGE_APPLICATION">
                Full Mortgage Application
              </option>
              <option value="OFFER_FROM_BANK">Offer From Bank</option>
              <option value="LEGAL">Legal</option>
              <option value="COMPLETION">Completion</option>
              <option value="FUTURE_OPPORTUNITY">Future Opportunity</option>
              <option value="NOT_PROCEED">Not Proceed</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="notes">Notes</Label>
            <Input
              type="textarea"
              name="notes"
              id="notes"
              value={formData?.notes}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={handleSubmit}
          disabled={!hasChanges || isUpdating}
        >
          {isUpdating ? "Saving..." : "Save Changes"}
        </Button>
        <Button color="secondary" onClick={toggle} disabled={isUpdating}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UpdateCaseModal;
