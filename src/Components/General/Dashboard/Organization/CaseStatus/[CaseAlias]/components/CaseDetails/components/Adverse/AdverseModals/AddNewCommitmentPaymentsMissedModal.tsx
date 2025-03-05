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

interface AddNewCommitmentPaymentsMissedModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const AddNewCommitmentPaymentsMissedModal: React.FC<
  AddNewCommitmentPaymentsMissedModalProps
> = ({ isOpen, toggle }) => {
  const [commitmentType, setCommitmentType] = useState<string>("CreditCard");
  const [loanCompanyName, setLoanCompanyName] = useState<string>("");
  const [cleared, setCleared] = useState<boolean>(false);
  const [dateCleared, setDateCleared] = useState<string>("");
  const [threeMonths, setThreeMonths] = useState<string>("0");
  const [twelveMonths, setTwelveMonths] = useState<string>("0");
  const [twentyFourMonths, setTwentyFourMonths] = useState<string>("0");
  const [thirtySixMonths, setThirtySixMonths] = useState<string>("0");
  const [sixtyMonths, setSixtyMonths] = useState<string>("0");

  const handleSubmit = () => {
    console.log({
      commitmentType,
      loanCompanyName,
      cleared,
      dateCleared,
      threeMonths,
      twelveMonths,
      twentyFourMonths,
      thirtySixMonths,
      sixtyMonths,
    });
    toggle(); // Close modal after submit
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="xl">
      {/* Modal Header */}
      <ModalHeader toggle={toggle}>
        <h2>Add New Commitment Payments Missed</h2>
      </ModalHeader>

      {/* Modal Body */}
      <ModalBody className="p-5">
        <Row>
          {/* Commitment Type Field */}
          <Col sm={6}>
            <FormGroup>
              <Label for="CommitmentType">Commitment Type</Label>
              <Input
                id="CommitmentType"
                name="CommitmentType"
                type="select"
                value={commitmentType}
                onChange={(e) => setCommitmentType(e.target.value as string)}
                className="form-control"
              >
                <option value="CreditCard">Credit Card</option>
                <option value="StoreCard">Store Card</option>
                <option value="Loan">Loan</option>
                <option value="HP">HP</option>
                <option value="Overdraft">Overdraft</option>
                <option value="StudentLoan">Student Loan</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Lease">Lease</option>
                <option value="Unsecured">Unsecured</option>
                <option value="MortgageOrRent">Mortgage / Rent</option>
                <option value="PublicUtility">Public Utility</option>
                <option value="Communications">Communications</option>
                <option value="Insurance">Insurance</option>
                <option value="Secured">Secured</option>
                <option value="PCP">PCP</option>
                <option value="MailOrder">Mail Order</option>
                <option value="Childcare">Childcare</option>
                <option value="CarFinance">Car Finance</option>
                <option value="BuyNowPayLater">Buy Now Pay Later (BNPL)</option>
                <option value="CreditCommitment">Credit Commitment</option>
                <option value="DebtManagementPlan">DMP</option>
                <option value="Unknown">Unknown</option>
              </Input>
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
          {/* Cleared Field */}
          <Col sm={6}>
            <FormGroup>
              <Label for="Cleared">Cleared?</Label>
              <Input
                id="Cleared"
                name="Cleared"
                type="checkbox"
                checked={cleared}
                onChange={(e) => setCleared(e.target.checked)}
              />
            </FormGroup>
          </Col>

          {/* Date Cleared Field (Conditional) */}
          {cleared && (
            <Col sm={6}>
              <FormGroup>
                <Label for="DateCleared">Date Cleared</Label>
                <Input
                  id="DateCleared"
                  name="DateCleared"
                  type="date"
                  value={dateCleared}
                  onChange={(e) => setDateCleared(e.target.value as string)}
                  className="form-control"
                />
              </FormGroup>
            </Col>
          )}
        </Row>

        <Row>
          {/* Missed Payments in the Last 3 Months Field */}
          <Col sm={6}>
            <FormGroup>
              <Label for="Three_Months">
                Missed payments in the last 3 months
              </Label>
              <Input
                id="Three_Months"
                name="Three_Months"
                type="text"
                value={threeMonths}
                onChange={(e) => setThreeMonths(e.target.value as string)}
                className="numeric form-control"
              />
            </FormGroup>
          </Col>

          {/* Missed Payments in the Last 12 Months Field */}
          <Col sm={6}>
            <FormGroup>
              <Label for="Twelve_Months">
                Missed payments in the last 12 months
              </Label>
              <Input
                id="Twelve_Months"
                name="Twelve_Months"
                type="text"
                value={twelveMonths}
                onChange={(e) => setTwelveMonths(e.target.value as string)}
                className="numeric form-control"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          {/* Missed Payments in the Last 24 Months Field */}
          <Col sm={6}>
            <FormGroup>
              <Label for="TwentyFour_Months">
                Missed payments in the last 24 months
              </Label>
              <Input
                id="TwentyFour_Months"
                name="TwentyFour_Months"
                type="text"
                value={twentyFourMonths}
                onChange={(e) => setTwentyFourMonths(e.target.value as string)}
                className="numeric form-control"
              />
            </FormGroup>
          </Col>

          {/* Missed Payments in the Last 36 Months Field */}
          <Col sm={6}>
            <FormGroup>
              <Label for="ThirtySix_Months">
                Missed payments in the last 36 months
              </Label>
              <Input
                id="ThirtySix_Months"
                name="ThirtySix_Months"
                type="text"
                value={thirtySixMonths}
                onChange={(e) => setThirtySixMonths(e.target.value as string)}
                className="numeric form-control"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          {/* Missed Payments in the Last 60 Months Field */}
          <Col sm={6}>
            <FormGroup>
              <Label for="Sixty_Months">
                Missed payments in the last 60 months
              </Label>
              <Input
                id="Sixty_Months"
                name="Sixty_Months"
                type="text"
                value={sixtyMonths}
                onChange={(e) => setSixtyMonths(e.target.value as string as string)}
                className="numeric form-control"
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

export default AddNewCommitmentPaymentsMissedModal;
