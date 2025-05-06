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
  const [selectedType, setSelectedType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAnswer("");
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <Form onSubmit={handleSubmit}>
        <ModalHeader toggle={toggle}>
          <h4 className="text-info">Add Extra Answer</h4>
        </ModalHeader>
        <ModalBody>
          <Col md={8}>
            <Label for="question_type">Question Type</Label>
            <FormGroup>
              <Input
                type="select"
                name="question_type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="GENERAL">General</option>
                <option value="SHARIA">Sharia</option>
              </Input>
            </FormGroup>
          </Col>

          <FormGroup>
            <Label for="answer">Answer</Label>
            <Input
              type="textarea"
              id="answer"
              rows={8}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter your answer here..."
            />
          </FormGroup>
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
