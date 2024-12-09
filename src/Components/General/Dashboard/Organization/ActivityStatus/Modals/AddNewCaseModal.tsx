import apiClient from "@/services/api-client";
import React, { useEffect, useState } from "react";
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

interface AddNewCaseModalProps {
  isOpen: boolean;
  toggle: () => void;
  onSave: () => void;
}

interface Lead {
  alias: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
  };
}

const AddNewCaseModal: React.FC<AddNewCaseModalProps> = ({
  isOpen,
  toggle,
  onSave,
}) => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [formData, setFormData] = useState({
    lead: 0,
    case_category: "",
    applicant_type: "",
    case_status: "",
    case_stage: "",
    notes: "hii",
  });

  // Fetch leads data from backend
  const fetchLeadsForCaseModal = async () => {
    try {
      const response = await apiClient.get("/director/leads/");
      const LeadsData = Array.isArray(response.data)
        ? response.data
        : response.data.leads;
      setLeads(LeadsData || []);
    } catch (error) {
      console.error("Error fetching Leads:", error);
      setLeads([]);
    }
  };

  useEffect(() => {
    fetchLeadsForCaseModal();
  }, []);


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
      await apiClient.post("/cases/", formData);
      onSave(); // Notify parent to refresh data
      toggle(); // Close modal
    } catch (error: any) {
      if (error.response) {
        console.error("Backend Error:", error.response.data);
      } else if (error.request) {
        console.error("No response from server:", error.request);
      } else {
        console.error("Error during request setup:", error.message);
      }
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
              <option value="">Select Lead</option>
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
              <option value="">Select Category</option>
              <option value="MORTGAGES">Mortgages</option>
              <option value="PROTECTION">Protection</option>
              <option value="GENERAL_INSURANCE">General Insurance</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="applicant_type">
              Applicant Type<span className="text-danger">*</span>
            </Label>
            <Input
              id="applicant_type"
              name="applicant_type"
              type="select"
              required
              value={formData.applicant_type}
              onChange={handleChange}
            >
              <option value="">Applicant Type</option>
              <option value="SINGLE">Single</option>
              <option value="JOINT">Joint</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="case_status">
              Case Status<span className="text-danger">*</span>
            </Label>
            <Input
              id="case_status"
              name="case_status"
              type="select"
              required
              value={formData.case_status}
              onChange={handleChange}
            >
              <option value="">Case Status</option>
              <option value="NEW_LEAD">New Lead</option>
              <option value="CALL_BACK">Call Back</option>
              <option value="MEETING">Meeting</option>
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
              <option value="">Case Stage</option>
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
          <Button type="submit" color="primary">
            Save
          </Button>
          <Button type="button" color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default AddNewCaseModal;
