import apiClient from "@/services/api-client";
import { IntroducerInfoProps } from "@/Types/Organization/IntroducerTypes";
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
import "./IntroducerList.css";
import AddIntroducerModal from "./Modals/AddIntroducerModal";
import DeleteIntroducerModal from "./Modals/DeleteIntroducerModal";
import UpdateIntroducerModal from "./Modals/UpdateIntroducerModal";
import { toast } from "react-toastify";

const IntroducerListBody: React.FC = () => {
  const [introducers, setIntroducers] = useState<IntroducerInfoProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [introducersPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedIntroducer, setSelectedIntroducer] = useState<
    Partial<IntroducerInfoProps>
  >({
    user: {
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
  const [introducerToDelete, setIntroducerToDelete] =
    useState<IntroducerInfoProps | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);

  const openDeleteModal = (introducer: IntroducerInfoProps) => {
    setIntroducerToDelete(introducer);
    toggleDeleteModal();
  };

  const fetchIntroducers = async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.get("/director/introducers/");
      const IntroducersData = Array.isArray(response.data)
        ? response.data
        : response.data.introducers;
      setIntroducers(IntroducersData || []);
    } catch (error) {
      console.error("Error fetching Introducers:", error);
      setIntroducers([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIntroducers();
  }, []);

  //delete introduce
  const deleteIntoducer = async (alias: string) => {
    if (!alias) return;
    try {
      setIsDeleting(true);
      await apiClient.delete(`/director/introducers/${alias}/`);
      fetchIntroducers();
      toast.success("Introducer deleted successfully.");
    } catch (error) {
      console.error("Error deleting introducer:", error);
      toast.error("Failed to delete the introducer. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  // openaddmodals
  const openAddModal = () => {
    toggleModal();
  };

  const openUpdateModal = (introducer: IntroducerInfoProps) => {
    setSelectedIntroducer(introducer);
    toggleUpdateModal();
  };
  // openaddmodals end

  const filteredIntroducers = introducers.filter((introducer) => {
    const fullName = `${introducer?.user?.first_name || ""} ${
      introducer?.user?.last_name || ""
    }`.toLowerCase();

    return (
      fullName.includes(searchQuery.toLowerCase()) ||
      introducer?.official_email
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  });

  const indexOfLastIntroducer = currentPage * introducersPerPage;
  const indexOfFirstIntroducer = indexOfLastIntroducer - introducersPerPage;
  const currentIntroducers = filteredIntroducers.slice(
    indexOfFirstIntroducer,
    indexOfLastIntroducer
  );

  const totalPages = Math.ceil(filteredIntroducers.length / introducersPerPage);

  return (
    <div className="container mt-1">
      <Row className="flex justify-content-between py-4">
        <Col md="3">
          <h2>Introducer List</h2>
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
            Add Introducer
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
            ) : currentIntroducers.length > 0 ? (
              currentIntroducers.map((introducer) => (
                <tr key={introducer.alias}>
                  <td>
                    {introducer?.user?.first_name} {introducer?.user?.last_name}
                  </td>
                  <td>{introducer?.official_email}</td>
                  <td>{introducer?.official_phone}</td>
                  <td>{introducer?.role}</td>
                  <td>
                    {introducer?.created_by?.first_name}{" "}
                    {introducer?.created_by?.last_name}
                  </td>
                  <td>{new Date(introducer?.created_at).toLocaleString()}</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                      <Button
                        color="success"
                        size="sm"
                        title="Update User"
                        onClick={() => openUpdateModal(introducer)}
                      >
                        <i className="icon-pencil-alt"></i>
                      </Button>
                      <Button
                        color="danger"
                        size="sm"
                        title="Delete User"
                        onClick={() => openDeleteModal(introducer)}
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
                  No introducers available.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Row>
      <Row>
        {" "}
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
      <AddIntroducerModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        onSave={() => fetchIntroducers()}
      />
      <UpdateIntroducerModal
        isOpen={isUpdateModalOpen}
        toggle={toggleUpdateModal}
        fetchIntroducers={fetchIntroducers}
        onSave={() => {
          toggleUpdateModal(); // Close the modal
        }}
        selectedIntroducer={selectedIntroducer}
      />
      <DeleteIntroducerModal
        isOpen={isDeleteModalOpen}
        toggle={toggleDeleteModal}
        onDelete={() => {
          if (introducerToDelete) deleteIntoducer(introducerToDelete.alias);
          toggleDeleteModal();
        }}
        isDeleting={isDeleting}
        introducerName={`${introducerToDelete?.user?.first_name} ${introducerToDelete?.user?.last_name}`}
      />
      {/* modals end */}
    </div>
  );
};

export default IntroducerListBody;
