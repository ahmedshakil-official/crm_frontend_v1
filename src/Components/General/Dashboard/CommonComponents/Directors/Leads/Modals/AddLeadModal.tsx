import { useAddLeadDetailsMutation } from "@/Redux/Reducers/CommonComponents/Directors/LeadDetalisApi";
import { AddLeadModalProps } from "@/Types/CommonComponents/Directors/LeadTypes";
import { getCaseUrl } from "@/utils/GetCaseUrl";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import AddNewCaseModal from "../../../Cases/Cases/Modals/AddNewCaseModal";

const AddLeadModal: React.FC<AddLeadModalProps> = ({ isOpen, toggle }) => {
  const [addLeadDetails, { isLoading }] = useAddLeadDetailsMutation();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    designation: "",
    permanent_address: "",
    present_address: "",
    dob: "",
    gender: "",
    joining_date: "",
    registration_number: "",
    degree: "",
  });

  // Add state for AddNewCaseModal
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false);
  const toggleCaseModal = () => setIsCaseModalOpen((prev) => !prev);

  const [createdLeadId, setCreatedLeadId] = useState<number | null>(null);

  const { data: session } = useSession();
  const userType = session?.user?.user_type;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveAndCreateCase = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      user: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        password: formData.password,
      },
      designation: formData.designation || null,
      permanent_address: formData.permanent_address || null,
      present_address: formData.present_address || null,
      dob: formData.dob || null,
      gender: formData.gender,
      joining_date: formData.joining_date || null,
      registration_number: formData.registration_number || null,
      degree: formData.degree || null,
    };

    try {
      const result = await addLeadDetails({ payload });
      if (result.data) {
        toast.success("Lead added successfully.");
        const leadId = result.data.user?.id;
        setCreatedLeadId(leadId);
        setIsCaseModalOpen(true);
      } else if ("error" in result) {
        const errorMessage =
          (result.error as any)?.data?.user?.email?.[0] || "Invalid Request...";
        toast.error(errorMessage);
      } else {
        toast.error("Invalid Request...");
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.user?.email?.[0] ||
        "An error occurred. Please try again.";
      toast.error(errorMessage);
      console.error("Error creating lead:", error);
    }
  };

  const handleCaseCreated = (caseAlias: string) => {
    setIsCaseModalOpen(false);
    toggle();
    router.push(getCaseUrl(caseAlias, userType as string));
  };

  const handleSaveLead = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      user: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        password: formData.password,
      },
      designation: formData.designation || null,
      permanent_address: formData.permanent_address || null,
      present_address: formData.present_address || null,
      dob: formData.dob || null,
      gender: formData.gender,
      joining_date: formData.joining_date || null,
      registration_number: formData.registration_number || null,
      degree: formData.degree || null,
    };

    try {
      const result = await addLeadDetails({ payload });
      if (result.data) {
        toast.success("Lead added successfully.");
        // Clear form data
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          designation: "",
          permanent_address: "",
          present_address: "",
          dob: "",
          gender: "",
          joining_date: "",
          registration_number: "",
          degree: "",
        });
        toggle(); // Close the modal
      } else if ("error" in result) {
        const errorMessage =
          (result.error as any)?.data?.user?.email?.[0] || "Invalid Request...";
        toast.error(errorMessage);
      } else {
        toast.error("Invalid Request...");
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.user?.email?.[0] ||
        "An error occurred. Please try again.";
      toast.error(errorMessage);
      console.error("Error creating lead:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>
        <span className="fs-4 text-primary">Add Lead</span>
      </ModalHeader>
      <Form onSubmit={handleSaveAndCreateCase}>
        <ModalBody>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="firstName">
                  First Name<span className="text-danger">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastName">
                  Last Name<span className="text-danger">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="email">
                  Email<span className="text-danger">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="password">
                  Password<span className="text-danger">*</span>
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="gender">
                  Gender<span className="text-danger">*</span>
                </Label>
                <Input
                  id="gender"
                  name="gender"
                  type="select"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="degree">Degree</Label>
                <Input
                  id="degree"
                  name="degree"
                  type="text"
                  value={formData.degree}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="joining_date">Joining Date</Label>
                <Input
                  id="joining_date"
                  name="joining_date"
                  type="date"
                  value={formData.joining_date}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="designation">Designation</Label>
                <Input
                  id="designation"
                  name="designation"
                  type="text"
                  value={formData.designation}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="registration_number">Registration Number</Label>
                <Input
                  id="registration_number"
                  name="registration_number"
                  type="text"
                  value={formData.registration_number}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="present_address">Present Address</Label>
                <Input
                  id="present_address"
                  name="present_address"
                  type="text"
                  value={formData.present_address}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="permanent_address">Permanent Address</Label>
                <Input
                  id="permanent_address"
                  name="permanent_address"
                  type="text"
                  value={formData.permanent_address}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSaveLead}>
            {isLoading ? "Saving..." : "Save Lead"}
          </Button>
          <Button color="success" onClick={handleSaveAndCreateCase}>
            Save & Create Case
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
      <AddNewCaseModal
        isOpen={isCaseModalOpen}
        toggle={toggleCaseModal}
        leadId={createdLeadId || undefined}
        onCaseCreated={handleCaseCreated}
      />
    </Modal>
  );
};

export default AddLeadModal;
