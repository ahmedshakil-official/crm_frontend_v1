import { IntroducerList } from "@/Constant";
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
import "./IntroducerList.css";

interface Introducer {
  name: string;
  location: string;
  contactNumber: string;
  email: string;
  referredLeads: number;
}

const initialIntroducers: Introducer[] = [
  {
    name: "John Doe",
    location: "New York",
    contactNumber: "123-456-7890",
    email: "johndoe@example.com",
    referredLeads: 15,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
    referredLeads: 20,
  },
];

const IntroducerListBody: React.FC = () => {
  const [introducers, setIntroducers] =
    useState<Introducer[]>(initialIntroducers);
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentIntroducer, setCurrentIntroducer] = useState<Introducer | null>(
    null
  );
  const [introducerToDelete, setIntroducerToDelete] = useState<string | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const introducersPerPage = 5;

  const toggleModal = () => setModal(!modal);
  const toggleDeleteModal = () => setDeleteModal(!deleteModal);

  const filteredIntroducers = introducers.filter(
    (introducer) =>
      introducer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      introducer.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentIntroducer) {
      setCurrentIntroducer({
        ...currentIntroducer,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSave = () => {
    if (currentIntroducer) {
      const updatedIntroducers = currentIntroducer.name
        ? introducers.map((intro) =>
            intro.name === currentIntroducer.name ? currentIntroducer : intro
          )
        : [...introducers, currentIntroducer];
      setIntroducers(updatedIntroducers);
    }
    toggleModal();
  };

  const handleEdit = (introducer: Introducer) => {
    setCurrentIntroducer(introducer);
    toggleModal();
  };

  const handleAdd = () => {
    setCurrentIntroducer({
      name: "",
      location: "",
      contactNumber: "",
      email: "",
      referredLeads: 0,
    });
    toggleModal();
  };

  const confirmDelete = () => {
    if (introducerToDelete) {
      setIntroducers(
        introducers.filter(
          (introducer) => introducer.name !== introducerToDelete
        )
      );
      setIntroducerToDelete(null);
    }
    toggleDeleteModal();
  };

  const handleDeleteClick = (name: string) => {
    setIntroducerToDelete(name);
    toggleDeleteModal();
  };

  // Pagination logic
  const indexOfLastIntroducer = currentPage * introducersPerPage;
  const indexOfFirstIntroducer = indexOfLastIntroducer - introducersPerPage;
  const currentIntroducers = filteredIntroducers.slice(
    indexOfFirstIntroducer,
    indexOfLastIntroducer
  );

  const totalPages = Math.ceil(filteredIntroducers.length / introducersPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between pt-0 pb-2">
        <h3>{IntroducerList}</h3>
        <Button color="primary" className="mt-0" onClick={handleAdd}>
          Add Introducer
        </Button>
      </div>
      <Input
        type="text"
        placeholder="Search by name or location"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-3"
      />
      <Table bordered hover responsive>
        <thead className="thead-light">
          <tr className="text-center">
            <th>Name</th>
            <th>Location</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Referred Leads</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentIntroducers.map((introducer, index) => (
            <tr key={index}>
              <td>{introducer.name}</td>
              <td>{introducer.location}</td>
              <td>{introducer.contactNumber}</td>
              <td>{introducer.email}</td>
              <td>{introducer.referredLeads}</td>
              <td className="text-center align-middle">
                <div className="d-flex justify-content-center gap-2 align-items-center">
                  <Button
                    color="success"
                    size="sm"
                    onClick={() => handleEdit(introducer)}
                  >
                    <i className="icon-pencil-alt"></i>
                  </Button>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => handleDeleteClick(introducer.name)}
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
          {currentIntroducer?.name ? "Edit Introducer" : "Add Introducer"}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={currentIntroducer?.name || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input
                type="text"
                name="location"
                id="location"
                value={currentIntroducer?.location || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="contactNumber">Contact Number</Label>
              <Input
                type="text"
                name="contactNumber"
                id="contactNumber"
                value={currentIntroducer?.contactNumber || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={currentIntroducer?.email || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="referredLeads">Referred Leads</Label>
              <Input
                type="number"
                name="referredLeads"
                id="referredLeads"
                value={currentIntroducer?.referredLeads || ""}
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
          Are you sure you want to delete <strong>{introducerToDelete}</strong>?
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

export default IntroducerListBody;
