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
  InputGroup,
  InputGroupText,
} from "reactstrap";

interface AddNewDMPsModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const AddNewDMPsModal: React.FC<AddNewDMPsModalProps> = ({
  isOpen,
  toggle,
}) => {
  const [managedBy, setManagedBy] = useState<string>("");
  const [dateRegistered, setDateRegistered] = useState<string>("");
  const [loanCompanyName, setLoanCompanyName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [satisfied, setSatisfied] = useState<boolean>(false);
  const [dateSatisfied, setDateSatisfied] = useState<string>("");

  const handleSubmit = () => {
    console.log({
      managedBy,
      dateRegistered,
      loanCompanyName,
      amount,
      satisfied,
      dateSatisfied,
    });
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="lg">
      <ModalHeader toggle={toggle}>
        <h2>Add New DMPs</h2>
      </ModalHeader>

      <ModalBody className="p-5">
        <Row>
          <Col sm={12} className="mb-3">
            <FormGroup>
              <Label>Direct or Via a 3rd Party?</Label>
              <div>
                <FormGroup check inline>
                  <Input
                    type="radio"
                    name="managedBy"
                    value="Directly"
                    checked={managedBy === "Directly"}
                    onChange={(e) => setManagedBy(e.target.value)}
                  />
                  <Label check>Directly</Label>
                </FormGroup>
                <FormGroup check inline>
                  <Input
                    type="radio"
                    name="managedBy"
                    value="ThirdParty"
                    checked={managedBy === "ThirdParty"}
                    onChange={(e) => setManagedBy(e.target.value)}
                  />
                  <Label check>3rd Party</Label>
                </FormGroup>
              </div>
            </FormGroup>
          </Col>

          <Col sm={6} className="mb-3">
            <FormGroup>
              <Label for="DateRegistered">Date Registered</Label>
              <Input
                id="DateRegistered"
                name="DateRegistered"
                type="date"
                value={dateRegistered}
                onChange={(e) => setDateRegistered(e.target.value)}
                className="form-control w-100"
              />
            </FormGroup>
          </Col>

          <Col sm={6} className="mb-3">
            <FormGroup>
              <Label for="LoanCompanyName">Loan Company Name</Label>
              <Input
                id="LoanCompanyName"
                name="LoanCompanyName"
                type="text"
                value={loanCompanyName}
                onChange={(e) => setLoanCompanyName(e.target.value)}
                className="form-control w-100"
              />
            </FormGroup>
          </Col>

          <Col sm={6} className="mb-3">
            <FormGroup>
              <Label for="Amount">Outstanding Balance</Label>
              <InputGroup>
                <InputGroupText>£</InputGroupText>
                <Input
                  id="Amount"
                  name="Amount"
                  type="number"
                  min="0"
                  max="9999999999999999"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="form-control"
                />
              </InputGroup>
            </FormGroup>
          </Col>

          <Col sm={6} className="mb-3">
            <FormGroup check className="mt-4">
              <Label check>
                <Input
                  type="checkbox"
                  checked={satisfied}
                  onChange={(e) => setSatisfied(e.target.checked)}
                />{' '}
                Satisfied?
              </Label>
            </FormGroup>
          </Col>

          {satisfied && (
            <Col sm={6}>
              <FormGroup>
                <Label for="DateSatisfied">Date Satisfied</Label>
                <Input
                  id="DateSatisfied"
                  name="DateSatisfied"
                  type="date"
                  value={dateSatisfied}
                  onChange={(e) => setDateSatisfied(e.target.value)}
                  className="form-control w-100"
                />
              </FormGroup>
            </Col>
          )}
        </Row>
      </ModalBody>

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

export default AddNewDMPsModal;