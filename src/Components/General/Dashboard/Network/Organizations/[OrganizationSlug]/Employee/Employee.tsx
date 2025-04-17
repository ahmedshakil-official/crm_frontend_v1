import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Table } from "reactstrap";

const Employee: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card>
      <CardHeader>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="mb-0">Employee</h3>
          <Button color="primary" onClick={() => setIsModalOpen(true)}>
            Add Employee
            <i className="fa-solid fa-circle-plus ms-2"></i>
          </Button>
        </div>
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
    </Card>
  );
};

export default Employee;
