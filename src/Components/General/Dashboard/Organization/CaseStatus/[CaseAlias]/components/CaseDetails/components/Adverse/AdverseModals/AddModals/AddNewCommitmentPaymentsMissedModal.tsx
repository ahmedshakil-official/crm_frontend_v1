import { useAddCommitmentPaymentsMutation } from "@/Redux/Reducers/CaseDetails/AdverseDetails/AdverseDetailsApi";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
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
  adverseAlias: string;
}

const AddNewCommitmentPaymentsMissedModal: React.FC<
  AddNewCommitmentPaymentsMissedModalProps
> = ({ isOpen, toggle, adverseAlias }) => {
  const [commitment_type, setCommitmentType] = useState<string>("credit_card");
  const [loan_company_name, setLoanCompanyName] = useState<string>("");
  const [cleared, setCleared] = useState<boolean>(false);
  const [date_cleared, setDateCleared] = useState<string>("");
  const [
    missed_payments_in_the_last_three_months,
    setMissedPaymentsThreeMonths,
  ] = useState<string>("0");
  const [
    missed_payments_in_the_last_twelve_months,
    setMissedPaymentsTwelveMonths,
  ] = useState<string>("0");
  const [
    missed_payments_in_the_last_twenty_four_months,
    setMissedPaymentsTwentyFourMonths,
  ] = useState<string>("0");
  const [
    missed_payments_in_the_last_thirty_six_months,
    setMissedPaymentsThirtySixMonths,
  ] = useState<string>("0");
  const [
    missed_payments_in_the_last_sixty_months,
    setMissedPaymentsSixtyMonths,
  ] = useState<string>("0");

  const params = useParams();
  const { casealias } = params;

  const [addCommitmentPayments, { isLoading }] =
    useAddCommitmentPaymentsMutation();

  const handleSubmit = async () => {
    const value = {
      commitment_type,
      loan_company_name,
      date_cleared: date_cleared || null,
      missed_payments_in_the_last_three_months:
        missed_payments_in_the_last_three_months || null,
      missed_payments_in_the_last_twelve_months:
        missed_payments_in_the_last_twelve_months || null,
      missed_payments_in_the_last_twenty_four_months:
        missed_payments_in_the_last_twenty_four_months || null,
      missed_payments_in_the_last_thirty_six_months:
        missed_payments_in_the_last_thirty_six_months || null,
      missed_payments_in_the_last_sixty_months:
        missed_payments_in_the_last_sixty_months || null,
    };

    const res = await addCommitmentPayments({
      case_alias: casealias,
      adverse_alias: adverseAlias,
      value,
    });

    if (res.data) {
      toast.success("Successfully added new commitment payments missed");
      toggle();
    } else {
      toast.error("Failed to add new commitment payments missed");
    }
  };
  // Update the select options values
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="lg">
      {/* Modal Header */}
      <ModalHeader toggle={toggle}>
        <h2>Add New Commitment Payments Missed</h2>
      </ModalHeader>

      {/* Modal Body */}
      <ModalBody className="p-5">
        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="commitment_type">Commitment Type</Label>
              <Input
                id="commitment_type"
                name="commitment_type"
                type="select"
                value={commitment_type}
                onChange={(e) => setCommitmentType(e.target.value)}
                className="form-control"
              >
                <option value="credit_card">Credit Card</option>
                <option value="store_card">Store Card</option>
                <option value="loan">Loan</option>
                <option value="hp">HP</option>
                <option value="overdraft">Overdraft</option>
                <option value="student_loan">Student Loan</option>
                <option value="maintenance">Maintenance</option>
                <option value="lease">Lease</option>
                <option value="unsecured">Unsecured</option>
                <option value="mortgage_or_rent">Mortgage / Rent</option>
                <option value="public_utility">Public Utility</option>
                <option value="communications">Communications</option>
                <option value="insurance">Insurance</option>
                <option value="secured">Secured</option>
                <option value="pcp">PCP</option>
                <option value="mail_order">Mail Order</option>
                <option value="childcare">Childcare</option>
                <option value="car_finance">Car Finance</option>
                <option value="buy_now_pay_later">
                  Buy Now Pay Later (BNPL)
                </option>
                <option value="credit_commitment">Credit Commitment</option>
                <option value="debt_management_plan">DMP</option>
                <option value="unknown">Unknown</option>
              </Input>
            </FormGroup>
          </Col>

          <Col sm={6}>
            <FormGroup>
              <Label for="loan_company_name">Loan Company Name</Label>
              <Input
                id="loan_company_name"
                name="loan_company_name"
                type="text"
                value={loan_company_name}
                onChange={(e) => setLoanCompanyName(e.target.value)}
                className="form-control"
                placeholder="Enter loan company name"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <FormGroup className="d-flex align-items-center">
              <Label for="cleared" className="mb-0 me-2">
                Cleared?
              </Label>
              <Input
                id="cleared"
                name="cleared"
                type="checkbox"
                checked={cleared}
                onChange={(e) => setCleared(e.target.checked)}
                className="me-2"
              />
            </FormGroup>
          </Col>

          {cleared && (
            <Col sm={6}>
              <FormGroup>
                <Label for="date_cleared">Date Cleared</Label>
                <Input
                  id="date_cleared"
                  name="date_cleared"
                  type="date"
                  value={date_cleared}
                  onChange={(e) => setDateCleared(e.target.value)}
                  className="form-control"
                />
              </FormGroup>
            </Col>
          )}
        </Row>

        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="missed_payments_in_the_last_three_months">
                Missed payments in the last 3 months
              </Label>
              <Input
                id="missed_payments_in_the_last_three_months"
                name="missed_payments_in_the_last_three_months"
                type="number"
                min="0"
                value={missed_payments_in_the_last_three_months}
                onChange={(e) => setMissedPaymentsThreeMonths(e.target.value)}
                className="form-control"
              />
            </FormGroup>
          </Col>

          <Col sm={6}>
            <FormGroup>
              <Label for="missed_payments_in_the_last_twelve_months">
                Missed payments in the last 12 months
              </Label>
              <Input
                id="missed_payments_in_the_last_twelve_months"
                name="missed_payments_in_the_last_twelve_months"
                type="number"
                min="0"
                value={missed_payments_in_the_last_twelve_months}
                onChange={(e) => setMissedPaymentsTwelveMonths(e.target.value)}
                className="form-control"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="missed_payments_in_the_last_twenty_four_months">
                Missed payments in the last 24 months
              </Label>
              <Input
                id="missed_payments_in_the_last_twenty_four_months"
                name="missed_payments_in_the_last_twenty_four_months"
                type="number"
                min="0"
                value={missed_payments_in_the_last_twenty_four_months}
                onChange={(e) =>
                  setMissedPaymentsTwentyFourMonths(e.target.value)
                }
                className="form-control"
              />
            </FormGroup>
          </Col>

          <Col sm={6}>
            <FormGroup>
              <Label for="missed_payments_in_the_last_thirty_six_months">
                Missed payments in the last 36 months
              </Label>
              <Input
                id="missed_payments_in_the_last_thirty_six_months"
                name="missed_payments_in_the_last_thirty_six_months"
                type="number"
                min="0"
                value={missed_payments_in_the_last_thirty_six_months}
                onChange={(e) =>
                  setMissedPaymentsThirtySixMonths(e.target.value)
                }
                className="form-control"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <FormGroup>
              <Label for="missed_payments_in_the_last_sixty_months">
                Missed payments in the last 60 months
              </Label>
              <Input
                id="missed_payments_in_the_last_sixty_months"
                name="missed_payments_in_the_last_sixty_months"
                type="number"
                min="0"
                value={missed_payments_in_the_last_sixty_months}
                onChange={(e) => setMissedPaymentsSixtyMonths(e.target.value)}
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

export default AddNewCommitmentPaymentsMissedModal;
