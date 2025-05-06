import { ExtraAnswerModalProps } from "@/Types/Organization/Cases/CaseDetails/SuitabilityTypes";
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
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const ExtraAnswerModal: React.FC<ExtraAnswerModalProps> = ({
  isOpen,
  toggle,
}) => {
  const [answer, setAnswer] = useState("");
  const [selectedType, setSelectedType] = useState("GENERAL");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAnswer("");
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <Form onSubmit={handleSubmit}>
        <ModalHeader toggle={toggle}>
          <h4 className="text-success">Add Circumstances Objectives Answer</h4>
        </ModalHeader>
        <ModalBody>
          <Col md={4}>
            <Label for="circumstances_type">Circumstances Type</Label>
            <FormGroup>
              <Input
                type="select"
                name="circumstances_type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="GENERAL">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>
          {selectedType === "GENERAL" && (
            <FormGroup>
              <Label for="answer">Answer(General)</Label>
              <Input
                type="textarea"
                id="answer"
                rows={8}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter your answer here..."
              />
            </FormGroup>
          )}
          {selectedType === "SHARIA" && (
            <FormGroup>
              <Label for="answer">Answer(Sharia)</Label>
              <Input
                type="textarea"
                id="answer"
                rows={8}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter your answer here..."
              />
            </FormGroup>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" type="submit">
            Save Answer
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default ExtraAnswerModal;
