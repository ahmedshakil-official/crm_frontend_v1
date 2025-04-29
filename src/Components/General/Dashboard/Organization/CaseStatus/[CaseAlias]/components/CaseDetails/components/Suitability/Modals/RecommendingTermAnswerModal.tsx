import { RecommendingTermAnswerModalProps } from "@/Types/Organization/Cases/CaseDetails/SuitabilityTypes";
import React, { useState } from "react";
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

const RecommendingTermAnswerModal: React.FC<
  RecommendingTermAnswerModalProps
> = ({ isOpen, toggle }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAnswer("");
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="xl">
      <Form onSubmit={handleSubmit}>
        <ModalHeader toggle={toggle}>
          <h4 className="text-secondary">Add Recommending Term Answer</h4>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="answer">Answer</Label>
            <Input
              type="textarea"
              id="answer"
              rows={4}
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

export default RecommendingTermAnswerModal;
