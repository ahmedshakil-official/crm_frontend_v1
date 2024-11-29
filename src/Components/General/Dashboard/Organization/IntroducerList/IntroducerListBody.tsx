import apiClient from "@/services/api-client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from "reactstrap";
import "./IntroducerList.css";
import AddIntroducerModal from "./Modals/AddIntroducerModal";

export interface Introducer {
  alias: string;
  user: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
  };
  role: string;
  designation: string;
  official_email: string;
  official_phone: string;
  permanent_address: string;
  present_address: string;
  dob: string;
  gender: string;
  joining_date: string;
  registration_number: string;
  degree: string;
  created_by: {
    first_name: string;
    last_name: string;
  };
  created_at: string;
}

const IntroducerListBody: React.FC = () => {
  const [introducers, setIntroducers] = useState<Introducer[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [introducersPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIntroducer, setSelectedIntroducer] = useState<
    Partial<Introducer>
  >({
    user: { first_name: "", last_name: "", email: "", phone: "", password: "" },
    role: "",
    designation: "",
    official_email: "",
    official_phone: "",
    permanent_address: "",
    present_address: "",
    dob: "",
    gender: "",
    joining_date: "",
    registration_number: "",
    degree: "",
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const fetchIntroducers = async () => {
    try {
      const response = await apiClient.get("/director/introducers/");
      const IntroducersData = Array.isArray(response.data)
        ? response.data
        : response.data.introducers;
      setIntroducers(IntroducersData || []);
    } catch (error) {
      console.error("Error fetching Introducers:", error);
      setIntroducers([]);
    }
  };

  useEffect(() => {
    fetchIntroducers();
  }, []);

  const handleSaveIntroducer = async () => {
    try {
      if (selectedIntroducer.alias) {
        await apiClient.patch(
          `/director/introducers/${selectedIntroducer.alias}/`,
          selectedIntroducer
        );
      } else {
        await apiClient.post("/director/introducers/", selectedIntroducer);
      }
      fetchIntroducers();
      toggleModal();
    } catch (error) {
      console.error("Error saving Introducer:", error);
    }
  };

  const openAddModal = () => {
    setSelectedIntroducer({
      user: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
      },
      role: "",
      designation: "",
      official_email: "",
      official_phone: "",
      permanent_address: "",
      present_address: "",
      dob: "",
      gender: "",
      joining_date: "",
      registration_number: "",
      degree: "",
    });
    toggleModal();
  };

  const openEditModal = (introducer: Introducer) => {
    setSelectedIntroducer(introducer);
    toggleModal();
  };

  const filteredIntroducers = introducers.filter(
    (introducer) =>
      introducer.user.first_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      introducer.official_email
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  const indexOfLastIntroducer = currentPage * introducersPerPage;
  const indexOfFirstIntroducer = indexOfLastIntroducer - introducersPerPage;
  const currentIntroducers = filteredIntroducers.slice(
    indexOfFirstIntroducer,
    indexOfLastIntroducer
  );

  const totalPages = Math.ceil(filteredIntroducers.length / introducersPerPage);

  return (
    <div className="container p-3">
      <div className="d-flex justify-content-between pt-0 pb-2">
        <h3>Introducer List</h3>
        <Button color="primary" className="mt-0" onClick={openAddModal}>
          Add Introducer
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
            <th>Role</th>
            <th>Created By</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentIntroducers.map((introducer) => (
            <tr key={introducer.alias}>
              <td>
                {introducer.user.first_name} {introducer.user.last_name}
              </td>
              <td>{introducer.official_email}</td>
              <td>{introducer.official_phone}</td>
              <td>{introducer.role}</td>
              {/* <td className="hide">{introducer.gender}</td> */}
              <td>
                {introducer.created_by.first_name}{" "}
                {introducer.created_by.last_name}
              </td>
              <td>{new Date(introducer.created_at).toLocaleString()}</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2 align-items-center">
                  <Button
                    color="success"
                    size="sm"
                    onClick={() => openEditModal(introducer)}
                  >
                    <i className="icon-pencil-alt"></i>
                  </Button>
                  <Button color="danger" size="sm">
                    <i className="icon-trash"></i>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className="d-flex justify-content-end p-2">
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink first onClick={() => setCurrentPage(1)} />
        </PaginationItem>
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink
            previous
            onClick={() => setCurrentPage(currentPage - 1)}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <PaginationItem
              key={pageNumber}
              active={pageNumber === currentPage}
            >
              <PaginationLink onClick={() => setCurrentPage(pageNumber)}>
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink
            next
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </PaginationItem>
        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink last onClick={() => setCurrentPage(totalPages)} />
        </PaginationItem>
      </Pagination>
      <AddIntroducerModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        onSave={()=>fetchIntroducers()}
      />
    </div>
  );
};

export default IntroducerListBody;
