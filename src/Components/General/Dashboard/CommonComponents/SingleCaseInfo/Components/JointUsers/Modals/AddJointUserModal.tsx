import { useAddJointUserInfoMutation } from "@/Redux/Reducers/CommonComponents/SingleCaseInfo/JointUser/JointUserDetailsApi";
import { AddJointUserModalProps } from "@/Types/CommonComponents/SingleCaseInfo/JointUser/JointUserTypes";
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
}) => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const params = useParams();
  const { casealias } = params;
  const [addJointUserInfo, { isLoading: isAddingJointUser }] =
    useAddJointUserInfoMutation(undefined);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      joint_user: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
      },
      relationship: formData.relationship,
      notes: formData.notes,
    };
    const res = await addJointUserInfo({
      case_alias: casealias,
      jointuserInfo: payload,
    });
    if (res.data) {
      toast.success("Joint user added successfully!");
      // Reset form data after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        relationship: "",
        profileImage: "",
        notes: "",
      });
      toggle();
    } else if ("error" in res) {
      const errorMessage =
        (res.error as any)?.data?.joint_user?.email?.[0] ||
        "Failed to add joint user.";
      toast.error(errorMessage);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>
        <span className="fs-4 text-primary">Add Joint User</span>
      </ModalHeader>
      <Form onSubmit={handleSubmit}>
        <ModalBody>
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
            <Col xs={12} md={6}>
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
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle} block>
            Cancel
          </Button>
          <Button color="primary" block={isAddingJointUser}>
            {isAddingJointUser ? "Saving..." : "Save Joint User"}
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default AddJointUserModal;
