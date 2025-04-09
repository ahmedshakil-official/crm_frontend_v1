import { useAddFeesInDetailsMutation } from "@/Redux/Reducers/CaseDetails/Fees/FeesApi";
import { FC, useState } from "react";
import { toast } from "react-toastify";
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

interface AddFeeInModalProps {
  isOpen: boolean;
  toggle: () => void;
  onSubmit: (feeData: FeeData) => void;
  feeTypes: { title: string; value: string }[];
  methods: { title: string; value: string }[];
  caseAlias: string | string[];
}

const AddFeeInModal: FC<AddFeeInModalProps> = ({
  isOpen,
  toggle,
  onSubmit,
  feeTypes,
  methods,
  caseAlias,
}) => {
  const [addFeesInDetails, { isLoading }] = useAddFeesInDetailsMutation();
  const [feeData, setFeeData] = useState<FeeData>({
    id: "",
    index: 0,
    isDeleted: false,
    feeInFeeOutId: "",
    caseType: "",
    propertyName: "List_Fees_In",
    paymentLink: "",
    fee: "",
    feeType: "",
    method: "",
    notes: "",
    feeDate: "",
  });

  const handleInputChange = (field: keyof FeeData, value: string) => {
    setFeeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      amount: feeData.fee,
      feeType: feeData.feeType,
      method: feeData.method,
      dateReceived: feeData.feeDate,
      notes: feeData.notes,
    };

    const res = await addFeesInDetails({
      case_alias: caseAlias,
      feesInDetails: data,
    });
    if (res.data) {
      onSubmit(feeData);
      toggle();
      toast.success("Fee added successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <Form onSubmit={handleSubmit}>
        <ModalHeader toggle={toggle}>Add New Fee</ModalHeader>
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
                    value={feeData.fee}
                    onChange={(e) => handleInputChange("fee", e.target.value)}
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
                  value={feeData.feeType}
                  onChange={(e) => handleInputChange("feeType", e.target.value)}
                >
                  <option value="">Select Type</option>
                  {feeTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.title}
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
                  value={feeData.method}
                  onChange={(e) => handleInputChange("method", e.target.value)}
                >
                  <option value="">Select Method</option>
                  {methods.map((method) => (
                    <option key={method.value} value={method.value}>
                      {method.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="feeDate">Date Received</Label>
                <Input
                  type="date"
                  id="feeDate"
                  value={feeData.feeDate}
                  onChange={(e) => handleInputChange("feeDate", e.target.value)}
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
              value={feeData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" type="submit" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Fee"}
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default AddFeeInModal;
