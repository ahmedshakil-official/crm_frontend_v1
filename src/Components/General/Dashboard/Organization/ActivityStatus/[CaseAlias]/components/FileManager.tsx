import apiClient from "@/services/api-client";
import {
  CaseFileProps,
  FileDeleteModalProps,
} from "@/Types/Organization/CaseTypes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Row,
  Spinner,
  Table,
} from "reactstrap";
import FileDeleteModal from "../Modals/FileDeleteModal";
import FileUploadModal from "../Modals/FileUploadModal";

const FileManager: React.FC<FileDeleteModalProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const filesPerPage = 5;
  const [caseFiles, setCaseFiles] = useState<CaseFileProps[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<CaseFileProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [filterIcon, setFilterIcon] = useState(false);
  const params = useParams();
  const { casealias } = params;

  const totalPages = Math.ceil(caseFiles.length / filesPerPage);
  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = caseFiles.slice(indexOfFirstFile, indexOfLastFile);

  const fetchCaseFiles = async () => {
    setIsLoading(true);
    try {
      const CaseData = await apiClient.get(`/cases/${casealias}/files/`);
      setCaseFiles(CaseData?.data || []);
    } catch (error) {
      console.error("Error Fetching Cases", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseFiles();
  }, []);

  const deleteFile = async (alias: string) => {
    setIsDeleting(true);
    setIsLoading(true);
    try {
      await apiClient.delete(`/cases/${casealias}/files/${alias}/`);
      fetchCaseFiles();
      toast.success("File deleted successfully.");
    } catch (error) {
      console.error("Error Deleting File", error);
      toast.error("Failed to delete the file. Please try again.");
    } finally {
      setIsLoading(false);
      setIsDeleting(false);
      toggleDeleteModal();
    }
  };

  //filter icon toggle
  const toggleFilterIcon = () => setFilterIcon(!filterIcon);

  const toggleModal = () => setModalOpen(!modalOpen);
  const toggleDeleteModal = () => setDeleteModalOpen(!deleteModalOpen);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteClick = (file: CaseFileProps) => {
    setSelectedFile(file);
    toggleDeleteModal();
  };

  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CardHeader className="d-flex justify-content-between">
          <Col md="3">
            <h3>File Manager</h3>
          </Col>
          <Col md="3" xs="12" className="text-md-end text-center mt-2 mt-md-0">
            <Button onClick={toggleFilterIcon} className="me-2">
              {filterIcon ? (
                <i className="fa-solid fa-filter-circle-xmark"></i>
              ) : (
                <i className="fa-solid fa-filter"></i>
              )}
            </Button>
            <Button color="primary" onClick={toggleModal}>
              Upload Files
            </Button>
          </Col>
        </CardHeader>

        <CardBody>
          <Row>
            {filterIcon && (
              <Card className="shadow-lg p-3 rounded-1">
                <Row className="justify-content-center text-center g-3">
                  <Col xs="12" sm="6" md="4" lg="2">
                    <Input type="select" id="1" className="py-1">
                      <option value="">Select 1</option>
                      <option value="1">Select Employee</option>
                      <option value="2">Select Employee</option>
                    </Input>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="2">
                    <Input type="select" id="2" className="py-1">
                      <option value="">Select 2</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Input>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="2">
                    <Input type="select" id="3" className="py-1">
                      <option value="">Select 3</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </Input>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="2">
                    <Input type="select" id="4" className="py-1">
                      <option value="">Select 4</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </Input>
                  </Col>
                  {/* Clear All Filters Button */}
                  <Col xs="12" sm="6" md="4" lg="2">
                    <Button className="btn btn-secondary w-100">
                      Clear All Filters
                    </Button>
                  </Col>
                </Row>
              </Card>
            )}
          </Row>
          <Row>
            {isLoading ? (
              <div className="d-flex justify-content-center my-5">
                <Spinner color="primary" />
              </div>
            ) : (
              <>
                <Table bordered hover responsive className="text-center">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>File Name</th>
                      <th>Owner Name</th>
                      <th>File Type</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentFiles.length > 0 ? (
                      currentFiles.map((file, index) => (
                        <tr key={index}>
                          <td>{indexOfFirstFile + index + 1}</td>
                          <td>{file.name}</td>
                          <td>
                            {file?.file_owner_info?.first_name}{" "}
                            {file?.file_owner_info?.last_name}
                          </td>
                          <td>{file.file_type}</td>
                          <td>
                            <div className="d-flex justify-content-center gap-2 align-items-center">
                              <a
                                href={file.file}
                                className="btn btn-success btn-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fa-solid fa-download"></i>
                              </a>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDeleteClick(file)}
                              >
                                <i className="fa-regular fa-trash-can"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="text-center">
                          No Files Available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>

                {caseFiles.length > filesPerPage && (
                  <div className="d-flex justify-content-center mt-3">
                    <Button
                      color="primary"
                      size="sm"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      Previous
                    </Button>
                    {[...Array(totalPages)].map((_, pageIndex) => (
                      <Button
                        key={pageIndex}
                        color={
                          currentPage === pageIndex + 1
                            ? "primary"
                            : "secondary"
                        }
                        size="sm"
                        className="mx-1"
                        onClick={() => handlePageChange(pageIndex + 1)}
                      >
                        {pageIndex + 1}
                      </Button>
                    ))}
                    <Button
                      color="primary"
                      size="sm"
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </>
            )}
          </Row>
        </CardBody>
      </Card>

      <FileUploadModal
        isOpen={modalOpen}
        toggle={toggleModal}
        onSave={fetchCaseFiles}
      />

      {selectedFile && (
        <FileDeleteModal
          isOpen={deleteModalOpen}
          toggle={toggleDeleteModal}
          file={selectedFile}
          isDeleting={isDeleting}
          onDelete={() => deleteFile(selectedFile.alias)}
        />
      )}
    </Col>
  );
};

export default FileManager;
