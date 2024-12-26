import apiClient from "@/services/api-client";
import { AdvisorInfoProps } from "@/Types/Organization/AdvisorTypes";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Spinner,
  Table,
} from "reactstrap";
import "./AdvisorList.css";
import AddAdvisorModal from "./Modals/AddAdvisorModal";
import DeleteAdvisorModal from "./Modals/DeleteAdvisorModal";
import UpdateAdvisorModal from "./Modals/UpdateAdvisorModal";
import { toast } from "react-toastify";

const AdvisorListBody: React.FC = () => {
  const [advisors, setAdvisors] = useState<AdvisorInfoProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [advisorsPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedAdvisor, setSelectedAdvisor] = useState<
    Partial<AdvisorInfoProps>
  >({
    user: {
      id: 0,
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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [advisorToDelete, setAdvisorToDelete] =
    useState<AdvisorInfoProps | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);

  const openDeleteModal = (advisor: AdvisorInfoProps) => {
    setAdvisorToDelete(advisor);
    toggleDeleteModal();
  };

  const fetchAdvisors = async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.get("/director/advisors/");
      const AdvisorsData = Array.isArray(response.data)
        ? response.data
        : response.data.advisors;
      setAdvisors(AdvisorsData || []);
    } catch (error) {
      console.error("Error fetching Advisors:", error);
      setAdvisors([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvisors();
  }, []);

  //delete advisor
  const deleteAdvisor = async (alias: string) => {
    if (!alias) return;
    try {
      setIsDeleting(true);
      await apiClient.delete(`/director/advisors/${alias}/`);
      fetchAdvisors();
      toast.success("Advisor deleted successfully.");
    } catch (error) {
      console.error("Error deleting advisor", error);
      toast.error("Failed to delete the advisor. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  // openmodals
  const openAddModal = () => {
    toggleModal();
  };

  const openUpdateModal = (advisor: AdvisorInfoProps) => {
    setSelectedAdvisor(advisor);
    toggleUpdateModal();
  };
  // openmodals end

  const filteredAdvisors = advisors.filter((advisor) => {
    const fullName = `${advisor?.user?.first_name || ""} ${
      advisor?.user?.last_name || ""
    }`.toLowerCase();

    return (
      fullName.includes(searchQuery.toLowerCase()) ||
      advisor?.official_email?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const indexOfLastAdvisor = currentPage * advisorsPerPage;
  const indexOfFirstAdvisor = indexOfLastAdvisor - advisorsPerPage;
  const currentAdvisors = filteredAdvisors.slice(
    indexOfFirstAdvisor,
    indexOfLastAdvisor
  );

  const totalPages = Math.ceil(filteredAdvisors.length / advisorsPerPage);

  return (
    <div className="container mt-1">
      <Row className="flex justify-content-between py-4">
        <Col md="3">
          <h2>Advisor List</h2>
        </Col>
        <Col>
          <InputGroup>
            <Input
              type="text"
              placeholder="Search by name or email... "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <InputGroupText className="bg-success rounded-start-0 border-start-0">
              <FaSearch />
            </InputGroupText>
          </InputGroup>
        </Col>
        <Col md="3" xs="12" className="text-md-end text-center mt-2 mt-md-0">
          <Button color="primary" onClick={openAddModal}>
            Add Advisor
          </Button>
        </Col>
      </Row>
      <Row>
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
            {isLoading ? (
              <tr>
                <td colSpan={7} className="text-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <Spinner color="primary" />
                  </div>
                </td>
              </tr>
            ) : currentAdvisors.length > 0 ? (
              currentAdvisors.map((advisor) => (
                <tr key={advisor.alias}>
                  <td>
                    {advisor?.user?.first_name} {advisor?.user?.last_name}
                  </td>
                  <td>{advisor?.official_email}</td>
                  <td>{advisor?.official_phone}</td>
                  <td>{advisor?.role}</td>
                  <td>
                    {advisor?.created_by?.first_name}{" "}
                    {advisor?.created_by?.last_name}
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
                      <Button
                        color="danger"
                        size="sm"
                        title="Delete User"
                        onClick={() => openDeleteModal(advisor)}
                      >
                        <i className="icon-trash"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center">
                  No advisors available.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Row>
      <Row>
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

          {totalPages <= 5 ? (
            Array.from({ length: totalPages }, (_, i) => i + 1).map(
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
            )
          ) : (
            <>
              <PaginationItem active={currentPage === 1}>
                <PaginationLink onClick={() => setCurrentPage(1)}>
                  1
                </PaginationLink>
              </PaginationItem>

              {currentPage > 3 && (
                <PaginationItem disabled>
                  <PaginationLink>...</PaginationLink>
                </PaginationItem>
              )}

              {Array.from({ length: 3 }, (_, i) => currentPage - 1 + i)
                .filter(
                  (pageNumber) => pageNumber > 1 && pageNumber < totalPages
                )
                .map((pageNumber) => (
                  <PaginationItem
                    key={pageNumber}
                    active={pageNumber === currentPage}
                  >
                    <PaginationLink onClick={() => setCurrentPage(pageNumber)}>
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                ))}

              {currentPage < totalPages - 2 && (
                <PaginationItem disabled>
                  <PaginationLink>...</PaginationLink>
                </PaginationItem>
              )}

              <PaginationItem active={currentPage === totalPages}>
                <PaginationLink onClick={() => setCurrentPage(totalPages)}>
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
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
      </Row>

      {/* modals */}
      <AddAdvisorModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        onSave={() => fetchAdvisors()}
      />
      <UpdateAdvisorModal
        isOpen={isUpdateModalOpen}
        toggle={toggleUpdateModal}
        fetchAdvisors={fetchAdvisors}
        onSave={() => {
          toggleUpdateModal(); // Close the modal
        }}
        selectedAdvisor={selectedAdvisor}
      />
      <DeleteAdvisorModal
        isOpen={isDeleteModalOpen}
        toggle={toggleDeleteModal}
        onDelete={() => {
          if (advisorToDelete) deleteAdvisor(advisorToDelete.alias);
          toggleDeleteModal();
        }}
        isDeleting={isDeleting}
        advisorName={`${advisorToDelete?.user?.first_name} ${advisorToDelete?.user?.last_name}`}
      />
      {/* modals end */}
    </div>
  );
};

export default AdvisorListBody;
