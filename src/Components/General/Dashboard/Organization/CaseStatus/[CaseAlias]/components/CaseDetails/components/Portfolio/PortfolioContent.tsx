import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import AddPortfolioContentModal from "./Modals/AddPortfolioContentModal";

const PortfolioContent: React.FC = () => {
  const [hasProperties, setHasProperties] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Container fluid className="p-4">
        <Form>
          <Row className="mb-4">
            <Col md={12}>
              <Card>
                <CardHeader>
                  <h5 className="mb-0 fs-3 text-primary">
                    Additional Properties
                  </h5>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label className="mb-0 me-3">
                      Do the applicants own any other properties?
                    </Label>
                    {["yes", "no"].map((value) => (
                      <div
                        key={value}
                        className="me-2 d-flex align-items-center"
                      >
                        <Input
                          name="hasProperties"
                          type="radio"
                          id={`hasProperties${
                            value.charAt(0).toUpperCase() + value.slice(1)
                          }`}
                          value={value}
                          onChange={(e) => setHasProperties(e.target.value)}
                          checked={hasProperties === value}
                          className="me-1"
                          style={{ marginTop: 0 }}
                        />
                        <Label
                          check
                          for={`hasProperties${
                            value.charAt(0).toUpperCase() + value.slice(1)
                          }`}
                          className="mb-0"
                        >
                          {value.charAt(0).toUpperCase() + value.slice(1)}
                        </Label>
                      </div>
                    ))}
                  </FormGroup>
                  {hasProperties === "yes" && (
                    <div className="mt-3">
                      <div className="table-responsive">
                        <div className="d-flex justify-content-end mb-2">
                          <Button color="success" size="sm" onClick={toggleModal}>
                            Add Portfolio
                          </Button>
                        </div>
                        <Table
                          className="table table-bordered table-hover table-striped"
                          style={{ fontSize: "0.9rem" }}
                        >
                          <thead className="table-light">
                            <tr>
                              <th
                                className="text-center"
                                style={{ width: "100px" }}
                              >
                                <i className="bi bi-pencil-square me-1"></i>
                                Edit / Delete
                              </th>
                              <th>Applicant/s</th>
                              <th>Full Address</th>
                              <th>Property Value</th>
                              <th>Monthly Rental</th>
                              <th>Lender</th>
                              <th>Balance</th>
                              <th>Value At Purchase</th>
                              <th>Date Purchased</th>
                              <th>Monthly Payment</th>
                              <th>Loan To Value</th>
                              <th>ICR</th>
                              <th>Is HMO</th>
                              <th>Is MUFB</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center d-flex justify-content-center align-items-center">
                                <Button
                                  color="primary"
                                  size="sm"
                                  className="me-1"
                                >
                                  <i className="fa-solid fa-pen-to-square"></i>
                                </Button>
                                <Button color="danger" size="sm">
                                  <i className="fa-solid fa-trash"></i>
                                </Button>
                              </td>
                              <td>Sample Data</td>
                              <td>123 Main St</td>
                              <td>£250,000</td>
                              <td>£1,200</td>
                              <td>Bank ABC</td>
                              <td>£180,000</td>
                              <td>£230,000</td>
                              <td>01/01/2022</td>
                              <td>£800</td>
                              <td>72%</td>
                              <td>1.5</td>
                              <td>No</td>
                              <td>No</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  )}

                  <FormGroup className="mt-3">
                    <Input
                      type="textarea"
                      rows={3}
                      placeholder="Add notes about additional properties..."
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="text-end">
              <Button color="secondary" className="me-2">
                Back
              </Button>
              <Button color="primary">Save / Next</Button>
            </Col>
          </Row>{" "}
        </Form>
      </Container>
      
      <AddPortfolioContentModal 
        isOpen={isModalOpen}
        toggle={toggleModal}
      />
    </>
  );
};

export default PortfolioContent;
