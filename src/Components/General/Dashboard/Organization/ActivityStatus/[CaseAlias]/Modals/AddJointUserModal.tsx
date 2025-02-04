import apiClient from "@/services/api-client";
import { AddJointUserModalProps } from "@/Types/Organization/JointUserTypes";
import { useParams } from "next/navigation";
import { useState } from "react";
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

const AddJointUserModal: React.FC<AddJointUserModalProps> = ({
  isOpen,
  toggle,
  onSave,
}) => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { casealias } = params;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    relationship: "",
    profileImage: "",
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    const payload = {
      joint_user: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        profileImage: profileImage,
      },
      relationship: formData.relationship,
      notes: formData.notes,
    };

    try {
      setIsLoading(true);
      const response = await apiClient.post(
        `/cases/${casealias}/joint/users/`,
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success("Joint user added successfully!");
      onSave();
      toggle();
    } catch (error) {
      console.error("Error adding joint user:", error);
      toast.error("Failed to add joint user.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>Add Joint User</ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            <Col xs={12} md={6}>
              <FormGroup>
                <Label for="first_name" className="form-label">
                  First Name<span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  id="first_name"
                  name="firstName"
                  required
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup>
                <Label for="last_name" className="form-label">
                  Last Name<span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  id="last_name"
                  name="lastName"
                  required
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <FormGroup>
                <Label for="email" className="form-label">
                  Email<span className="text-danger">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup>
                <Label for="phone" className="form-label">
                  Phone<span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <FormGroup>
                <Label for="password" className="form-label">
                  Password<span className="text-danger">*</span>
                </Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup>
                <Label for="relationship" className="form-label">
                  Relationship
                </Label>
                <Input
                  type="text"
                  id="relationship"
                  name="relationship"
                  placeholder="Enter relationship"
                  value={formData.relationship}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FormGroup>
                <Label for="profile_image" className="form-label">
                  Profile Image
                </Label>
                <Input
                  type="file"
                  id="profile_image"
                  name="profileImage"
                  onChange={handleFileChange}
                />
              </FormGroup>
            </Col>
            <Col xs={12}>
              <FormGroup>
                <Label for="notes" className="form-label">
                  Notes
                </Label>
                <Input
                  type="textarea"
                  id="notes"
                  name="notes"
                  placeholder="Enter notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit} block={isLoading}>
          {isLoading ? "Saving..." : "Save"}
        </Button>
        <Button color="secondary" onClick={toggle} block>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddJointUserModal;
