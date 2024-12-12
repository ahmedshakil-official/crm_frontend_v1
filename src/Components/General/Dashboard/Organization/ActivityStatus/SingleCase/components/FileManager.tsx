import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Row,
  Table,
} from "reactstrap";
import FileUploadModal from "../Modals/FileUploadModal";

const FileManager = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility
  const filesPerPage = 5;

  // Handle file upload

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleFileUpload = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  // Handle file delete
  const handleDelete = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  // Handle file download (mock functionality for demo)
  const handleDownload = (file: File) => {
    alert(`Download initiated for: ${file.name}`);
  };

  // Pagination logic
  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = files.slice(indexOfFirstFile, indexOfLastFile);
  const totalPages = Math.ceil(files.length / filesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Col xl="6" sm="12" className="box-col-12">
      <Card>
        <CardHeader className="d-flex justify-content-between">
          <h3>File Manager</h3>
          {/* Button to open the modal */}
          <Button color="primary" onClick={() => setModalOpen(true)}>
            Upload Files
          </Button>
        </CardHeader>
        <CardBody>
          {/* Filter Options */}
          <Card className="shadow-lg p-3 rounded-1">
            <Row className="justify-content-center text-center g-3">
              {/* Employee Filter */}
              <Col xs="12" sm="6" md="3">
                <Input type="select" id="1" className="py-1">
                  <option value="">Select 1</option>
                  <option value="1">Select Employee</option>
                  <option value="2">Select Employee</option>
                </Input>
              </Col>

              {/* Case Category Filter */}
              <Col xs="12" sm="6" md="3">
                <Input type="select" id="2" className="py-1">
                  <option value="">Select 2</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Input>
              </Col>

              {/* Application Type Filter */}
              <Col xs="12" sm="6" md="3">
                <Input type="select" id="3" className="py-1">
                  <option value="">Select 3</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Input>
              </Col>
              {/* Application Type Filter */}
              <Col xs="12" sm="6" md="3">
                <Input type="select" id="3" className="py-1">
                  <option value="">Select 4</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Input>
              </Col>
            </Row>
          </Card>
          <Table bordered hover className="text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>File Name</th>
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
                      <Button
                        color="success"
                        size="sm"
                        className="me-2"
                        onClick={() => handleDownload(file)}
                      >
                        Download
                      </Button>
                      <Button
                        color="danger"
                        size="sm"
                        onClick={() => handleDelete(file.name)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center">
                    No Files Available
                  </td>
                </tr>
              )}
            </tbody>
          </Table>

          {/* Pagination Controls */}
          {files.length > filesPerPage && (
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
                    currentPage === pageIndex + 1 ? "primary" : "secondary"
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
        </CardBody>
      </Card>

      {/* File Upload Modal */}
      <FileUploadModal
        isOpen={modalOpen}
        toggle={toggleModal}
        onSave={() => console.log("Success")}
        handleFileUpload={handleFileUpload}
      />
    </Col>
  );
};

export default FileManager;
