import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

interface AddNewLenderHistoryModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const AddNewLenderHistoryModal: React.FC<AddNewLenderHistoryModalProps> = ({
  isOpen,
  toggle,
}) => {
  const [formData, setFormData] = useState({
    lender: "",
    dipDate: "",
    dipDecision: "",
    dipReference: "",
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>
       <span className="fs-4 text-primary">Add New Lender History</span> </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Lender</Label>
                <Input
                  type="select"
                  name="lender"
                  value={formData.lender}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="Amicus PLC">Amicus PLC</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>DIP Date</Label>
                <Input
                  type="date"
                  name="dipDate"
                  value={formData.dipDate}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>DIP Decision</Label>
                <Input
                  type="select"
                  name="dipDecision"
                  value={formData.dipDecision}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Declined">Declined</option>
                  <option value="Referred">Referred</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>DIP Reference Number</Label>
                <Input
                  type="text"
                  name="dipReference"
                  value={formData.dipReference}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label>Notes</Label>
                <Input
                  type="textarea"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-4 d-flex justify-content-end gap-2">
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Save History
              </Button>
            </Col>
          </Row>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default AddNewLenderHistoryModal;
