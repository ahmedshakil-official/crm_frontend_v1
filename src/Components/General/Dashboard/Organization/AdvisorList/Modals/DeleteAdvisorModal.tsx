import { DeleteAdvisorModalProps } from "@/Types/Organization/AdvisorTypes";
import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const DeleteAdvisorModal: React.FC<DeleteAdvisorModalProps> = ({
  isOpen,
  toggle,
  onDelete,
  advisorName,
  isLoading,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Delete Advisor</ModalHeader>
      <ModalBody>
        Are you sure you want to delete the advisor <strong>{advisorName}</strong>?
        This action cannot be undone.
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={onDelete}>
          {isLoading ? "Deleting..." : "Delete"}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteAdvisorModal;
