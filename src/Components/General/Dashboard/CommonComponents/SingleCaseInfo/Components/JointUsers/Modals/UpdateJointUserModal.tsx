import { useUpdateJointUserInfoMutation } from "@/Redux/Reducers/CommonComponents/SingleCaseInfo/JointUser/JointUserDetailsApi";
import { UpdateJointUserModalProps } from "@/Types/CommonComponents/SingleCaseInfo/JointUser/JointUserTypes";
import { isEqual } from "lodash";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
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

const UpdateJointUserModal: React.FC<UpdateJointUserModalProps> = ({
  isOpen,
  toggle,
  user,
}) => {
  const params = useParams();
  const { casealias } = params;
  const [updateJointUserInfo, { isLoading }] = useUpdateJointUserInfoMutation();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    relationship: "",
    notes: "",
  });

  // Populate formData when user changes
  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user?.joint_user_details?.first_name || "",
        last_name: user?.joint_user_details?.last_name || "",
        email: user?.joint_user_details?.email || "",
        phone: user?.joint_user_details?.phone || "",
        relationship: user?.relationship || "",
        notes: user?.notes || "",
      });
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    // Determine if the email has changed
    const originalEmail = user?.joint_user_details?.email || "";
    const hasEmailChanged = formData.email !== originalEmail;

    // Prepare the payload, conditionally including the email field
    const payload = {
      case_alias: casealias,
      userAlias: user.alias,
      updatedJointuserInfo: {
        joint_user: {
          first_name: formData.first_name,
          last_name: formData.last_name,
          phone: formData.phone,

          ...(hasEmailChanged && { email: formData.email }), // Only include email if it has changed
        },
        relationship: formData.relationship,
        notes: formData.notes,
      },
    };

    const res = await updateJointUserInfo(payload);

    if (res.data) {
      toast.success("User updated successfully!");
      toggle();
    } else if ("error" in res) {
      const errorMessage =
        (res.error as any)?.data?.joint_user?.email?.[0] ||
        "Failed to update user information.";
      toast.error(errorMessage);
    }
  };

  // Compare current data with the original data
  const hasChanges = !isEqual(formData, {
    first_name: user?.joint_user_details?.first_name || "",
    last_name: user?.joint_user_details?.last_name || "",
    email: user?.joint_user_details?.email || "",
    phone: user?.joint_user_details?.phone || "",
    relationship: user?.relationship || "",
    notes: user?.notes || "",
  });

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <span className="fs-4 text-primary">Update Joint User</span>
      </ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            <Col xl={6} md={12}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col xl={6} md={12}>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xl={6} md={12}>
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
            </Col>
            <Col xl={6} md={12}>
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
            </Col>
          </Row>
          <Row>
            <Col xl={6} md={12}>
              <FormGroup>
                <Label for="relationship">Relationship</Label>
                <Input
                  type="text"
                  id="relationship"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col xl={6} md={12}>
              <FormGroup>
                <Label for="notes">Note</Label>
                <Input
                  type="textarea"
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>{" "}
        <Button
          color="primary"
          onClick={handleSave}
          disabled={!hasChanges || isLoading}
        >
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UpdateJointUserModal;
