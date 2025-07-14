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
  InputGroupText,
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
  const [submitType, setSubmitType] = useState<"lead" | "case" | null>(null);

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
    <Modal isOpen={isOpen} toggle={toggle} size="lg" centered>
      <ModalHeader toggle={toggle}>
        <span className="fs-4 text-primary">Add Lead</span>
      </ModalHeader>
      <Form
        onSubmit={(e) => {
          if (submitType === "lead") {
            handleSaveLead(e);
          } else if (submitType === "case") {
            handleSaveAndCreateCase(e);
          }
        }}
      >
        <ModalBody>
          <Row>
            {/* <Col md={6}>
              <FormGroup>
                <Label for="title">
                  Title<span className="text-danger">*</span>
                </Label>
                <Input
                  id="title"
                  name="title"
                  type="select"
                  value={formData.title || ""}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="MR">Mr.</option>
                  <option value="MRS">Mrs.</option>
                  <option value="MS">Ms.</option>
                  <option value="MISS">Miss.</option>
                </Input>
              </FormGroup>
            </Col> */}
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
            {/* <Col md={6}>
              <FormGroup>
                <Label for="middleName">Middle Name(s)</Label>
                <Input
                  id="middleName"
                  name="middleName"
                  type="text"
                  value={formData.middleName || ""}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col> */}
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
            {/* <Col md={6}>
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
            </Col> */}
            {/* <Col md={6}>
              <FormGroup>
                <Label for="HomeTelephone">Home Telephone</Label>
                <Input
                  id="HomeTelephone"
                  name="HomeTelephone"
                  type="text"
                  value={formData.home_telephone || ""}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col> */}
            <Col md={6}>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone || ""}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            {/* <Col md={6}>
              <FormGroup>
                <Label for="WorkNumber">Work Number</Label>
                <Input
                  id="WorkNumber"
                  name="WorkNumber"
                  type="text"
                  value={formData.work_number || ""}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col> */}
            <Col md={6}>
              <Label for="dob">Date of Birth</Label>
              <FormGroup className="d-flex">
                <Input
                  id="dob"
                  name="dob"
                  type="date"
                  className="rounded-end-0"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
                <InputGroupText
                  className="border-start-0 rounded-start-0"
                  style={{ padding: "6px 10px" }}
                >
                  {formData.dob
                    ? Math.floor(
                        (new Date().getTime() -
                          new Date(formData.dob).getTime()) /
                          (1000 * 60 * 60 * 24 * 365.25)
                      ) + "y"
                    : "0y"}
                </InputGroupText>
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
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHER">Other</option>
                </Input>
              </FormGroup>
            </Col>
            {/* </Row>

          <Row> */}
            <Col md={6}>
              <FormGroup>
                <Label for="address_l1">Address L1</Label>
                <Input
                  id="address_l1"
                  name="address_l1"
                  type="text"
                  value={formData.present_address}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            color="primary"
            onClick={() => setSubmitType("lead")}
          >
            {isLoading ? "Saving..." : "Save Lead"}
          </Button>
          <Button
            type="submit"
            color="success"
            onClick={() => setSubmitType("case")}
          >
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
