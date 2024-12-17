import { FileUploadModalProps } from "@/Types/Organization/CaseTypes";
import React, { useState } from "react";
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
  handleFileUpload,
}) => {
  // Modal state for file selection
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  // Handle file selection
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFiles = Array.from(e.target.files);
      setSelectedFiles(uploadedFiles);
    }
  };

  // Handle done button click to pass files back to parent component
  const onDone = () => {
    handleFileUpload(selectedFiles); // Callback to pass files to parent
    toggle(); // Close the modal
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
              onChange={onFileChange}
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
              onChange={(e) =>
                console.log(`Selected File Type: ${e.target.value}`)
              } // Handle file type selection
            >
              <option value="">--Select File Type--</option>
              <option value="COMPLIANCE_DOCUMENTS">Compliance Documents</option>
              <option value=" FACT_FINDS">Fact Finds</option>
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
              <option value="SUITABILITY_LETTER ">Suitability Letter</option>
              <option value="GENERAL_INSURANCE_DOCUMENTS">Audio</option>
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
              onChange={(e) =>
                console.log(`Selected File Owner: ${e.target.value}`)
              } // Replace with your logic
            >
              <option value="">--Select File Owner--</option>
              <option value="owner1">Owner 1</option>
              <option value="owner2">Owner 2</option>
              <option value="owner3">Owner 3</option>
            </Input>
          </FormGroup>

          {/* Description Field */}
          <FormGroup>
            <Label for="description" className="form-label">
              Description
            </Label>
            <Input
              type="textarea"
              id="description"
              name="description"
              placeholder="Enter a description for the file"
              onChange={(e) => console.log(`Description: ${e.target.value}`)} // Replace with your logic
            />
          </FormGroup>

          {/* Special Notes Field */}
          <FormGroup>
            <Label for="specialNotes" className="form-label">
              Special Notes
            </Label>
            <Input
              type="textarea"
              id="specialNotes"
              name="specialNotes"
              placeholder="Enter any special notes"
              onChange={(e) => console.log(`Special Notes: ${e.target.value}`)} // Replace with your logic
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onDone}>
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
