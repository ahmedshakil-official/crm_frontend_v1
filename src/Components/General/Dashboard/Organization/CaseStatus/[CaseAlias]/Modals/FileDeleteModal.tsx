import { useDeleteCaseFilesDetailsMutation } from "@/Redux/Reducers/Organization/Cases/SingleCaseInfo/FileManager/FileManagerDetailsApi";
import { FileDeleteModalProps } from "@/Types/Organization/Cases/CaseTypes";
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
        Are you sure you want to delete the{" "}
        <span className="text-danger">{file?.file_type}</span> file?
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
