import { useGetAdvisorDetailsQuery } from "@/Redux/Reducers/Organization/Directors/AdvisorDetailsApi";
import { AdvisorInfoProps } from "@/Types/Organization/Directors/AdvisorTypes";
import LoadingSpinner from "@/app/loading";
import { formatDateToDMYAndTime } from "@/utils/dateAndTimeFormatter";
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
import AddAdvisorModal from "./Modals/AddAdvisorModal";
import DeleteAdvisorModal from "./Modals/DeleteAdvisorModal";
import UpdateAdvisorModal from "./Modals/UpdateAdvisorModal";

const AdvisorListBody: React.FC = () => {
  const [advisors, setAdvisors] = useState<AdvisorInfoProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [advisorsPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [advisorToDelete, setAdvisorToDelete] =
    useState<AdvisorInfoProps | null>(null);

  const { data: advisorData, isLoading } = useGetAdvisorDetailsQuery(undefined);

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

  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);

  const openDeleteModal = (advisor: AdvisorInfoProps) => {
    setAdvisorToDelete(advisor);
    toggleDeleteModal();
  };

  useEffect(() => {
    if (advisorData) {
      const advisorsArray: AdvisorInfoProps[] = Array.isArray(advisorData)
        ? advisorData
        : advisorData.advisors;
      setAdvisors(advisorsArray || []);
    }
  }, [advisorData]);

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

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container mt-1">
      <Row className="flex justify-content-between py-4">
        <Col md="3">
          <h2>Advisor List</h2>
        </Col>
        <Col md={6}>
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
        <Col md="3" xs="12" className="d-flex justify-content-end mt-sm-0 mt-2">
          <Button
            color="primary"
            onClick={openAddModal}
            className="d-flex justify-content-center align-items-center gap-1"
          >
            <span>Add Advisor</span>
            <span>
              <i className="fa-solid fa-circle-plus"></i>
            </span>
          </Button>
        </Col>
      </Row>
      <Row>
        <Table hover responsive>
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
                <tr key={advisor.alias} className="text-center">
                  <td>
                    {advisor?.user?.first_name} {advisor?.user?.last_name}
                  </td>
                  <td>
                    {advisor?.official_email ? (
                      <a
                        href={`mailto:${advisor.official_email}`}
                        className="text-black text_decoration_hover"
                      >
                        {advisor.official_email}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>
                    {advisor?.official_phone ? (
                      <a
                        href={`tel:${advisor?.official_phone}`}
                        className="text-black text_decoration_hover"
                      >
                        {advisor?.official_phone}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>
                    {advisor?.role?.charAt(0)?.toUpperCase() +
                      advisor?.role?.slice(1)?.toLowerCase()}
                  </td>
                  <td>
                    {advisor?.created_by?.first_name}{" "}
                    {advisor?.created_by?.last_name}
                  </td>
                  <td>{formatDateToDMYAndTime(advisor?.created_at)}</td>
                  <td>
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
      <AddAdvisorModal isOpen={isModalOpen} toggle={toggleModal} />
      <UpdateAdvisorModal
        isOpen={isUpdateModalOpen}
        toggle={toggleUpdateModal}
        onSave={() => {
          toggleUpdateModal();
        }}
        selectedAdvisor={selectedAdvisor}
      />
      <DeleteAdvisorModal
        isOpen={isDeleteModalOpen}
        toggle={toggleDeleteModal}
        advisorAlias={advisorToDelete?.alias || ""}
        advisorName={`${advisorToDelete?.user?.first_name} ${advisorToDelete?.user?.last_name}`}
      />
      {/* modals end */}
    </div>
  );
};

export default AdvisorListBody;
