import { FC } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupText,
  Row,
  Col,
} from "reactstrap";

interface FeeData {
  id: string;
  index: number;
  isDeleted: boolean;
  feeInFeeOutId: string;
  caseType: string;
  propertyName: string;
  paymentLink: string;
  fee: string;
  feeType: string;
  method: string;
  notes: string;
  feeDate: string;
}

interface AddFeeOutModalProps {
  isOpen: boolean;
  toggle: () => void;
  onSubmit: (feeData: FeeData) => void;
  feeTypes: string[];
  methods: string[];
}

const AddFeeOutModal: FC<AddFeeOutModalProps> = ({
  isOpen,
  toggle,
  onSubmit,
  feeTypes,
  methods,
}) => {
  const initialFeeData: FeeData = {
    id: "",
    index: 0,
    isDeleted: false,
    feeInFeeOutId: "",
    caseType: "",
    propertyName: "List_Fees_Out",
    paymentLink: "",
    fee: "",
    feeType: "",
    method: "",
    notes: "",
    feeDate: "",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(initialFeeData);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <Form onSubmit={handleSubmit}>
        <ModalHeader toggle={toggle}>Add New Fee Out</ModalHeader>
        <ModalBody>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="amount">Amount</Label>
                <InputGroup>
                  <InputGroupText>£</InputGroupText>
                  <Input
                    type="text"
                    id="amount"
                    placeholder="0.00"
                    value={initialFeeData.fee}
                    onChange={(e) => {
                      initialFeeData.fee = e.target.value;
                    }}
                  />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="feeType">Fee Type</Label>
                <Input
                  type="select"
                  id="feeType"
                  value={initialFeeData.feeType}
                  onChange={(e) => {
                    initialFeeData.feeType = e.target.value;
                  }}
                >
                  <option value="">Select Type</option>
                  {feeTypes.map((type) => (
                    <option key={type} value={type === "Unknown" ? "" : type}>
                      {type}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="method">Payment Method</Label>
                <Input
                  type="select"
                  id="method"
                  value={initialFeeData.method}
                  onChange={(e) => {
                    initialFeeData.method = e.target.value;
                  }}
                >
                  <option value="">Select Method</option>
                  {methods.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="feeDate">Date Paid Out</Label>
                <Input
                  type="date"
                  id="feeDate"
                  value={initialFeeData.feeDate}
                  onChange={(e) => {
                    initialFeeData.feeDate = e.target.value;
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="notes">Notes</Label>
            <Input
              type="textarea"
              id="notes"
              rows={3}
              placeholder="Add notes..."
              value={initialFeeData.notes}
              onChange={(e) => {
                initialFeeData.notes = e.target.value;
              }}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" type="submit">
            Add Fee
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default AddFeeOutModal;