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
  Table,
} from "reactstrap";
import "./EmployeeList.css";
import { EmployeeList } from "@/Constant";

interface Employee {
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: string;
}

const initialEmployees: Employee[] = [
  {
    name: "Tiger Nixon",
    position: "Accountant",
    office: "Edinburgh",
    age: 61,
    startDate: "2011/04/25",
    salary: "$320,800",
  },
  {
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    age: 63,
    startDate: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    age: 66,
    startDate: "2009/01/12",
    salary: "$86,000",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: 22,
    startDate: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    age: 33,
    startDate: "2008/11/28",
    salary: "$162,700",
  },
  {
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    age: 61,
    startDate: "2012/12/02",
    salary: "$372,000",
  },
  {
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    age: 59,
    startDate: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: "Rhona Davidson",
    position: "Integration Specialist",
    office: "Tokyo",
    age: 55,
    startDate: "2010/10/14",
    salary: "$327,900",
  },
  {
    name: "Colleen Hurst",
    position: "Javascript Developer",
    office: "San Francisco",
    age: 39,
    startDate: "2009/09/15",
    salary: "$205,500",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
  {
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
  },
];

const EmployeeListBody: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState<Employee | null>(null);
  const [employeeToDelete, setEmployeeToDelete] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5;

  const toggleModal = () => setModal(!modal);
  const toggleDeleteModal = () => setDeleteModal(!deleteModal);

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentEmployee) {
      setCurrentEmployee({
        ...currentEmployee,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSave = () => {
    if (currentEmployee) {
      const updatedEmployees = currentEmployee.name
        ? employees.map((emp) =>
            emp.name === currentEmployee.name ? currentEmployee : emp
          )
        : [...employees, currentEmployee];
      setEmployees(updatedEmployees);
    }
    toggleModal();
  };

  const handleEdit = (employee: Employee) => {
    setCurrentEmployee(employee);
    toggleModal();
  };

  const handleAdd = () => {
    setCurrentEmployee({
      name: "",
      position: "",
      office: "",
      age: 0,
      startDate: "",
      salary: "",
    });
    toggleModal();
  };

  const confirmDelete = () => {
    if (employeeToDelete) {
      setEmployees(
        employees.filter((employee) => employee.name !== employeeToDelete)
      );
      setEmployeeToDelete(null);
    }
    toggleDeleteModal();
  };

  const handleDeleteClick = (name: string) => {
    setEmployeeToDelete(name);
    toggleDeleteModal();
  };

  // Pagination logic
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between pt-0 pb-2">
        <h3>{EmployeeList}</h3>
        <Button color="primary" className="mt-0" onClick={handleAdd}>
          Add Employee
        </Button>
      </div>
      <Input
        type="text"
        placeholder="Search by name or position"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-3"
      />
      <Table bordered hover responsive>
        <thead className="thead-light">
          <tr className="text-center">
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start Date</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.office}</td>
              <td>{employee.age}</td>
              <td>{employee.startDate}</td>
              <td>{employee.salary}</td>
              <td className="text-center align-middle">
                <div className="d-flex justify-content-center gap-2 align-items-center">
                  <Button
                    color="success"
                    size="sm"
                    onClick={() => handleEdit(employee)}
                  >
                    <i className="icon-pencil-alt"></i>
                  </Button>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => handleDeleteClick(employee.name)}
                  >
                    <i className="icon-trash"></i>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <div className="d-flex justify-content-end p-2">
        <ul className="pagination">
          {/* Previous Page Button */}
          <li
            className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            style={{ cursor: currentPage > 1 ? "pointer" : "not-allowed" }}
          >
            <span className="page-link">
              <i className="fa-solid fa-angle-left"></i>
            </span>
          </li>

          {/* Always Show First Page if Current Page is Greater than 2 */}
          {currentPage > 2 && (
            <li
              className="page-item"
              onClick={() => handlePageChange(1)}
              style={{ cursor: "pointer" }}
            >
              <span className="page-link">1</span>
            </li>
          )}

          {/* Ellipsis Before */}
          {currentPage > 3 && (
            <li className="page-item disabled">
              <span className="page-link">...</span>
            </li>
          )}

          {/* Dynamic Page Numbers */}
          {[...Array(totalPages)]
            .map((_, i) => i + 1)
            .filter(
              (page) =>
                page === currentPage || // Current page
                page === currentPage - 1 || // Previous page
                page === currentPage + 1 // Next page
            )
            .map((page) => (
              <li
                key={page}
                className={`page-item ${
                  currentPage === page ? "active custom-active" : ""
                }`}
                onClick={() => handlePageChange(page)}
                style={{ cursor: "pointer" }}
              >
                <span className="page-link">{page}</span>
              </li>
            ))}

          {/* Ellipsis After */}
          {currentPage < totalPages - 2 && (
            <li className="page-item disabled">
              <span className="page-link">...</span>
            </li>
          )}

          {/* Last Page */}
          {currentPage < totalPages - 1 && (
            <li
              className="page-item"
              onClick={() => handlePageChange(totalPages)}
              style={{ cursor: "pointer" }}
            >
              <span className="page-link">{totalPages}</span>
            </li>
          )}

          {/* Next Page Button */}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={() =>
              currentPage < totalPages && handlePageChange(currentPage + 1)
            }
            style={{
              cursor: currentPage < totalPages ? "pointer" : "not-allowed",
            }}
          >
            <span className="page-link">
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </li>
        </ul>
      </div>
      {/* Pagination end */}

      {/* Add/Edit Employee Modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          {currentEmployee?.name ? "Edit Employee" : "Add Employee"}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={currentEmployee?.name || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="position">Position</Label>
              <Input
                type="text"
                name="position"
                id="position"
                value={currentEmployee?.position || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="office">Office</Label>
              <Input
                type="text"
                name="office"
                id="office"
                value={currentEmployee?.office || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                type="number"
                name="age"
                id="age"
                value={currentEmployee?.age || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="startDate">Start Date</Label>
              <Input
                type="date"
                name="startDate"
                id="startDate"
                value={currentEmployee?.startDate || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="salary">Salary</Label>
              <Input
                type="text"
                name="salary"
                id="salary"
                value={currentEmployee?.salary || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal isOpen={deleteModal} toggle={toggleDeleteModal}>
        <ModalHeader toggle={toggleDeleteModal}>Confirm Delete</ModalHeader>
        <ModalBody>
          Are you sure you want to delete <strong>{employeeToDelete}</strong>?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={confirmDelete}>
            Yes, Delete
          </Button>
          <Button color="secondary" onClick={toggleDeleteModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EmployeeListBody;
