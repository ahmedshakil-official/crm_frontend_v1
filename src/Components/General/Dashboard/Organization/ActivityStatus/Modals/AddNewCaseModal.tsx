import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
interface AddNewCaseModalProps {
  isOpen: boolean;
  toggle: () => void;
  onSave: () => void;
}

const AddNewCaseModal: React.FC<AddNewCaseModalProps> = ({
  isOpen,
  toggle,
  onSave,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add New Case</ModalHeader>
      <Form>
        <ModalBody>
          <FormGroup>
            <Label for="caseName">
              Case Name <span className="text-danger">*</span>
            </Label>
            <Input
              id="caseName"
              name="caseName"
              type="text"
              placeholder="Case Name"
              // value={formData.firstName}
              // onChange={(e) => handleInputChange(e, "firstName")}
              required
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary">
            Save
          </Button>
          <Button type="button" color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default AddNewCaseModal;
