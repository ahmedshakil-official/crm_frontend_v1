import apiClient from "@/services/api-client";
import { AddJointUserModalProps } from "@/Types/Organization/JointUserTypes";
import { useParams } from "next/navigation";
import { useState } from "react";
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

const AddJointUserModal: React.FC<AddJointUserModalProps> = ({
  isOpen,
  toggle,
  onSave,
}) => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [isSaving, setisSaving] = useState(false);
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
    // Construct payload as per original format
    const payload = {
      joint_user: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        profileImage: profileImage, // Include file as is
      },
      relationship: formData.relationship,
      notes: formData.notes,
    };

    try {
      setisSaving(true);
      // Make the API request
      const response = await apiClient.post(
        `/cases/${casealias}/joint/users/`,
        payload,
        { headers: { "Content-Type": "application/json" } } // Use JSON headers
      );

      toast.success("Joint user added successfully!");
      onSave(); // Callback to refresh data
      toggle(); // Close modal
    } catch (error) {
      console.error("Error adding joint user:", error);
      toast.error("Failed to add joint user.");
    } finally {
      setisSaving(false);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Joint User</ModalHeader>
      <ModalBody>
        <Form>
          {/* First Name */}
          <FormGroup>
            <Label for="first_name" className="form-label">
              First Name
            </Label>
            <Input
              type="text"
              id="first_name"
              name="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </FormGroup>

          {/* Last Name */}
          <FormGroup>
            <Label for="last_name" className="form-label">
              Last Name
            </Label>
            <Input
              type="text"
              id="last_name"
              name="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </FormGroup>

          {/* Phone */}
          <FormGroup>
            <Label for="phone" className="form-label">
              Phone
            </Label>
            <Input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </FormGroup>

          {/* Email */}
          <FormGroup>
            <Label for="email" className="form-label">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormGroup>

          {/* Password */}
          <FormGroup>
            <Label for="password" className="form-label">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </FormGroup>

          {/* Relationship */}
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

          {/* Profile Image */}
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

          {/* Notes */}
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
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>
          {isSaving ? "Saving..." : "Save"}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddJointUserModal;
