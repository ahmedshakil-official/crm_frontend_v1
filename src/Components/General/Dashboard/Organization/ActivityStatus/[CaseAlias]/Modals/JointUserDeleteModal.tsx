import { JointUserDeleteModalProps } from "@/Types/Organization/JointUserTypes";
import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const JointUserDeleteModal: React.FC<JointUserDeleteModalProps> = ({
  isOpen,
  toggle,
  onConfirm,
  isLoading = false,
  selectedUser,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Delete Joint User</ModalHeader>
      <ModalBody>
        Are you sure you want to delete the file{" "}
        <strong>
          {selectedUser?.joint_user_details?.first_name}{" "}
          {selectedUser?.joint_user_details?.last_name}
        </strong>
        ?
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={onConfirm} disabled={isLoading}>
          {isLoading ? "Deleting..." : "Delete"}
        </Button>
        <Button color="secondary" onClick={toggle} disabled={isLoading}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default JointUserDeleteModal;
