import { useDeleteCaseFilesDetailsMutation } from "@/Redux/Reducers/CaseInfoDetails/FileManagerDetailsApi";
import { FileDeleteModalProps } from "@/Types/Organization/CaseTypes";
import React from "react";
import { toast } from "react-toastify";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const FileDeleteModal: React.FC<FileDeleteModalProps> = ({
  isOpen,
  toggle,
  file,
  case_alias,
  fileAlias,
}) => {
  const [deleteCaseFilesDetails, { isLoading }] =
    useDeleteCaseFilesDetailsMutation();

  if (!file) {
    return null;
  }

  const handleDeleteFile = async () => {
    try {
      if (fileAlias) {
        await deleteCaseFilesDetails({
          case_alias: case_alias,
          file_alias: fileAlias,
        }).unwrap();
        toast.success("File deleted successfully");
        toggle?.();
      }
    } catch (error) {
      console.error("Error deleting file:", error);
      toast.error("Failed to delete file");
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Confirm Delete</ModalHeader>
      <ModalBody>
        Are you sure you want to delete the file <strong>{file?.name}</strong>?
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={handleDeleteFile} disabled={isLoading}>
          {isLoading ? "Deleting..." : "Delete"}
        </Button>
        <Button color="secondary" onClick={toggle} disabled={isLoading}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default FileDeleteModal;
