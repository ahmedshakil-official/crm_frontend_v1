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

interface AddNewBankruptciesModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const AddNewBankruptciesModal: React.FC<AddNewBankruptciesModalProps> = ({
  isOpen,
  toggle,
}) => {
  const [dateDischarged, setDateDischarged] = useState<string>("");

  const handleSubmit = () => {
    console.log({
      dateDischarged,
    });
    toggle(); // Close modal after submit
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="md">
      {/* Modal Header */}
      <ModalHeader toggle={toggle}>
        <h2>Add New Bankruptcies</h2>
      </ModalHeader>

      {/* Modal Body */}
      <ModalBody className="p-5">
        <Row className="justify-content-center">
          <Col sm={12}>
            <FormGroup>
              <Label for="DateDischarged">Date Discharged</Label>
              <Input
                id="DateDischarged"
                name="DateDischarged"
                type="date"
                value={dateDischarged}
                onChange={(e) => setDateDischarged(e.target.value as string)}
                className="form-control w-100"
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

export default AddNewBankruptciesModal;
