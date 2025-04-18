import { useDeleteIntroducerDetailsMutation } from "@/Redux/Reducers/Organization/Directors/IntroducerDetailsApi";
import { DeleteIntroducerModalProps } from "@/Types/Organization/Directors/IntroducerTypes";
import React from "react";
import { toast } from "react-toastify";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const DeleteIntroducerModal: React.FC<DeleteIntroducerModalProps> = ({
  isOpen,
  toggle,
  introducerName,
  introducerAlias,
}) => {
  const [deleteIntroducerDetails, { isLoading }] =
    useDeleteIntroducerDetailsMutation();

  const handleDelete = async () => {
    if (!introducerAlias) return;
    try {
      const response = await deleteIntroducerDetails({ introducerAlias });
      if ("data" in response) {
        toast.success("Introducer deleted successfully.");
        toggle();
      } else if ("error" in response) {
        const errorMessage =
          (response.error as any)?.data?.message || "Invalid Request...";
        toast.error(errorMessage);
      } else toast.error("Failed to delete introducer.");
    } catch (error) {
      toast.error("Failed to delete introducer.");
    }
  };
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Delete Introducer</ModalHeader>
      <ModalBody>
        Are you sure you want to delete the introducer{" "}
        <strong>{introducerName}</strong>? This action cannot be undone.
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={handleDelete}>
          {isLoading ? "Deleting..." : "Delete"}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteIntroducerModal;
