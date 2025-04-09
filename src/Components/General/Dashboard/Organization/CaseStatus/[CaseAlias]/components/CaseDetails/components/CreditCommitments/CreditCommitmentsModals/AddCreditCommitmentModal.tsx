import { useAddCreditCommitmentsDetailsMutation } from "@/Redux/Reducers/CaseDetails/CreditCommitmentsDetails/CreditCommitmentsDetailsApi";
import { useGetCaseUsersQuery } from "@/Redux/Reducers/SingleCaseInfo/CaseUsers/CaseUsersApi";
import LoadingSpinner from "@/app/loading";
import { useParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
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
  Row,
} from "reactstrap";

interface AddCreditCommitmentModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const AddCreditCommitmentModal: React.FC<AddCreditCommitmentModalProps> = ({
  isOpen,
  toggle,
}) => {
  const { casealias } = useParams();
  const [formData, setFormData] = useState({
    applicant: "",
    joint: "",
    type: "",
    company: "",
    account_no: null,
    os_balance: "",
    settlement_balance: "",
    monthly_repayment: "",
    interest_rate: "",
    card_limit: "",
    term_remaining: "",
    balloon_payment: "",
    court_ordered: "",
    cost_of_credit: "",
    paid_on_completion: "",
    source: "",
    has_the_unsecured_credit_mounted_up: "",
  });
  // rtk hooks
  const { data: caseUsers, isLoading } = useGetCaseUsersQuery({
    case_alias: casealias,
  });
  const [addCreditCommitmentsDetails, { isLoading: isAdding }] =
    useAddCreditCommitmentsDetailsMutation();

  console.log(caseUsers);

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
    try {
      addCreditCommitmentsDetails({
        case_alias: casealias,
        payload: formData,
      });
      setFormData({
        applicant: "",
        joint: "",
        type: "",
        company: "",
        account_no: null,
        os_balance: "",
        settlement_balance: "",
        monthly_repayment: "",
        interest_rate: "",
        card_limit: "",
        term_remaining: "",
        balloon_payment: "",
        court_ordered: "",
        cost_of_credit: "",
        paid_on_completion: "",
        source: "",
        has_the_unsecured_credit_mounted_up: "",
      });
      toast.success("Credit Commitment added successfully");
    } catch (error) {
      toast.error("Error adding credit commitment");
    }
    toggle();
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>
        <span className="fs-4 text-primary">Add Credit Commitment</span>
      </ModalHeader>
      <Form onSubmit={handleSubmit}>
        <ModalBody>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Applicant</Label>
                <Input
                  type="select"
                  name="applicant"
                  value={formData.applicant}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  {caseUsers?.map((user: any) => (
                    <option key={user.id} value={user.id}>
                      {user.first_name} {user.last_name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Type</Label>
                <Input
                  type="select"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="CREDIT_CARD">Credit Card</option>
                  <option value="STORE_CARD">Store Card</option>
                  <option value="LOAN">Loan</option>
                  <option value="HP">HP</option>
                  <option value="OVERDRAFT">Overdraft</option>
                  <option value="STUDENT_LOAN">Student Loan</option>
                  <option value="MAINTENANCE">Maintenance</option>
                  <option value="LEASE">Lease</option>
                  <option value="UNSECURED">Unsecured</option>
                  <option value="MORTGAGE_RENT">Mortgage / Rent</option>
                  <option value="PUBLIC_UTILITY">Public Utility</option>
                  <option value="COMMUNICATIONS">Communications</option>
                  <option value="INSURANCE">Insurance</option>
                  <option value="SECURED">Secured</option>
                  <option value="PCP">PCP</option>
                  <option value="MAIL_ORDER">Mail Order</option>
                  <option value="CHILDCARE">Childcare</option>
                  <option value="CAR_FINANCE">Car Finance</option>
                  <option value="BNPL">Buy Now Pay Later (BNPL)</option>
                  <option value="CREDIT_COMMITMENT">Credit Commitment</option>
                  <option value="DMP">DMP</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Company</Label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Account No.</Label>
                <Input
                  type="number"
                  name="account_no"
                  value={formData.account_no || null}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>OS Balance (£)</Label>
                <Input
                  type="number"
                  name="os_balance"
                  value={formData.os_balance}
                  onChange={handleInputChange}
                  step="0.01"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Settlement Balance (£)</Label>
                <Input
                  type="number"
                  name="settlement_balance"
                  value={formData.settlement_balance}
                  onChange={handleInputChange}
                  step="0.01"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Monthly Repayment (£)</Label>
                <Input
                  type="number"
                  name="monthly_repayment"
                  value={formData.monthly_repayment}
                  onChange={handleInputChange}
                  step="0.01"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>Interest Rate (%)</Label>
                <Input
                  type="number"
                  name="interest_rate"
                  value={formData.interest_rate}
                  onChange={handleInputChange}
                  step="0.01"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Card Limit (£)</Label>
                <Input
                  type="number"
                  name="card_limit"
                  value={formData.card_limit}
                  onChange={handleInputChange}
                  step="0.01"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Term Remaining (Months)</Label>
                <Input
                  type="number"
                  name="term_remaining"
                  value={formData.term_remaining}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Balloon Payment (£)</Label>
                <Input
                  type="number"
                  name="balloon_payment"
                  value={formData.balloon_payment}
                  onChange={handleInputChange}
                  step="0.01"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Cost of Credit (£)</Label>
                <Input
                  type="number"
                  name="cost_of_credit"
                  value={formData.cost_of_credit}
                  onChange={handleInputChange}
                  step="0.01"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>Court Ordered</Label>
                <Input
                  type="select"
                  name="court_ordered"
                  value={formData.court_ordered}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="YES">Yes</option>
                  <option value="NO">No</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Paid on Completion</Label>
                <Input
                  type="select"
                  name="paid_on_completion"
                  value={formData.paid_on_completion}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="YES">Yes</option>
                  <option value="NO">No</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Source</Label>
                <Input
                  type="text"
                  name="source"
                  value={formData.source}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" type="submit">
            Save Commitment
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default AddCreditCommitmentModal;
