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
import "./AdvisorList.css";
import AddAdvisorModal from "./Modals/AddAdvisorModal";

export interface Advisor {
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

const AdvisorListBody: React.FC = () => {
  const [advisors, setAdvisors] = useState<Advisor[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [advisorsPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdvisor, setSelectedAdvisor] = useState<Partial<Advisor>>({
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

  const fetchAdvisors = async () => {
    try {
      const response = await apiClient.get("/director/advisors/");
      const advisorsData = Array.isArray(response.data)
        ? response.data
        : response.data.advisors;
      setAdvisors(advisorsData || []);
    } catch (error) {
      console.error("Error fetching advisors:", error);
      setAdvisors([]);
    }
  };

  useEffect(() => {
    fetchAdvisors();
  }, []);

  const handleSaveAdvisor = async () => {
    try {
      if (selectedAdvisor.alias) {
        await apiClient.put(
          `/director/advisors/${selectedAdvisor.alias}/`,
          selectedAdvisor
        );
      } else {
        await apiClient.post("/director/advisors/", selectedAdvisor);
      }
      fetchAdvisors();
      toggleModal();
    } catch (error) {
      console.error("Error saving advisor:", error);
    }
  };

  const openAddModal = () => {
    setSelectedAdvisor({
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

  const openEditModal = (advisor: Advisor) => {
    setSelectedAdvisor(advisor);
    toggleModal();
  };

  const filteredAdvisors = advisors.filter(
    (advisor) =>
      advisor.user.first_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      advisor.official_email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastAdvisor = currentPage * advisorsPerPage;
  const indexOfFirstAdvisor = indexOfLastAdvisor - advisorsPerPage;
  const currentAdvisors = filteredAdvisors.slice(
    indexOfFirstAdvisor,
    indexOfLastAdvisor
  );

  const totalPages = Math.ceil(filteredAdvisors.length / advisorsPerPage);

  return (
    <div className="container p-3">
      <div className="d-flex justify-content-between pt-0 pb-2">
        <h3>Advisor List</h3>
        <Button color="primary" className="mt-0" onClick={openAddModal}>
          Add Advisor
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
          {currentAdvisors.map((advisor) => (
            <tr key={advisor.alias}>
              <td>
                {advisor.user.first_name} {advisor.user.last_name}
              </td>
              <td>{advisor.official_email}</td>
              <td>{advisor.official_phone}</td>
              <td>{advisor.role}</td>
              {/* <td className="hide">{advisor.gender}</td> */}
              <td>
                {advisor.created_by.first_name} {advisor.created_by.last_name}
              </td>
              <td>{new Date(advisor.created_at).toLocaleString()}</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2 align-items-center">
                  <Button
                    color="success"
                    size="sm"
                    onClick={() => openEditModal(advisor)}
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
      <AddAdvisorModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        onSave={handleSaveAdvisor}
      />
    </div>
  );
};

export default AdvisorListBody;
