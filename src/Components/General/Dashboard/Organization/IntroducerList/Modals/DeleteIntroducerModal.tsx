import { DeleteIntroducerModalProps } from "@/Types/Organization/IntroducerTypes";
import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const DeleteIntroducerModal: React.FC<DeleteIntroducerModalProps> = ({
  isOpen,
  toggle,
  onDelete,
  introducerName,
  isDeleting,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Delete Introducer</ModalHeader>
      <ModalBody>
        Are you sure you want to delete the introducer{" "}
        <strong>{introducerName}</strong>? This action cannot be undone.
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

export default DeleteIntroducerModal;
