import { LeadList } from "@/Constant";
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
import "./LeadList.css";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  createdDate: string;
}

const initialLeads: Lead[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    status: "Interested",
    createdDate: "2024-01-10",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    status: "Contacted",
    createdDate: "2024-02-15",
  },
  {
    id: "3",
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    status: "Interested",
    createdDate: "2024-01-10",
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@example.com",
    phone: "456-789-0123",
    status: "Not Interested",
    createdDate: "2024-03-01",
  },
  {
    id: "5",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    status: "Contacted",
    createdDate: "2024-02-15",
  },
  {
    id: "6",
    name: "Alice Brown",
    email: "alice@example.com",
    phone: "456-789-0123",
    status: "Not Interested",
    createdDate: "2024-03-01",
  },
  {
    id: "7",
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "321-654-9870",
    status: "Converted",
    createdDate: "2024-04-05",
  },
  {
    id: "8",
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "321-654-9870",
    status: "Converted",
    createdDate: "2024-04-05",
  },
  {
    id: "9",
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "321-654-9870",
    status: "Converted",
    createdDate: "2024-04-05",
  },
  {
    id: "10",
    name: "Bob Johnson4",
    email: "bob@example.com",
    phone: "321-654-9870",
    status: "Converted",
    createdDate: "2024-04-05",
  },
  {
    id: "11",
    name: "Bob Johnson45",
    email: "bob@example.com",
    phone: "321-654-9870",
    status: "Converted",
    createdDate: "2024-04-05",
  },
  {
    id: "12",
    name: "Bob Johnson2",
    email: "bob@example.com",
    phone: "321-654-9870",
    status: "Converted",
    createdDate: "2024-04-05",
  },
  {
    id: "13",
    name: "Bob Johnson34",
    email: "bob@example.com",
    phone: "321-654-9870",
    status: "Converted",
    createdDate: "2024-04-05",
  },
  {
    id: "14",
    name: "Bob Johnson234",
    email: "bob@example.com",
    phone: "321-654-9870",
    status: "Converted",
    createdDate: "2024-04-05",
  },
];

const LeadListBody: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentLead, setCurrentLead] = useState<Lead | null>(null);
  const [leadToDelete, setLeadToDelete] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 5;

  const toggleModal = () => setModal(!modal);
  const toggleDeleteModal = () => setDeleteModal(!deleteModal);

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentLead) {
      setCurrentLead({
        ...currentLead,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSave = () => {
    if (currentLead) {
      const updatedLeads = currentLead.id
        ? leads.map((lead) => (lead.id === currentLead.id ? currentLead : lead))
        : [...leads, currentLead];
      setLeads(updatedLeads);
    }
    toggleModal();
  };

  const handleEdit = (lead: Lead) => {
    setCurrentLead(lead);
    toggleModal();
  };

  const handleAdd = () => {
    setCurrentLead({
      id: "",
      name: "",
      email: "",
      phone: "",
      status: "",
      createdDate: new Date().toISOString().slice(0, 10),
    });
    toggleModal();
  };

  const confirmDelete = () => {
    if (leadToDelete) {
      setLeads(leads.filter((lead) => lead.id !== leadToDelete));
      setLeadToDelete(null);
    }
    toggleDeleteModal();
  };

  const handleDeleteClick = (id: string) => {
    setLeadToDelete(id);
    toggleDeleteModal();
  };
  // Get the name of the Lead to delete based on the ID
  const leadToDeleteName = leadToDelete
    ? leads.find((lead) => lead.id === leadToDelete)?.name
    : "";

  // Pagination logic
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirstLead, indexOfLastLead);

  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between pt-0 pb-2">
        <h3>{LeadList}</h3>
        <Button color="primary" className="mt-0" onClick={handleAdd}>
          Add Lead
        </Button>
      </div>
      <Input
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-3"
      />
      <Table bordered hover responsive>
        <thead className="thead-light">
          <tr className="text-center">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentLeads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.status}</td>
              <td>{lead.createdDate}</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2 align-items-center">
                  <Button
                    color="success"
                    size="sm"
                    onClick={() => handleEdit(lead)}
                  >
                    <i className="icon-pencil-alt"></i>
                  </Button>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => handleDeleteClick(lead.id)}
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

      {/* Add/Edit Lead Modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          {currentLead?.id ? "Edit Lead" : "Add Lead"}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={currentLead?.name || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={currentLead?.email || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                type="text"
                name="phone"
                id="phone"
                value={currentLead?.phone || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="status">Status</Label>
              <Input
                type="text"
                name="status"
                id="status"
                value={currentLead?.status || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="createdDate">Created Date</Label>
              <Input
                type="date"
                name="createdDate"
                id="createdDate"
                value={currentLead?.createdDate || ""}
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
          {leadToDeleteName && (
            <>
              Are you sure you want to delete{" "}
              <strong className="text-danger">{leadToDeleteName}</strong>?
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

export default LeadListBody;
