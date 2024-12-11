import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";

const FileManager = () => {
  const [files, setFiles] = useState<File[]>([]);

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFiles = Array.from(e.target.files); // Converts FileList to an array
      setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    }
  };

  // Handle file delete
  const handleDelete = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  // Handle file download (mock functionality for demo)
  const handleDownload = (file: File) => {
    alert(`Download initiated for: ${file.name}`);
  };

  return (
    <Col xxl="6" xl="7" className="box-col-12">
    <Card>
      <CardHeader>
        <h4 className="text-primary opacity-75">File Manager</h4>
      </CardHeader>
      <CardBody>
        {/* Filter Options */}
        <Card className="pt-3 mt-4 shadow-lg p-3 rounded-1">
          <Row className="justify-content-center text-center g-3">
            {/* Employee Filter */}
            <Col xs="12" sm="6" md="4">
              <Input type="select" id="1" className="py-1">
                <option value="">Select 1</option>
                <option value="1">Select Employee</option>
                <option value="2">Select Employee</option>
              </Input>
            </Col>

            {/* Case Category Filter */}
            <Col xs="12" sm="6" md="4">
              <Input type="select" id="2" className="py-1">
                <option value="">Select 2</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Input>
            </Col>

            {/* Application Type Filter */}
            <Col xs="12" sm="6" md="4">
              <Input type="select" id="3" className="py-1">
                <option value="">Select 3</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Input>
            </Col>
          </Row>
        </Card>
        <div>
          <Card>
            <CardBody>
              {/* File Upload */}
              <div className="mb-3">
                <Form
                  onSubmit={(e) => {
                    e.preventDefault(); // Prevent form submission from reloading the page
                  }}
                >
                  {/* File Upload Field */}
                  <FormGroup>
                    <Label for="fileUpload" className="form-label">
                      Upload File
                    </Label>
                    <Input
                      type="file"
                      id="fileUpload"
                      name="fileUpload"
                      multiple
                      onChange={handleFileUpload}
                    />
                  </FormGroup>

                  {/* Submit Button */}
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>

              {/* Display Uploaded Files */}
              <ListGroup>
                {files.map((file, index) => (
                  <ListGroupItem
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span>{file.name}</span>
                    <div>
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
                    </div>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </CardBody>
          </Card>
        </div>
      </CardBody>
    </Card>
    </Col>
  );
};

export default FileManager;
