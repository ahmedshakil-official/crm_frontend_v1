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
import UpdateAdvisorModal from "./Modals/UpdateAdvisorModal";

export interface Advisor {
  alias: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    profile_image: string;
    nid: string;
    user_type: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
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
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedAdvisor, setSelectedAdvisor] = useState<Partial<Advisor>>({
    user: {
      id:0,
      first_name: "",
      last_name: "",
      profile_image: "",
      nid: "",
      user_type: "",
      city: "",
      state: "",
      country: "",
      zip_code: "",
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

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleUpdateModal = () => setIsUpdateModalOpen(!isUpdateModalOpen);

  const fetchAdvisors = async () => {
    try {
      const response = await apiClient.get("/director/advisors/");
      const AdvisorsData = Array.isArray(response.data)
        ? response.data
        : response.data.advisors;
      setAdvisors(AdvisorsData || []);
    } catch (error) {
      console.error("Error fetching Advisors:", error);
      setAdvisors([]);
    }
  };

  useEffect(() => {
    fetchAdvisors();
  }, []);

  // openmodals
  const openAddModal = () => {
    toggleModal();
  };

  const openUpdateModal = (advisor: Advisor) => {
    setSelectedAdvisor(advisor);
    toggleUpdateModal();
  };
  // openmodals end

  const filteredAdvisors = advisors.filter(
    (advisor) =>
      advisor.user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      advisor.official_email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastAdvisor = currentPage * advisorsPerPage;
  const indexOfFirstAdvisor = indexOfLastAdvisor - advisorsPerPage;
  const currentAdvisors = filteredAdvisors.slice(indexOfFirstAdvisor, indexOfLastAdvisor);

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
                {advisor?.user?.first_name} {advisor.user.last_name}
              </td>
              <td>{advisor?.official_email}</td>
              <td>{advisor?.official_phone}</td>
              <td>{advisor?.role}</td>
              {/* <td className="hide">{advisor.gender}</td> */}
              <td>
                {advisor?.created_by?.first_name} {advisor?.created_by?.last_name}
              </td>
              <td>{new Date(advisor?.created_at).toLocaleString()}</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2 align-items-center">
                  <Button
                    color="success"
                    size="sm"
                    title="Update User"
                    onClick={() => openUpdateModal(advisor)}
                  >
                    <i className="icon-pencil-alt"></i>
                  </Button>
                  <Button color="danger" size="sm" title="Delete User">
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
      {/* modals */}
      <AddAdvisorModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        onSave={() => fetchAdvisors()}
      />
      <UpdateAdvisorModal
        isOpen={isUpdateModalOpen}
        toggle={toggleUpdateModal}
        onSave={() => {
          fetchAdvisors(); // Refresh the list after saving
          toggleUpdateModal(); // Close the modal
        }}
        selectedAdvisor={selectedAdvisor}
      />
      {/* modals end */}
    </div>
  );
};

export default AdvisorListBody;
