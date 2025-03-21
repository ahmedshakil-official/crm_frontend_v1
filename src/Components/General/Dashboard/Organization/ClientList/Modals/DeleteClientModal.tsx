import { useDeleteClientDetailsMutation } from "@/Redux/Reducers/Directors/ClientDetailsApi";
import { DeleteClientModalProps } from "@/Types/Organization/ClientTypes";
import { toast } from "react-toastify";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const DeleteClientModal: React.FC<DeleteClientModalProps> = ({
  isOpen,
  toggle,
  clientName,
  clientAlias,
}) => {
  const [deleteClientDetails, { isLoading }] = useDeleteClientDetailsMutation();

  const handleDelete = async () => {
    if (!clientAlias) return;
    try {
      const response = await deleteClientDetails({ clientAlias });
      if ("data" in response) {
        toast.success("Client deleted successfully.");
        toggle();
      } else if ("error" in response) {
        toast.error("Failed to delete the client. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting client:", error);
      toast.error("Failed to delete the client. Please try again.");
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Delete Client</ModalHeader>
      <ModalBody>Are you sure you want to delete {clientName}?</ModalBody>
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

export default DeleteClientModal;
