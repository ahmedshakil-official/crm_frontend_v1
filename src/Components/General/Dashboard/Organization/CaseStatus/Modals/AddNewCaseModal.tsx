import { useAddCaseDetailsMutation } from "@/Redux/Reducers/Cases/CaseDetailsApi";
import { useGetLeadDetailsQuery } from "@/Redux/Reducers/Organization/Directors/LeadDetalisApi";
import { AddNewCaseModalProps } from "@/Types/Organization/CaseTypes";
import { LeadsInfo } from "@/Types/Organization/LeadTypes";
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

const AddNewCaseModal: React.FC<AddNewCaseModalProps> = ({
  isOpen,
  toggle,
}) => {
  const [leads, setLeads] = useState<LeadsInfo[]>([]);
  // Rtk query
  const { data: leadData, isLoading: leadDataLoading } =
    useGetLeadDetailsQuery(undefined);
  const [addCaseDetails, { isLoading: addCaseLoading }] =
    useAddCaseDetailsMutation();

  const [formData, setFormData] = useState({
    lead: 0,
    case_category: "",
    applicant_type: "",
    case_status: "",
    case_stage: "",
    notes: "",
  });

  // Fetch leads data from backend
  useEffect(() => {
    if (leadData) {
      const leadsData = Array.isArray(leadData) ? leadData : leadData.leads;
      setLeads(leadsData || []);
    }
  }, [leadData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "lead" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await addCaseDetails({
        payload: formData,
      });
      if (result.data) {
        toast.success("Case added successfully!");
        setFormData({
          lead: 0,
          case_category: "",
          applicant_type: "",
          case_status: "",
          case_stage: "",
          notes: "",
        });
        toggle();
      } else {
        toast.error("Invalid Request...");
      }
    } catch (error) {
      console.error("Error during request setup:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add New Case</ModalHeader>
      <Form onSubmit={handleSubmit}>
        <ModalBody>
          <FormGroup>
            <Label for="lead">
              Lead<span className="text-danger">*</span>
            </Label>
            <Input
              id="lead"
              name="lead"
              type="select"
              required
              value={formData.lead}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              {leads.map((lead) => (
                <option key={lead.user.id} value={lead.user.id}>
                  {`${lead.user?.first_name} ${lead.user?.last_name}`}
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="case_category">
              Case Category<span className="text-danger">*</span>
            </Label>
            <Input
              id="case_category"
              name="case_category"
              type="select"
              required
              value={formData.case_category}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="MORTGAGE">Mortgage</option>
              <option value="PROTECTION">Protection</option>
              <option value="GENERAL_INSURANCE">General Insurance</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="case_stage">
              Case Stage<span className="text-danger">*</span>
            </Label>
            <Input
              id="case_stage"
              name="case_stage"
              type="select"
              required
              value={formData.case_stage}
              onChange={handleChange}
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
              id="notes"
              name="notes"
              type="textarea"
              value={formData.notes}
              onChange={handleChange}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary" disabled={addCaseLoading}>
            {addCaseLoading ? "Saving..." : "Save"}
          </Button>
          <Button
            type="button"
            color="secondary"
            onClick={toggle}
            disabled={addCaseLoading}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default AddNewCaseModal;
