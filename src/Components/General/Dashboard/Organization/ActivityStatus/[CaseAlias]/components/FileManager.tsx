import apiClient from "@/services/api-client";
import { CaseFileProps } from "@/Types/Organization/CaseTypes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Spinner,
  Table,
} from "reactstrap";
import FileUploadModal from "../Modals/FileUploadModal";

const FileManager: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const filesPerPage = 5;
  const [caseFiles, setCaseFiles] = useState<CaseFileProps[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { casealias } = params;

  const totalPages = Math.ceil(caseFiles.length / filesPerPage);
  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = caseFiles.slice(indexOfFirstFile, indexOfLastFile);

  const fetchCaseFiles = async () => {
    setIsLoading(true);
    try {
      const CaseData = await apiClient.get(`/cases/${casealias}/files`);
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

  const toggleModal = () => setModalOpen(!modalOpen);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Col lg="7" sm="12" className="box-col-12">
      <Card>
        <CardHeader className="d-flex justify-content-between">
          <h3>File Manager</h3>
          <Button color="primary" onClick={toggleModal}>
            Upload Files
          </Button>
        </CardHeader>
        <CardBody>
          {isLoading ? (
            <div className="d-flex justify-content-center my-5">
              <Spinner color="primary" />
            </div>
          ) : (
            <>
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
                            target="_blank"
                            rel="noopener noreferrer"
                            href={file.file}
                          >
                            Download
                          </Button>
                          <Button
                            color="danger"
                            size="sm"
                            onClick={() => console.log(`Delete ${file.name}`)}
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
            </>
          )}
        </CardBody>
      </Card>

      <FileUploadModal
        isOpen={modalOpen}
        toggle={toggleModal}
        onSave={fetchCaseFiles}
      />
    </Col>
  );
};

export default FileManager;
