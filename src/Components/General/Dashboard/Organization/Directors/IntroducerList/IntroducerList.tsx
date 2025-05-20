import { useGetIntroducerDetailsQuery } from "@/Redux/Reducers/Organization/Directors/IntroducerDetailsApi";
import { IntroducerInfoProps } from "@/Types/Organization/Directors/IntroducerTypes";
import LoadingSpinner from "@/app/loading";
import { formatDateToDMYAndTime } from "@/utils/dateAndTimeFormatter";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  Button,
  Card,
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
import AddIntroducerModal from "./Modals/AddIntroducerModal";
import DeleteIntroducerModal from "./Modals/DeleteIntroducerModal";
import UpdateIntroducerModal from "./Modals/UpdateIntroducerModal";

const IntroducerList = () => {
  const [introducers, setIntroducers] = useState<IntroducerInfoProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [introducersPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [introducerToDelete, setIntroducerToDelete] =
    useState<IntroducerInfoProps | null>(null);
  const { data: introduceData, isLoading } =
    useGetIntroducerDetailsQuery(undefined);
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

  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);

  const openDeleteModal = (introducer: IntroducerInfoProps) => {
    setIntroducerToDelete(introducer);
    toggleDeleteModal();
  };

  useEffect(() => {
    if (introduceData) {
      const introducerData = Array.isArray(introduceData)
        ? introduceData
        : [introduceData];
      setIntroducers(introducerData);
    }
  }, [introduceData]);

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

  if (isLoading) {
    <div className="p-4">
      <LoadingSpinner />
    </div>;
  }

  return (
    <Card className="container mt-1">
      <Row className="flex justify-content-between py-4">
        <Col md="3">
          <h2>Introducer List</h2>
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
            <span>Add Introducer</span>
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
            ) : currentIntroducers.length > 0 ? (
              currentIntroducers.map((introducer) => (
                <tr key={introducer.alias} className="text-center">
                  <td>
                    {introducer?.user?.first_name} {introducer?.user?.last_name}
                  </td>
                  <td>
                    {introducer?.official_email ? (
                      <a
                        href={`mailto:${introducer.official_email}`}
                        className="text-black text_decoration_hover"
                      >
                        {introducer.official_email}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>
                    {introducer?.official_phone ? (
                      <a
                        href={`tel:${introducer?.official_phone}`}
                        className="text-black text_decoration_hover"
                      >
                        {introducer?.official_phone}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>
                    {introducer?.role?.charAt(0)?.toUpperCase() +
                      introducer?.role?.slice(1)?.toLowerCase()}
                  </td>
                  <td>
                    {introducer?.created_by?.first_name}{" "}
                    {introducer?.created_by?.last_name}
                  </td>
                  <td>{formatDateToDMYAndTime(introducer?.created_at)}</td>
                  <td>
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
        <div className="d-flex justify-content-between align-items-center p-3">
          <div className="px-2">
            <p className="text-success">
              Showing 1 to {Math.min(5, currentIntroducers?.length || 0)} of{" "}
              {introduceData?.length || 0} Introducers
            </p>
          </div>
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
                      <PaginationLink
                        onClick={() => setCurrentPage(pageNumber)}
                      >
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
        </div>
      </Row>

      {/* modals */}
      <AddIntroducerModal isOpen={isModalOpen} toggle={toggleModal} />
      <UpdateIntroducerModal
        isOpen={isUpdateModalOpen}
        toggle={toggleUpdateModal}
        onSave={() => {
          toggleUpdateModal(); // Close the modal
        }}
        selectedIntroducer={selectedIntroducer}
      />
      <DeleteIntroducerModal
        isOpen={isDeleteModalOpen}
        toggle={toggleDeleteModal}
        introducerAlias={introducerToDelete?.alias}
        introducerName={`${introducerToDelete?.user?.first_name} ${introducerToDelete?.user?.last_name}`}
      />
      {/* modals end */}
    </Card>
  );
};

export default IntroducerList;
