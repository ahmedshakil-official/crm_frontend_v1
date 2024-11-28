import { ClientList } from "@/Constant";
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
import "./ClientList.css";

interface Client {
  name: string;
  company: string;
  contactNumber: string;
  email: string;
  projectStatus: string;
}

const initialClients: Client[] = [
  {
    name: "Alice Johnson",
    company: "TechCorp",
    contactNumber: "555-123-4567",
    email: "alice.johnson@techcorp.com",
    projectStatus: "Active",
  },
  {
    name: "Alice Johnson",
    company: "TechCorp",
    contactNumber: "555-123-4567",
    email: "alice.johnson@techcorp.com",
    projectStatus: "Active",
  },
  {
    name: "Alice Johnson",
    company: "TechCorp",
    contactNumber: "555-123-4567",
    email: "alice.johnson@techcorp.com",
    projectStatus: "Active",
  },
  {
    name: "Alice Johnson",
    company: "TechCorp",
    contactNumber: "555-123-4567",
    email: "alice.johnson@techcorp.com",
    projectStatus: "Active",
  },
  {
    name: "Alice Johnson",
    company: "TechCorp",
    contactNumber: "555-123-4567",
    email: "alice.johnson@techcorp.com",
    projectStatus: "Active",
  },
  {
    name: "Alice Johnson",
    company: "TechCorp",
    contactNumber: "555-123-4567",
    email: "alice.johnson@techcorp.com",
    projectStatus: "Active",
  },
  {
    name: "Alice Johnson",
    company: "TechCorp",
    contactNumber: "555-123-4567",
    email: "alice.johnson@techcorp.com",
    projectStatus: "Active",
  },
  {
    name: "Alice Johnson",
    company: "TechCorp",
    contactNumber: "555-123-4567",
    email: "alice.johnson@techcorp.com",
    projectStatus: "Active",
  },
  {
    name: "Alice Johnson",
    company: "TechCorp",
    contactNumber: "555-123-4567",
    email: "alice.johnson@techcorp.com",
    projectStatus: "Active",
  },
  {
    name: "Bob Lee",
    company: "Innovate Inc.",
    contactNumber: "555-987-6543",
    email: "bob.lee@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    name: "Bob Lee",
    company: "Innovate Inc.",
    contactNumber: "555-987-6543",
    email: "bob.lee@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    name: "Bob Lee",
    company: "Innovate Inc.",
    contactNumber: "555-987-6543",
    email: "bob.lee@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    name: "Bob Lee",
    company: "Innovate Inc.",
    contactNumber: "555-987-6543",
    email: "bob.lee@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    name: "Bob Lee",
    company: "Innovate Inc.",
    contactNumber: "555-987-6543",
    email: "bob.lee@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    name: "Bob Lee",
    company: "Innovate Inc.",
    contactNumber: "555-987-6543",
    email: "bob.lee@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    name: "Bob Lee",
    company: "Innovate Inc.",
    contactNumber: "555-987-6543",
    email: "bob.lee@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    name: "Bob Lee",
    company: "Innovate Inc.",
    contactNumber: "555-987-6543",
    email: "bob.lee@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    name: "Bob Lee",
    company: "Innovate Inc.",
    contactNumber: "555-987-6543",
    email: "bob.lee@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    name: "Bob Lee",
    company: "Innovate Inc.",
    contactNumber: "555-987-6543",
    email: "bob.lee@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    name: "Bob Lee",
    company: "Innovate Inc.",
    contactNumber: "555-987-6543",
    email: "bob.lee@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    name: "Bob Lee",
    company: "Innovate Inc.",
    contactNumber: "555-987-6543",
    email: "bob.lee@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    name: "Bob Lee",
    company: "Innovate Inc.",
    contactNumber: "555-987-6543",
    email: "bob.lee@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    name: "Bob Lee",
    company: "Innovate Inc.",
    contactNumber: "555-987-6543",
    email: "bob.lee@innovateinc.com",
    projectStatus: "Pending",
  },
];

const ClientListBody: React.FC = () => {
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentClient, setCurrentClient] = useState<Client | null>(null);
  const [clientToDelete, setClientToDelete] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 5;

  const toggleModal = () => setModal(!modal);
  const toggleDeleteModal = () => setDeleteModal(!deleteModal);

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentClient) {
      setCurrentClient({
        ...currentClient,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSave = () => {
    if (currentClient) {
      const updatedClients = currentClient.name
        ? clients.map((cl) =>
            cl.name === currentClient.name ? currentClient : cl
          )
        : [...clients, currentClient];
      setClients(updatedClients);
    }
    toggleModal();
  };

  const handleEdit = (client: Client) => {
    setCurrentClient(client);
    toggleModal();
  };

  const handleAdd = () => {
    setCurrentClient({
      name: "",
      company: "",
      contactNumber: "",
      email: "",
      projectStatus: "Pending",
    });
    toggleModal();
  };

  const confirmDelete = () => {
    if (clientToDelete) {
      setClients(clients.filter((client) => client.name !== clientToDelete));
      setClientToDelete(null);
    }
    toggleDeleteModal();
  };

  const handleDeleteClick = (name: string) => {
    setClientToDelete(name);
    toggleDeleteModal();
  };

  // Pagination logic
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = filteredClients.slice(
    indexOfFirstClient,
    indexOfLastClient
  );

  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between pt-0 pb-2">
        <h3>{ClientList}</h3>
        <Button color="primary" className="mt-0" onClick={handleAdd}>
          Add Client
        </Button>
      </div>
      <Input
        type="text"
        placeholder="Search by name or company"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-3"
      />
      <Table bordered hover responsive>
        <thead className="thead-light">
          <tr className="text-center">
            <th>Name</th>
            <th>Company</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Project Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentClients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.company}</td>
              <td>{client.contactNumber}</td>
              <td>{client.email}</td>
              <td>{client.projectStatus}</td>
              <td className="text-center align-middle">
                <div className="d-flex justify-content-center gap-2 align-items-center">
                  <Button
                    color="success"
                    size="sm"
                    onClick={() => handleEdit(client)}
                  >
                    <i className="icon-pencil-alt"></i>
                  </Button>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => handleDeleteClick(client.name)}
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

      {/* Add/Edit Modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          {currentClient?.name ? "Edit Client" : "Add Client"}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={currentClient?.name || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="company">Company</Label>
              <Input
                type="text"
                name="company"
                id="company"
                value={currentClient?.company || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="contactNumber">Contact Number</Label>
              <Input
                type="text"
                name="contactNumber"
                id="contactNumber"
                value={currentClient?.contactNumber || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={currentClient?.email || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="projectStatus">Project Status</Label>
              <Input
                type="text"
                name="projectStatus"
                id="projectStatus"
                value={currentClient?.projectStatus || ""}
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
          Are you sure you want to delete <strong>{clientToDelete}</strong>?
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

export default ClientListBody;
