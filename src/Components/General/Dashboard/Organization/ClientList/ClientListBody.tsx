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
  id: string;
  name: string;
  company: string;
  contactNumber: string;
  email: string;
  projectStatus: string;
}

const initialClients: Client[] = [
  {
    id: "1",
    name: "Alice Johnson",
    company: "TechCorp",
    contactNumber: "555-123-4567",
    email: "alice.johnson@techcorp.com",
    projectStatus: "Active",
  },
  {
    id: "2",
    name: "Bob Smith",
    company: "TechCorp",
    contactNumber: "555-123-4568",
    email: "bob.smith@techcorp.com",
    projectStatus: "Active",
  },
  {
    id: "3",
    name: "Charlie Davis",
    company: "TechCorp",
    contactNumber: "555-123-4569",
    email: "charlie.davis@techcorp.com",
    projectStatus: "Active",
  },
  {
    id: "4",
    name: "Diana Moore",
    company: "TechCorp",
    contactNumber: "555-123-4570",
    email: "diana.moore@techcorp.com",
    projectStatus: "Active",
  },
  {
    id: "5",
    name: "Eva Taylor",
    company: "TechCorp",
    contactNumber: "555-123-4571",
    email: "eva.taylor@techcorp.com",
    projectStatus: "Active",
  },
  {
    id: "6",
    name: "Frank White",
    company: "TechCorp",
    contactNumber: "555-123-4572",
    email: "frank.white@techcorp.com",
    projectStatus: "Active",
  },
  {
    id: "7",
    name: "Grace Black",
    company: "TechCorp",
    contactNumber: "555-123-4573",
    email: "grace.black@techcorp.com",
    projectStatus: "Active",
  },
  {
    id: "8",
    name: "Hannah Green",
    company: "TechCorp",
    contactNumber: "555-123-4574",
    email: "hannah.green@techcorp.com",
    projectStatus: "Active",
  },
  {
    id: "9",
    name: "Ivy Adams",
    company: "Innovate Inc.",
    contactNumber: "555-987-6543",
    email: "ivy.adams@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    id: "10",
    name: "Jack Lee",
    company: "Innovate Inc.",
    contactNumber: "555-987-6544",
    email: "jack.lee@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    id: "11",
    name: "Karen Young",
    company: "Innovate Inc.",
    contactNumber: "555-987-6545",
    email: "karen.young@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    id: "12",
    name: "Louis King",
    company: "Innovate Inc.",
    contactNumber: "555-987-6546",
    email: "louis.king@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    id: "13",
    name: "Megan White",
    company: "Innovate Inc.",
    contactNumber: "555-987-6547",
    email: "megan.white@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    id: "14",
    name: "Nathan Brown",
    company: "Innovate Inc.",
    contactNumber: "555-987-6548",
    email: "nathan.brown@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    id: "15",
    name: "Olivia Harris",
    company: "Innovate Inc.",
    contactNumber: "555-987-6549",
    email: "olivia.harris@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    id: "16",
    name: "Paul Robinson",
    company: "Innovate Inc.",
    contactNumber: "555-987-6550",
    email: "paul.robinson@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    id: "17",
    name: "Quincy Martin",
    company: "Innovate Inc.",
    contactNumber: "555-987-6551",
    email: "quincy.martin@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    id: "18",
    name: "Rachel Scott",
    company: "Innovate Inc.",
    contactNumber: "555-987-6552",
    email: "rachel.scott@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    id: "19",
    name: "Steve Allen",
    company: "Innovate Inc.",
    contactNumber: "555-987-6553",
    email: "steve.allen@innovateinc.com",
    projectStatus: "Pending",
  },
  {
    id: "20",
    name: "Tracy Carter",
    company: "Innovate Inc.",
    contactNumber: "555-987-6554",
    email: "tracy.carter@innovateinc.com",
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
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSave = () => {
    if (currentClient) {
      const updatedClients = currentClient.id
        ? clients.map((cl) => (cl.id === currentClient.id ? currentClient : cl))
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
      id: "",
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
      setClients(clients.filter((client) => client.id !== clientToDelete));
      setClientToDelete(null);
    }
    toggleDeleteModal();
  };

  const handleDeleteClick = (id: string) => {
    setClientToDelete(id);
    toggleDeleteModal();
  };
  // Get the name of the client to delete based on the ID
  const clientToDeleteName = clientToDelete
    ? clients.find((client) => client.id === clientToDelete)?.name
    : "";

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
            <tr key={client.id}>
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
                    onClick={() => handleDeleteClick(client.id)}
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
          {currentClient?.id ? "Edit Client" : "Add Client"}
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
          {clientToDeleteName && (
            <>
              Are you sure you want to delete{" "}
              <strong className="text-danger">{clientToDeleteName}</strong>?
            </>
          )}
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
