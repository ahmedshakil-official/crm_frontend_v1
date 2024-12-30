import apiClient from "@/services/api-client";
import { AddIntroducerModalProps } from "@/Types/Organization/IntroducerTypes";
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

const AddIntroducerModal: React.FC<AddIntroducerModalProps> = ({
  isOpen,
  toggle,
  onSave,
}) => {
  const [isLoading, setIsLoading] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveIntroducer = async () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

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
      setIsLoading(true);
      const result = await apiClient.post("/director/introducers/", payload);
      if (result.status >= 200 && result.status < 300) {
        toast.success("Introducer added successfully.");
        // Reset form and close modal
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
        toggle();
        onSave();
      } else {
        toast.error("Invalid Request...");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error creating introducer:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>Add Introducer</ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            {/* First Column */}
            <Col md="6" xs="12">
              <Row>
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
              </Row>
              <Row>
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
              </Row>
              <Row>
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
              </Row>
              <Row>
                <Col md="6" xs="12">
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
                <Col md="6" xs="12">
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
                      <option value="">--Select Gender--</option>
                      <option value="MALE">MALE</option>
                      <option value="FEMALE">FEMALE</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
            </Col>

            {/* Second Column */}
            <Col md="6" xs="12">
              <Row>
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
              </Row>
              <Row>
                <Col md="6" xs="12">
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
                <Col md="6" xs="12">
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
                <Col md="6" xs="12">
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
                <Col md="6" xs="12">
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
              </Row>
              <Row>
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
              </Row>
            </Col>
            <Row>
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
            </Row>
            <Row>
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
            </Row>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSaveIntroducer}>
          {isLoading ? "Saving..." : "Save"}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddIntroducerModal;
