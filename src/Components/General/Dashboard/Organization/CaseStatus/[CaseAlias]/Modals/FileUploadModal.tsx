import { useGetCaseUsersQuery } from "@/Redux/Reducers/Organization/Cases/SingleCaseInfo/CaseUsers/CaseUsersApi";
import { useAddCaseFilesDetailsMutation } from "@/Redux/Reducers/Organization/Cases/SingleCaseInfo/FileManager/FileManagerDetailsApi";

import {
  FileOwnerProps,
  FileUploadModalProps,
} from "@/Types/Organization/Cases/CaseTypes";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

const FileUploadModal: React.FC<FileUploadModalProps> = ({
  isOpen,
  toggle,
}) => {
  const [files, setFiles] = useState<File | null>(null);
  const params = useParams();
  const { casealias } = params;
  const [fileOwners, setfileOwners] = useState<FileOwnerProps | null>(null);

  // rtk hooks
  const { data: caseUsers, isLoading } = useGetCaseUsersQuery({
    case_alias: casealias,
  });
  const [addCaseFilesDetails, { isLoading: isUploading }] =
    useAddCaseFilesDetailsMutation();

  const [formData, setFormData] = useState({
    file: "",
    fileType: "",
    fileOwner: 0,
    fileName: "",
    description: "",
    specialNotes: "",
  });

  useEffect(() => {
    if (caseUsers) {
      setfileOwners(caseUsers);
    }
  }, [caseUsers]);

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

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!files) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const uploadData = new FormData();
    // Append all fields including the file
    uploadData.append("file", files as File);
    uploadData.append("file_type", formData.fileType);
    uploadData.append("file_owner", formData.fileOwner.toString());
    uploadData.append("name", formData.fileName || "N/A");
    uploadData.append("description", formData.description);
    uploadData.append("special_notes", formData.specialNotes);

    try {
      await addCaseFilesDetails({
        case_alias: casealias,
        payload: uploadData,
      }).unwrap();
      // Reset form data after successful upload
      setFiles(null);
      setFormData({
        file: "",
        fileType: "",
        fileOwner: 0,
        fileName: "",
        description: "",
        specialNotes: "",
      });
      toast.success("File uploaded successfully!");
      toggle();
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Failed to upload file.");
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>
        <span className="fs-4 text-primary">Upload File</span>
      </ModalHeader>
      <Form onSubmit={handleUpload}>
        <ModalBody>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="fileUpload" className="form-label">
                  Select Files<span className="text-danger">*</span>
                </Label>
                <Input
                  type="file"
                  id="fileUpload"
                  name="fileUpload"
                  onChange={handleFileChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="fileType" className="form-label">
                  Select File Type<span className="text-danger">*</span>
                </Label>
                <Input
                  type="select"
                  id="fileType"
                  name="fileType"
                  value={formData.fileType}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>
                  <option value="COMPLIANCE_DOCUMENTS">
                    Compliance Documents
                  </option>
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
                  <option value="PROTECTION_DOCUMENTS">
                    Protection Documents
                  </option>
                  <option value="AML_AND_SANCTIONS_SEARCH">
                    AML and Sanctions Search
                  </option>
                  <option value="OTHERS">Others</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="fileOwner" className="form-label">
                  File Owner<span className="text-danger">*</span>
                </Label>
                <Input
                  type="select"
                  id="fileOwner"
                  name="fileOwner"
                  value={formData.fileOwner}
                  onChange={handleInputChange}
                >
                  <option value="">Select...</option>

                  {/* Options for Joint Users */}
                  {Array.isArray(fileOwners) &&
                    fileOwners.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.first_name} {user.last_name}
                      </option>
                    ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
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
            </Col>
          </Row>
          <Row>
            <Col md={6}>
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
            </Col>
            <Col md={6}>
              {" "}
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
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary">
            {isUploading ? "Uploading..." : "Upload File"}
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default FileUploadModal;
