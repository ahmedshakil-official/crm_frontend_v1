import apiClient from "@/services/api-client";
import { UpdateOrganizationModalProps } from "@/Types/Network/OrganizationsTypes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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

const UpdateOrganizationModal: React.FC<UpdateOrganizationModalProps> = ({
  isOpen,
  toggle,
  slug,
  organizationData, // Receive organization data
  onUpdateSuccess,
}) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    primary_mobile: "",
    other_contact: "",
    website: "",
    license_no: "",
    contact_person: "",
    contact_person_designation: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [oldName, setOldName] = useState("");

  // Set initial form values when modal opens
  useEffect(() => {
    if (organizationData && isOpen) {
      setFormData({
        name: organizationData.name || "",
        email: organizationData.email || "",
        primary_mobile: organizationData.primary_mobile || "",
        other_contact: organizationData.other_contact || "",
        website: organizationData.website || "",
        license_no: organizationData.license_no || "",
        contact_person: organizationData.contact_person || "",
        contact_person_designation:
          organizationData.contact_person_designation || "",
      });
      setOldName(organizationData.name || "");
    }
  }, [organizationData, isOpen]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await apiClient.put(`/organization/list/${slug}/`, formData);

      toast.success("Organization updated successfully!");

      // ✅ If name changed, redirect to dashboard
      if (formData.name !== oldName) {
        router.push("/dashboard/network");
        toast.success(
          "Due to the name change, redirected to the network page."
        );
      } else {
        onUpdateSuccess();
        toggle();
      }
    } catch (error) {
      console.error("Error updating organization:", error);
      toast.error("Invalid Request...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>Update Organization</ModalHeader>
      <ModalBody>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Row>
            <Col md={6} xs={12}>
              <Row>
                <FormGroup>
                  <Label for="name">Organization Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <Row>
                  <FormGroup>
                    <Label for="primary_mobile">Primary Phone</Label>
                    <Input
                      type="text"
                      id="primary_mobile"
                      name="primary_mobile"
                      value={formData.primary_mobile}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <Label for="website">Website</Label>
                    <Input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <Label for="contact_person">Contact Person</Label>
                    <Input
                      type="text"
                      id="contact_person"
                      name="contact_person"
                      value={formData.contact_person}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Row>
              </Row>
            </Col>
            <Col md={6} xs={12}>
              <Row>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Label for="other_contact">Other Contact</Label>
                  <Input
                    type="text"
                    id="other_contact"
                    name="other_contact"
                    value={formData.other_contact}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Row>
              <Row>
                {" "}
                <FormGroup>
                  <Label for="license_no">License No</Label>
                  <Input
                    type="text"
                    id="license_no"
                    name="license_no"
                    value={formData.license_no}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Label for="contact_person_designation">
                    Contact Person Designation
                  </Label>
                  <Input
                    type="text"
                    id="contact_person_designation"
                    name="contact_person_designation"
                    value={formData.contact_person_designation}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Row>
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UpdateOrganizationModal;
