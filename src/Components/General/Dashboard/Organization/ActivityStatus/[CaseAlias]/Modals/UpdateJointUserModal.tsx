import apiClient from "@/services/api-client";
import { useParams } from "next/navigation";
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

interface UpdateJointUserModalProps {
  isOpen: boolean;
  toggle: () => void;
  user: any;
  alias?: string;
  onSave: () => void;
}

const UpdateJointUserModal: React.FC<UpdateJointUserModalProps> = ({
  isOpen,
  toggle,
  user,
  alias,
  onSave,
}) => {
  const params = useParams();
  const { casealias } = params;

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    relationship: "",
  });
  const [isUpdating, setisUpdating] = useState(false);

  // Populate formData when user changes
  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user?.joint_user_details?.first_name || "",
        last_name: user?.joint_user_details?.last_name || "",
        email: user?.joint_user_details?.email || "",
        phone: user?.joint_user_details?.phone || "",
        relationship: user?.relationship || "",
      });
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      setisUpdating(true);
      const result = await apiClient.patch(
        `/cases/${casealias}/joint/users/${user.alias}/`,
        formData
      );
      toast.success("User updated successfully!");
      onSave(); // Refresh the user info after update
      toggle(); // Close the modal after save
    } catch (error) {
      console.error("Error updating joint user info:", error);
      toast.error("Failed to update user information.");
    } finally {
      setisUpdating(false);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Joint User</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              id="firstName"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="relationship">Relationship</Label>
            <Input
              id="relationship"
              name="relationship"
              value={formData.relationship}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          {isUpdating ? "Updating..." : "Update"}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UpdateJointUserModal;
