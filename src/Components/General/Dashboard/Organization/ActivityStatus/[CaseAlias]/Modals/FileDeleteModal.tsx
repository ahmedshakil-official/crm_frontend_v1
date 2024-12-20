import { FileDeleteModalProps } from "@/Types/Organization/CaseTypes";
import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const FileDeleteModal: React.FC<FileDeleteModalProps> = ({
  isOpen,
  toggle,
  file,
  onDelete,
  isDeleting,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Confirm Delete</ModalHeader>
      <ModalBody>
        Are you sure you want to delete the file <strong>{file.name}</strong>?
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={onDelete} disabled={isDeleting}>
          {isDeleting ? "Deleting..." : "Delete"}
        </Button>
        <Button color="secondary" onClick={toggle} disabled={isDeleting}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default FileDeleteModal;
