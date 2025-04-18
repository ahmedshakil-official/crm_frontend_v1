import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Row,
  Table,
} from "reactstrap";
import AddEmployeeModal from "../../Modals/AddEmployeeModal";

const Employee: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Card>
      <CardHeader>
        <Row className="d-flex justify-content-between align-items-center">
          <Col md={3}>
            <h3 className="mb-0">Employee</h3>
          </Col>
          <Col md={6} xs="12">
            <InputGroup>
              <Input type="text" placeholder="Search by name or email... " />
              <InputGroupText className="bg-success rounded-start-0 border-start-0">
                <FaSearch />
              </InputGroupText>
            </InputGroup>
          </Col>
          <Col md={3} xs="12" className="d-flex justify-content-end">
            <Button color="primary" onClick={toggleModal}>
              Add Employee
              <i className="fa-solid fa-circle-plus ms-2"></i>
            </Button>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Table hover responsive className="text-nowrap">
          <thead className="table-light">
            <tr className="text-center">
              <th style={{ width: "100px" }}>Actions</th>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Join Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>
                <div className="d-flex justify-content-center gap-2">
                  <Button color="primary" size="sm">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>
                  <Button color="danger" size="sm">
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </div>
              </td>
              <td>EMP001</td>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>+1234567890</td>
              <td>Software Engineer</td>
              <td>Development</td>
              <td>01/01/2023</td>
              <td>
                <span className="badge bg-success">Active</span>
              </td>
            </tr>
            <tr className="text-center">
              <td>
                <div className="d-flex justify-content-center gap-2">
                  <Button color="primary" size="sm">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Button>
                  <Button color="danger" size="sm">
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </div>
              </td>
              <td>EMP002</td>
              <td>Roky Bhai</td>
              <td>johnabr@example.com</td>
              <td>+1234567890</td>
              <td>Software Engineer</td>
              <td>Development</td>
              <td>01/01/2023</td>
              <td>
                <span className="badge bg-danger">Deactive</span>
              </td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
      {/* Modal */}
      <AddEmployeeModal 
        isOpen={isModalOpen}
        toggle={toggleModal}
      />
    </Card>
  );
};

export default Employee;
