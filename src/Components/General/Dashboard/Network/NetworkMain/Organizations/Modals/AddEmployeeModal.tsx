import { AddEmployeeModalProps } from "@/Types/Network/OrganizationsTypes";
import { useState } from "react";
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

const AddEmployeeModal: React.FC<AddEmployeeModalProps> = ({
  isOpen,
  toggle,
}) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    designation: "",
    department: "",
    join_date: "",
    employee_id: "",
    profile_image: null as File | null,
    status: "ACTIVE",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profile_image: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add submission logic here
    console.log(formData);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>
        <span className="fs-4 text-primary">Add Employee</span>
      </ModalHeader>
      <Form onSubmit={handleSubmit}>
        <ModalBody className="p-4">
          <Row className="g-3">
            <Col md={6}>
              <FormGroup>
                <Label for="first_name">
                  First Name<span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="last_name">
                  Last Name<span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
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
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="phone">
                  Phone<span className="text-danger">*</span>
                </Label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="employee_id">
                  Employee ID<span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  name="employee_id"
                  value={formData.employee_id}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="designation">
                  Designation<span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="department">
                  Department<span className="text-danger">*</span>
                </Label>
                <Input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="join_date">
                  Join Date<span className="text-danger">*</span>
                </Label>
                <Input
                  type="date"
                  name="join_date"
                  value={formData.join_date}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="status">Status</Label>
                <Input
                  type="select"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="ACTIVE">Active</option>
                  <option value="INACTIVE">Inactive</option>
                  <option value="ON_LEAVE">On Leave</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="profile_image">Profile Image</Label>
                <Input
                  type="file"
                  name="profile_image"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter className="bg-light">
          <Button color="secondary" onClick={toggle}>
            <i className="fa-solid fa-times me-2"></i>
            Cancel
          </Button>
          <Button color="primary" type="submit">
            <i className="fa-solid fa-save me-2"></i>
            Save Employee
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default AddEmployeeModal;
