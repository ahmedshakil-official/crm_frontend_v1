import { DeleteCaseModalProps } from "@/Types/Organization/CaseTypes";
import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const DeleteCaseModal: React.FC<DeleteCaseModalProps> = ({
  isOpen,
  toggle,
  caseData,
  onDelete,
  isDeleting,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>Confirm Case Deletion</ModalHeader>
      <ModalBody>
        {caseData ? (
          <p>
            Are you sure you want to delete the case named{" "}
            <strong>{caseData.name}</strong>? This action cannot be undone.
          </p>
        ) : (
          <p>No case selected for deletion.</p>
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={onDelete} disabled={!caseData}>
        {isDeleting ? "Deleting..." : "Delete"}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteCaseModal;
