import { useDeleteAdvisorDetailsMutation } from "@/Redux/Reducers/Organization/Directors/AdvisorDetailsApi";
import { DeleteAdvisorModalProps } from "@/Types/Organization/Directors/AdvisorTypes";
import React from "react";
import { toast } from "react-toastify";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const DeleteAdvisorModal: React.FC<DeleteAdvisorModalProps> = ({
  isOpen,
  toggle,
  advisorName,
  advisorAlias,
}) => {
  const [deleteAdvisorDetails, { isLoading }] =
    useDeleteAdvisorDetailsMutation();
  const handleDelete = async () => {
    if (!advisorAlias) return;
    try {
      const response = await deleteAdvisorDetails({ advisorAlias });
      if ("data" in response) {
        toast.success("Advisor deleted successfully.");
        toggle();
      } else if ("error" in response) {
        const errorMessage =
          (response.error as any)?.data?.message || "Invalid Request...";
        toast.error(errorMessage);
      } else toast.error("Failed to delete advisor.");
    } catch (error) {
      toast.error("Failed to delete advisor.");
    }
  };
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h3 className="text-danger">Delete Advisor</h3>
      </ModalHeader>
      <ModalBody>
        Are you sure you want to delete the advisor{" "}
        <strong className="text-danger">{advisorName}</strong>? This action
        cannot be undone.
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={handleDelete} disabled={isLoading}>
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
