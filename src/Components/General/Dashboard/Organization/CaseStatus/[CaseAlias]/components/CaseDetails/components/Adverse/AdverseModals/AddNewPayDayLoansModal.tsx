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

interface AddNewPayDayLoansModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const AddNewPayDayLoansModal: React.FC<AddNewPayDayLoansModalProps> = ({
  isOpen,
  toggle,
}) => {
  const [loanAmount, setLoanAmount] = useState<string>("");
  const [loanDate, setLoanDate] = useState<string>("");
  const [hasPayDayLoans, setHasPayDayLoans] = useState<boolean>(false);
  const [dateSatisfied, setDateSatisfied] = useState<string>("");
  const [lenderName, setLenderName] = useState<string>("");

  const handleSubmit = () => {
    console.log({
      loanAmount,
      loanDate,
      hasPayDayLoans,
      dateSatisfied,
      lenderName,
    });
    toggle(); // Close modal after submit
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="lg">
      {/* Modal Header */}
      <ModalHeader toggle={toggle}>
        <h2>Add New Pay Day Loans</h2>
      </ModalHeader>

      {/* Modal Body */}
      <ModalBody className="p-5">
        <Row>
          {/* Loan Amount Field */}
          <Col sm={6}>
            <FormGroup>
              <Label for="LoanAmount">Loan Amount</Label>
              <div className="input-group">
                <Input
                  id="LoanAmount"
                  name="LoanAmount"
                  type="text"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="numeric form-control"
                  placeholder="Enter loan amount"
                />
              </div>
            </FormGroup>
          </Col>

          {/* Loan Date Field */}
          <Col sm={6}>
            <FormGroup>
              <Label for="LoanDate">Loan Date</Label>
              <Input
                id="LoanDate"
                name="LoanDate"
                type="date"
                value={loanDate}
                onChange={(e) => setLoanDate(e.target.value)}
                className="form-control"
              />
            </FormGroup>
          </Col>
        </Row>

        {/* Has Pay Day Loans Been Repaid? Field */}
        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="Satisfied">Has the Pay Day Loan Been Repaid?</Label>
              <div>
                <Input
                  id="SatisfiedYes"
                  name="Satisfied"
                  type="radio"
                  value="true"
                  checked={hasPayDayLoans === true}
                  onChange={() => setHasPayDayLoans(true)}
                />{" "}
                Yes
                <Input
                  id="SatisfiedNo"
                  name="Satisfied"
                  type="radio"
                  value="false"
                  checked={hasPayDayLoans === false}
                  onChange={() => setHasPayDayLoans(false)}
                  className="ms-3"
                />{" "}
                No
              </div>
            </FormGroup>
          </Col>

          {/* Date Satisfied Field (Conditional) */}
          {hasPayDayLoans && (
            <Col sm={6}>
              <FormGroup>
                <Label for="DateSatisfied">Date Repaid</Label>
                <Input
                  id="DateSatisfied"
                  name="DateSatisfied"
                  type="date"
                  value={dateSatisfied}
                  onChange={(e) => setDateSatisfied(e.target.value)}
                  className="form-control"
                />
              </FormGroup>
            </Col>
          )}
        </Row>

        {/* Lender Name Field */}
        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="LenderName">Lender Name</Label>
              <Input
                id="LenderName"
                name="LenderName"
                type="text"
                value={lenderName}
                onChange={(e) => setLenderName(e.target.value)}
                className="form-control"
                placeholder="Enter lender name"
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

export default AddNewPayDayLoansModal;
