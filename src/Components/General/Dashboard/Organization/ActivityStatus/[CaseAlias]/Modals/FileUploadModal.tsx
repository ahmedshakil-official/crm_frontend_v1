import apiClient from "@/services/api-client";
import {
  FileOwnerProps,
  FileUploadModalProps,
} from "@/Types/Organization/CaseTypes";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const FileUploadModal: React.FC<FileUploadModalProps> = ({
  isOpen,
  toggle,
  onSave,
}) => {
  const [files, setFiles] = useState<File | null>(null);
  const params = useParams();
  const { casealias } = params;

  const [formData, setFormData] = useState({
    file: "",
    fileType: "",
    fileOwner: 0,
    fileName: "",
    description: "",
    specialNotes: "",
  });
  const [fileOwners, setfileOwners] = useState<FileOwnerProps | null>(null);

  const fetchCaseFileOwners = async () => {
    try {
      const response = await apiClient.get(`/cases/${casealias}/users/`);
      setfileOwners(response.data || []);
      console.log("Fetched File Owners:", response.data); // Debug log
    } catch (error) {
      console.error("Error Fetching Cases", error);
    }
  };

  useEffect(() => {
    fetchCaseFileOwners();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files[0]);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "fileOwner" ? Number(value) : value,
    });
  };

  const handleUpload = async () => {
    if (!files || !formData.fileName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const payload = {
      file: files, // Use 'files' here instead of formData.file
      file_type: formData.fileType,
      file_owner: formData.fileOwner,
      name: formData.fileName,
      description: formData.description,
      special_notes: formData.specialNotes,
    };

    try {
      const response = await apiClient.post(
        `/cases/${casealias}/files/`,
        payload,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("File uploaded successfully!");
      onSave(); // Callback to refresh data
      toggle(); // Close modal
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Failed to upload file.");
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Upload File</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="fileUpload" className="form-label">
              Select Files
            </Label>
            <Input
              type="file"
              id="fileUpload"
              name="fileUpload"
              onChange={handleFileChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="fileType" className="form-label">
              Select File Type
            </Label>
            <Input
              type="select"
              id="fileType"
              name="fileType"
              value={formData.fileType}
              onChange={handleInputChange}
            >
              <option value="">--Select File Type--</option>
              <option value="COMPLIANCE_DOCUMENTS">Compliance Documents</option>
              <option value="FACT_FINDS">Fact Finds</option>
              <option value="IDS">IDs</option>
              <option value="PROOF_OF_ADDRESS">Proof of Address</option>
              <option value="INCOME_DOCUMENTS">Income Documents</option>
              <option value="BANK_STATEMENTS">Bank Statements</option>
              <option value="PROOF_OF_DEPOSIT_BANK_STATEMENTS">
                Proof of Deposit - Bank Statements
              </option>
              <option value="DONOR_DOCUMENTS">Donor Documents</option>
              <option value="CREDIT_REPORT">Credit Report</option>
              <option value="RESEARCH_DOCUMENTS">Research Documents</option>
              <option value="LENDERS_KFI">Lender's KFI</option>
              <option value="LENDERS_DIP">Lender's DIP</option>
              <option value="LENDERS_FULL_MORTGAGE_APPLICATION">
                Lender's Full Mortgage Application
              </option>
              <option value="LENDERS_OFFER">Lender's Offer</option>
              <option value="SUITABILITY_LETTER">Suitability Letter</option>
              <option value="GENERAL_INSURANCE_DOCUMENTS">
                General Insurance Documents
              </option>
              <option value="PROTECTION_DOCUMENTS">Protection Documents</option>
              <option value="AML_AND_SANCTIONS_SEARCH">
                AML and Sanctions Search
              </option>
              <option value="OTHERS">Others</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="fileOwner" className="form-label">
              File Owner
            </Label>
            <Input
              type="select"
              id="fileOwner"
              name="fileOwner"
              value={formData.fileOwner}
              onChange={handleInputChange}
            >
              <option value="">--Select File Owner--</option>

              {/* Options for Joint Users */}
              {fileOwners && Object.keys(fileOwners).length > 0 ? (
                <>
                  {/* Lead User Option */}
                  <option value={fileOwners?.lead_user?.id}>
                    {`${fileOwners.lead_user?.first_name} ${fileOwners?.lead_user?.last_name} (Lead User)`}
                  </option>

                  {/* Joint Users Options */}
                  {fileOwners.joint_users?.map((jointUser) => (
                    <option
                      key={jointUser.joint_user?.id}
                      value={jointUser.joint_user?.id}
                    >
                      {`${jointUser.joint_user?.first_name} ${jointUser.joint_user?.last_name} (Joint User)`}
                    </option>
                  ))}
                </>
              ) : (
                <option disabled>No file owners available</option>
              )}
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="fileName" className="form-label">
              File Name
            </Label>
            <Input
              type="text"
              id="fileName"
              name="fileName"
              placeholder="Write your file name"
              value={formData.fileName}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="description" className="form-label">
              Description
            </Label>
            <Input
              type="textarea"
              id="description"
              name="description"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="specialNotes" className="form-label">
              Special Notes
            </Label>
            <Input
              type="textarea"
              id="specialNotes"
              name="specialNotes"
              placeholder="Enter special notes"
              value={formData.specialNotes}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpload}>
          Upload
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default FileUploadModal;
