import { useDeleteOrganizationMutation } from "@/Redux/Reducers/Network/Organization/SingleOrganization/SingleOrganizationApi";
import { DeleteOrganizationModalProps } from "@/Types/Network/OrganizationsTypes";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const DeleteOrganizationModal: React.FC<DeleteOrganizationModalProps> = ({
  isOpen,
  toggle,
  organizationInfo,
}) => {
  const router = useRouter();
  // rtk hooks
  const [deleteOrganization, { isLoading }] = useDeleteOrganizationMutation();

  const handleDelete = async () => {
    try {
      const slug = organizationInfo?.slug;
      const response = await deleteOrganization({ slug });
      toggle();
      if (response.data === null) {
        toast.success("Organization deleted successfully!");
      } else {
        toast.error("Failed to delete organization.");
      }
      router.push("/dashboard/network");
    } catch (error) {
      console.error("Failed to delete organization", error);
      toast.error("Failed to delete organization. Please try again.");
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Confirm Deletion</ModalHeader>
      <ModalBody>
        <p>
          Are you sure you want to delete{" "}
          <strong className="text-danger">{organizationInfo?.name}</strong>{" "}
          organization? This action cannot be undone.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={handleDelete} disabled={isLoading}>
          {isLoading ? "Deleting..." : "Delete"}
        </Button>
        <Button color="secondary" onClick={toggle} disabled={isLoading}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteOrganizationModal;
