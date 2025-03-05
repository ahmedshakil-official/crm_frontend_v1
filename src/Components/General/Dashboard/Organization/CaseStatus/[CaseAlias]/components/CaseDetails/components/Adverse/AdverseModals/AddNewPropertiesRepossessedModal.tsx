import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

interface AddNewPropertiesRepossessedModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const AddNewPropertiesRepossessedModal: React.FC<
  AddNewPropertiesRepossessedModalProps
> = ({ isOpen, toggle }) => {
  const [lenderName, setLenderName] = useState<string>("");
  const [registeredDate, setRegisteredDate] = useState<string>("");
  const [satisfiedDate, setSatisfiedDate] = useState<string>("");

  const handleSubmit = () => {
    console.log({
      lenderName,
      registeredDate,
      satisfiedDate,
    });
    toggle(); // Close modal after submit
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="xl">
      {/* Modal Header */}
      <ModalHeader toggle={toggle}>
        <h2>Add New Properties Repossessed</h2>
      </ModalHeader>

      {/* Modal Body */}
      <ModalBody className="p-5">
        <Row>
          {/* Lender Name Field */}
          <Col sm={6}>
            <FormGroup>
              <Label for="LenderName">Lender</Label>
              <Input
                id="LenderName"
                name="LenderName"
                type="text"
                value={lenderName}
                onChange={(e) => setLenderName(e.target.value as string)}
                className="form-control"
                placeholder="Enter lender name"
              />
            </FormGroup>
          </Col>

          {/* Registered Date Field */}
          <Col sm={6}>
            <FormGroup>
              <Label for="RegisteredDate">Date of Registration</Label>
              <Input
                id="RegisteredDate"
                name="RegisteredDate"
                type="date"
                value={registeredDate}
                onChange={(e) => setRegisteredDate(e.target.value as string)}
                className="form-control"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          {/* Satisfied Date Field */}
          <Col sm={6}>
            <FormGroup>
              <Label for="SatisfiedDate">Date of Satisfaction</Label>
              <Input
                id="SatisfiedDate"
                name="SatisfiedDate"
                type="date"
                value={satisfiedDate}
                onChange={(e) => setSatisfiedDate(e.target.value as string)}
                className="form-control"
              />
            </FormGroup>
          </Col>
        </Row>
      </ModalBody>

      {/* Modal Footer */}
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddNewPropertiesRepossessedModal;
