import { useAddCaseMutation } from "@/Redux/Reducers/CommonComponents/Cases/CasesApi";
import { useGetLeadDetailsQuery } from "@/Redux/Reducers/CommonComponents/Directors/LeadDetalisApi";
import { AddNewCaseModalProps } from "@/Types/CommonComponents/Cases/CaseTypes";
import { LeadsInfo } from "@/Types/CommonComponents/Directors/LeadTypes";
import { getCaseUrl } from "@/utils/GetCaseUrl";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
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
  leadId,
  onCaseCreated,
}) => {
  const [leads, setLeads] = useState<LeadsInfo[]>([]);
  // Rtk query
  const { data: leadData, isLoading: leadDataLoading } =
    useGetLeadDetailsQuery(undefined);
  const [addCaseDetails, { isLoading: addCaseLoading }] = useAddCaseMutation();

  const [formData, setFormData] = useState({
    lead: leadId || 0,
    case_category: "",
    applicant_type: "",
    case_status: "",
    // case_stage: "",
    notes: "",
  });

  const { data: session } = useSession();
  const userType = session?.user?.user_type;
  const router = useRouter();

  // Update formData.lead if leadId changes
  React.useEffect(() => {
    if (leadId) {
      setFormData((prev) => ({ ...prev, lead: leadId }));
    }
  }, [leadId]);

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
          lead: leadId || 0,
          case_category: "",
          applicant_type: "",
          case_status: "",
          // case_stage: "",
          notes: "",
        });
        toggle();
        if (onCaseCreated && result.data.alias) {
          handleCaseCreated(result.data.alias);
        }
      } else {
        toast.error("Invalid Request...");
      }
    } catch (error) {
      console.error("Error during request setup:", error);
    }
  };

  const handleCaseCreated = (caseAlias: string) => {
    // Close modals if needed
    toggle();
    // Redirect to the new case page
    router.push(getCaseUrl(caseAlias, userType as string));
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
              disabled={!!leadId}
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
