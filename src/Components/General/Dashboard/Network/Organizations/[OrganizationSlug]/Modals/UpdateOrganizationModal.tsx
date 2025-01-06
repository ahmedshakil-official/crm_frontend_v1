import apiClient from "@/services/api-client";
import { UpdateOrganizationModalProps } from "@/Types/Network/OrganizationsTypes";
import Image from "next/image";
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
  organizationData,
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

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [logo, setLogo] = useState<File | null>(null);
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

  // Handle input change for text fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      if (name === "profile_image") {
        setProfileImage(files[0]);
      } else if (name === "logo") {
        setLogo(files[0]);
      }
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const formDataToSend = new FormData();

      // Append text fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      // Append files if selected
      if (profileImage) {
        formDataToSend.append("profile_image", profileImage);
      }
      if (logo) {
        formDataToSend.append("logo", logo);
      }
      await apiClient.put(`/organization/list/${slug}/`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Organization updated successfully!");
      // Redirect if name changed
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
              {/* Logo Upload */}
              <FormGroup>
                <Label for="logo">Logo</Label>
                <Input
                  type="file"
                  id="logo"
                  name="logo"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {organizationData?.logo && (
                  <Image
                    src={organizationData.logo}
                    alt="Logo"
                    className="mt-2 rounded-3"
                    width={100}
                    height={80}
                  />
                )}
              </FormGroup>
            </Col>
            <Col md={6} xs={12}>
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
              </FormGroup>{" "}
              {/* Profile Image Upload */}
              <FormGroup>
                <Label for="profile_image">Profile Image</Label>
                <Input
                  type="file"
                  id="profile_image"
                  name="profile_image"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {organizationData?.profile_image && (
                  <Image
                    src={organizationData.profile_image}
                    alt="Profile"
                    className="mt-2"
                    width={100}
                    height={80}
                  />
                )}
              </FormGroup>
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
