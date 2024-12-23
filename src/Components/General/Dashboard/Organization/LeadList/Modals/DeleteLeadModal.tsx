import { DeleteLeadModalProps } from "@/Types/Organization/LeadTypes";
import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const DeleteLeadModal: React.FC<DeleteLeadModalProps> = ({
  isOpen,
  toggle,
  onDelete,
  leadName,
  isDeleting,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Delete Lead</ModalHeader>
      <ModalBody>
        Are you sure you want to delete the lead <strong>{leadName}</strong>?
        This action cannot be undone.
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={onDelete}>
          {isDeleting ? "Deleting..." : "Delete"}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteLeadModal;
