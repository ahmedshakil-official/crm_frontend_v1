import { useAddBankruptsMutation } from "@/Redux/Reducers/Cases/SingleCaseInfo/CaseDetails/AdverseDetails/AdverseDetailsApi";
import { AddNewBankruptciesModalProps } from "@/Types/Organization/CaseDetails/AdverseTypes";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

const AddNewBankruptciesModal: React.FC<AddNewBankruptciesModalProps> = ({
  isOpen,
  toggle,
  adverseAlias,
}) => {
  const params = useParams();
  const { casealias } = params;
  const [addBankruptcies, { isLoading }] = useAddBankruptsMutation();

  const [date_discharged, setDateDischarged] = useState<string>("");

  const handleSubmit = async () => {
    const value = {
      date_discharged: date_discharged || null,
    };

    const res = await addBankruptcies({
      case_alias: casealias,
      adverse_alias: adverseAlias,
      value,
    });

    if (res.data) {
      toast.success("Bankruptcy Added Successfully");
      toggle();
    } else {
      toast.error("Failed to add bankruptcy");
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="md">
      <ModalHeader toggle={toggle}>
        <h2>Add New Bankruptcies</h2>
      </ModalHeader>

      <ModalBody className="p-5">
        <Row className="justify-content-center">
          <Col sm={12}>
            <FormGroup>
              <Label for="date_discharged">Date Discharged</Label>
              <Input
                id="date_discharged"
                name="date_discharged"
                type="date"
                value={date_discharged}
                onChange={(e) => setDateDischarged(e.target.value)}
                className="form-control w-100"
              />
            </FormGroup>
          </Col>
        </Row>
      </ModalBody>

      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddNewBankruptciesModal;
