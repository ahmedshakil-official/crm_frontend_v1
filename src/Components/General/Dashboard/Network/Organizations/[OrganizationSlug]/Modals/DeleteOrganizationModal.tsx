import apiClient from "@/services/api-client";
import { DeleteOrganizationModalProps } from "@/Types/Network/OrganizationsTypes";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const DeleteOrganizationModal: React.FC<DeleteOrganizationModalProps> = ({
  isOpen,
  toggle,
  slug,
  onDeleteSuccess,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await apiClient.delete(`/organization/list/${slug}/`);
      onDeleteSuccess();
      router.push("/dashboard/network");
      toast.success("Organization deleted successfully!");
    } catch (error) {
      console.error("Failed to delete organization", error);
      toast.error("Failed to delete organization. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Confirm Deletion</ModalHeader>
      <ModalBody>
        <p>
          Are you sure you want to delete this organization? This action cannot
          be undone.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={handleDelete} disabled={isDeleting}>
          {isDeleting ? "Deleting..." : "Delete"}
        </Button>
        <Button color="secondary" onClick={toggle} disabled={isDeleting}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteOrganizationModal;
