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

interface AddNewRegisteredCCJsModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const AddNewRegisteredCCJsModal: React.FC<AddNewRegisteredCCJsModalProps> = ({
  isOpen,
  toggle,
}) => {
  const [amount, setAmount] = useState<string>("");
  const [loanCompanyName, setLoanCompanyName] = useState<string>("");
  const [dateRegistered, setDateRegistered] = useState<string>("");
  const [satisfied, setSatisfied] = useState<boolean | null>(null);
  const [dateSatisfied, setDateSatisfied] = useState<string>("");

  const handleRadioChange = (value: boolean) => {
    setSatisfied(value);
    if (value === true) {
      setDateSatisfied(""); // Clear DateSatisfied when "Yes" is selected
    }
  };

  const handleSubmit = () => {
    console.log({
      amount,
      loanCompanyName,
      dateRegistered,
      satisfied,
      dateSatisfied,
    });
    toggle(); // Close modal after submit
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="lg">
      {/* Modal Header */}
      <ModalHeader toggle={toggle}>
        <h2>Add New Registered CCJs</h2>
      </ModalHeader>

      {/* Modal Body */}
      <ModalBody className="p-5">
        <Row>
          {/* Amount Field */}
          <Col sm={6}>
            <FormGroup>
              <Label for="Amount">Amount</Label>
              <div className="input-group">
                <Input
                  id="Amount"
                  name="Amount"
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value as string)}
                  className="numeric form-control"
                  placeholder="Enter amount"
                />
              </div>
            </FormGroup>
          </Col>

          {/* Loan Company Name Field */}
          <Col sm={6}>
            <FormGroup>
              <Label for="LoanCompanyName">Loan Company Name</Label>
              <Input
                id="LoanCompanyName"
                name="LoanCompanyName"
                type="text"
                value={loanCompanyName}
                onChange={(e) => setLoanCompanyName(e.target.value as string)}
                className="form-control"
                placeholder="Enter loan company name"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          {/* Date Registered Field */}
          <Col sm={6}>
            <FormGroup>
              <Label for="DateRegistered">Date Registered</Label>
              <Input
                id="DateRegistered"
                name="DateRegistered"
                type="date"
                value={dateRegistered}
                onChange={(e) => setDateRegistered(e.target.value as string)}
                className="form-control"
              />
            </FormGroup>
          </Col>

          {/* Satisfied Field */}
          <Col sm={6}>
            <FormGroup>
              <Label for="Satisfied">Has the CCJs been satisfied?*</Label>
              <div className="d-flex align-items-center">
                <div>
                  <Input
                    id="Satisfied"
                    name="Satisfied"
                    type="radio"
                    value="true"
                    onChange={() => handleRadioChange(true)}
                    checked={satisfied === true}
                    required
                    className="me-2"
                  />
                  Yes
                </div>
                <div className="ms-3">
                  <Input
                    id="Satisfied"
                    name="Satisfied"
                    type="radio"
                    value="false"
                    onChange={() => handleRadioChange(false)}
                    checked={satisfied === false}
                    className="me-2"
                  />
                  No
                </div>
              </div>
            </FormGroup>
          </Col>
        </Row>

        {/* Date Satisfied Field (Conditional) */}
        {satisfied === true && (
          <Row>
            <Col sm={6}>
              <FormGroup>
                <Label for="DateSatisfied">Date Satisfied</Label>
                <Input
                  id="DateSatisfied"
                  name="DateSatisfied"
                  type="date"
                  value={dateSatisfied}
                  onChange={(e) => setDateSatisfied(e.target.value as string)}
                  className="form-control"
                />
              </FormGroup>
            </Col>
          </Row>
        )}
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

export default AddNewRegisteredCCJsModal;
