import { useGetAdviserDetailsQuery } from "@/Redux/Reducers/CommonComponents/Directors/AdviserDetailsApi";
import {
  AdviserInfoProps,
  AdvisersProps,
} from "@/Types/CommonComponents/Directors/AdviserTypes";
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
import AddAdviserModal from "./Modals/AddAdviserModal";
import DeleteAdviserModal from "./Modals/DeleteAdviserModal";
import UpdateAdviserModal from "./Modals/UpdateAdviserModal";

const Advisers: React.FC<AdvisersProps> = ({ advisersPerPage = 20 }) => {
  const [advisers, setAdvisers] = useState<AdviserInfoProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [adviserToDelete, setAdviserToDelete] =
    useState<AdviserInfoProps | null>(null);

  const { data: adviserData, isLoading } = useGetAdviserDetailsQuery(undefined);

  const [selectedAdviser, setSelectedAdviser] = useState<
    Partial<AdviserInfoProps>
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

  const openDeleteModal = (Adviser: AdviserInfoProps) => {
    setAdviserToDelete(Adviser);
    toggleDeleteModal();
  };

  useEffect(() => {
    if (adviserData) {
      const advisersArray: AdviserInfoProps[] = Array.isArray(adviserData)
        ? adviserData
        : adviserData.advisers;
      setAdvisers(advisersArray || []);
    }
  }, [adviserData]);

  // openmodals
  const openAddModal = () => {
    toggleModal();
  };

  const openUpdateModal = (Adviser: AdviserInfoProps) => {
    setSelectedAdviser(Adviser);
    toggleUpdateModal();
  };
  // openmodals end

  const filteredAdvisers = advisers.filter((Adviser) => {
    const fullName = `${Adviser?.user?.first_name || ""} ${
      Adviser?.user?.last_name || ""
    }`.toLowerCase();

    return (
      fullName.includes(searchQuery.toLowerCase()) ||
      Adviser?.official_email?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const indexOfLastAdviser = currentPage * advisersPerPage;
  const indexOfFirstAdviser = indexOfLastAdviser - advisersPerPage;
  const currentAdvisers = filteredAdvisers.slice(
    indexOfFirstAdviser,
    indexOfLastAdviser
  );

  const totalPages = Math.ceil(filteredAdvisers.length / advisersPerPage);

  if (isLoading) {
    return (
      <div className="p-4">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Card className="container mt-1">
      <Row className="flex justify-content-between py-4">
        <Col md="3">
          <h2>Advisers</h2>
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
            <span>Add Adviser</span>
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
            ) : currentAdvisers.length > 0 ? (
              currentAdvisers.map((Adviser) => (
                <tr key={Adviser.alias} className="text-center">
                  <td>
                    {Adviser?.user?.first_name} {Adviser?.user?.last_name}
                  </td>
                  <td>
                    {Adviser?.official_email ? (
                      <a
                        href={`mailto:${Adviser.official_email}`}
                        className="text-black text_decoration_hover"
                      >
                        {Adviser.official_email}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>
                    {Adviser?.official_phone ? (
                      <a
                        href={`tel:${Adviser?.official_phone}`}
                        className="text-black text_decoration_hover"
                      >
                        {Adviser?.official_phone}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>
                    {Adviser?.role?.charAt(0)?.toUpperCase() +
                      Adviser?.role?.slice(1)?.toLowerCase()}
                  </td>
                  <td>
                    {Adviser?.created_by?.first_name}{" "}
                    {Adviser?.created_by?.last_name}
                  </td>
                  <td>{formatDateToDMYAndTime(Adviser?.created_at)}</td>
                  <td>
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                      <Button
                        color="success"
                        size="sm"
                        title="Update User"
                        onClick={() => openUpdateModal(Adviser)}
                      >
                        <i className="icon-pencil-alt"></i>
                      </Button>
                      <Button
                        color="danger"
                        size="sm"
                        title="Delete User"
                        onClick={() => openDeleteModal(Adviser)}
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
                  No advisers available.
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
              Showing {indexOfFirstAdviser + 1} to{" "}
              {Math.min(indexOfLastAdviser, filteredAdvisers.length)} of{" "}
              {filteredAdvisers.length} Advisers
            </p>
          </div>
          <Pagination>
            <PaginationItem disabled={currentPage === 1}>
              <PaginationLink first onClick={() => setCurrentPage(1)} />
            </PaginationItem>
            <PaginationItem disabled={currentPage === 1}>
              <PaginationLink
                previous
                onClick={() => setCurrentPage(currentPage - 1)}
              />
            </PaginationItem>

            {totalPages <= advisersPerPage ? (
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
      <AddAdviserModal isOpen={isModalOpen} toggle={toggleModal} />
      <UpdateAdviserModal
        isOpen={isUpdateModalOpen}
        toggle={toggleUpdateModal}
        onSave={() => {
          toggleUpdateModal();
        }}
        selectedAdviser={selectedAdviser}
      />
      <DeleteAdviserModal
        isOpen={isDeleteModalOpen}
        toggle={toggleDeleteModal}
        adviserAlias={adviserToDelete?.alias || ""}
        adviserName={`${adviserToDelete?.user?.first_name} ${adviserToDelete?.user?.last_name}`}
      />
      {/* modals end */}
    </Card>
  );
};

export default Advisers;
