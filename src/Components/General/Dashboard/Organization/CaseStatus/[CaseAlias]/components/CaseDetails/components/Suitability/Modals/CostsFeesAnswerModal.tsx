import { CostsFeesAnswerModalProps } from "@/Types/Organization/Cases/CaseDetails/SuitabilityTypes";
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

const CostsFeesAnswerModal: React.FC<CostsFeesAnswerModalProps> = ({
  isOpen,
  toggle,
}) => {
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
          <h4 className="text-success">Add Costs & Fees Answer</h4>
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

export default CostsFeesAnswerModal;
