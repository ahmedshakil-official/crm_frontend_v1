import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
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

import {
  useDeleteCaseDetailsMutation,
  useGetCaseDetailsQuery,
} from "@/Redux/Reducers/CaseDetails/CaseDetailsApi";
import { useGetAdvisorDetailsQuery } from "@/Redux/Reducers/Directors/AdvisorDetailsApi";
import { AdvisorInfoProps } from "@/Types/Organization/AdvisorTypes";
import { CaseInfo } from "@/Types/Organization/CaseTypes";
import formatDateToDMY from "@/utils/dateFormatter";
import "../../CaseStatus.css";
import AddNewCaseModal from "../../Modals/AddNewCaseModal";
import DeleteCaseModal from "../../Modals/DeleteCaseModal";
import UpdateCaseModal from "../../Modals/UpdateCaseModal";

const CaseTable: React.FC = () => {
  const [isAddNewCaseModalOpen, setIsAddNewCaseModalOpen] = useState(false);
  const [isUpdateCaseModalOpen, setIsUpdateCaseModalOpen] = useState(false);
  const [currentCase, setCurrentCase] = useState<CaseInfo | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [casesPerPage] = useState(10);
  const [filterIcon, setFilterIcon] = useState(false);
  const [isDeleteCaseModalOpen, setIsDeleteCaseModalOpen] = useState(false);

  // RTK Query Hooks
  const { data: advisorData, isLoading: isAdvisorLoading } =
    useGetAdvisorDetailsQuery(undefined);
  const {
    data: caseData,
    isLoading: isCaseLoading,
    refetch: refetchCases,
  } = useGetCaseDetailsQuery(undefined);
  const [deleteCase] = useDeleteCaseDetailsMutation();

  const isLoading = isAdvisorLoading || isCaseLoading;

  // Filter State
  const defaultFilters = {
    created_by: "",
    case_category: "",
    applicant_type: "",
    case_status: "",
    case_stage: "",
    is_removed: "",
  };
  const [filters, setFilters] = useState(defaultFilters);

  // Helper Functions
  const toggleFilterIcon = () => setFilterIcon(!filterIcon);
  const toggleAddNewCaseModal = () =>
    setIsAddNewCaseModalOpen(!isAddNewCaseModalOpen);
  const toggleUpdateCaseModal = () =>
    setIsUpdateCaseModalOpen(!isUpdateCaseModalOpen);
  const toggleDeleteCaseModal = () =>
    setIsDeleteCaseModalOpen(!isDeleteCaseModalOpen);

  const openAddNewCaseModal = () => toggleAddNewCaseModal();
  const openUpdateCaseModal = (caseItem: CaseInfo) => {
    setCurrentCase(caseItem);
    toggleUpdateCaseModal();
  };
  const openDeleteCaseModal = (caseItem: CaseInfo) => {
    setCurrentCase(caseItem);
    toggleDeleteCaseModal();
  };

  const handleFilterChange = (filterKey: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: value,
    }));
  };

  // Handle Case Deletion
  const handleCaseDeletion = async (caseAlias: string) => {
    try {
      await deleteCase({ caseAlias }).unwrap();
      toast.success("Case deleted successfully.");
      refetchCases(); // Refetch cases after deletion
      toggleDeleteCaseModal();
    } catch (error) {
      console.error("Error deleting case:", error);
      toast.error("Failed to delete case. Please try again.");
    }
  };

  // Filter and Pagination Logic
  const filteredCases = (caseData || []).filter((caseItem: CaseInfo) => {
    const matchesSearch = caseItem.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilters = Object.entries(filters).every(([key, value]) => {
      if (!value) return true; // Skip empty filters
      return caseItem[key as keyof CaseInfo] === value;
    });
    return matchesSearch && matchesFilters;
  });

  const paginatedCases = filteredCases.slice(
    (currentPage - 1) * casesPerPage,
    currentPage * casesPerPage
  );
  const pageCount = Math.ceil(filteredCases.length / casesPerPage);

  return (
    <Card>
      <CardHeader>
        <Row className="flex justify-content-between">
          <Col md="3">
            <h3>All Cases</h3>
          </Col>
          <Col>
            <InputGroup>
              <Input
                type="text"
                placeholder="Search Case..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <InputGroupText className="bg-success rounded-start-0 border-start-0">
                <FaSearch />
              </InputGroupText>
            </InputGroup>
          </Col>
          <Col md="3" xs="12" className="text-md-end text-center mt-2 mt-md-0">
            <Button onClick={toggleFilterIcon} className="me-2">
              {filterIcon ? (
                <i className="fa-solid fa-filter-circle-xmark"></i>
              ) : (
                <i className="fa-solid fa-filter"></i>
              )}
            </Button>
            <Button color="primary" onClick={openAddNewCaseModal}>
              Add New Case
            </Button>
          </Col>
        </Row>
      </CardHeader>

      <CardBody className="p-0 m-0">
        {/* Filter Options */}
        {filterIcon && (
          <Card className="shadow-lg rounded-1 p-3">
            <Row className="justify-content-center text-center g-3">
              {/* Employee Filter */}
              <Col xs="12" sm="6" md="3">
                <Input
                  type="select"
                  id="employeeFilter"
                  className="py-1"
                  onChange={(e) =>
                    handleFilterChange("created_by", e.target.value)
                  }
                >
                  <option value="">Select Employee...</option>
                  {advisorData?.map((advisor: AdvisorInfoProps) => (
                    <option key={advisor.alias} value={advisor.user.id}>
                      {advisor.user.first_name} {advisor.user.last_name}
                    </option>
                  ))}
                </Input>
              </Col>

              {/* Case Category Filter */}
              <Col xs="12" sm="6" md="3">
                <Input
                  type="select"
                  id="caseCategory"
                  className="py-1"
                  onChange={(e) =>
                    handleFilterChange("case_category", e.target.value)
                  }
                >
                  <option value="">Select Categories...</option>
                  <option value="MORTGAGE">Mortgage</option>
                  <option value="PROTECTION">Protection</option>
                  <option value="GENERAL_INSURANCE">General Insurance</option>
                </Input>
              </Col>

              {/* Case Stage Filter */}
              <Col xs="12" sm="6" md="3">
                <Input
                  type="select"
                  id="caseStage"
                  className="py-1"
                  onChange={(e) =>
                    handleFilterChange("case_stage", e.target.value)
                  }
                >
                  <option value="">Select Stages...</option>
                  <option value="INQUIRY">Inquiry</option>
                  <option value="FACT_FIND">Fact Find</option>
                  <option value="RESEARCH_COMPLIANCE_CHECK">
                    Research and Compliance Check
                  </option>
                  <option value="DECISION_IN_PRINCIPLE">
                    Decision in Principle
                  </option>
                  <option value="FULL_MORTGAGE_APPLICATION">
                    Full Mortgage Application
                  </option>
                  <option value="OFFER_FROM_BANK">Offer From Bank</option>
                  <option value="LEGAL">Legal</option>
                  <option value="COMPLETION">Completion</option>
                  <option value="FUTURE_OPPORTUNITY">Future Opportunity</option>
                  <option value="NOT_PROCEED">Not Proceed</option>
                </Input>
              </Col>

              {/* Clear All Filters Button */}
              <Col xs="12" sm="6" md="3">
                <Button
                  className="btn btn-secondary w-100"
                  onClick={() => setFilters(defaultFilters)}
                >
                  Clear All Filters
                </Button>
              </Col>
            </Row>
          </Card>
        )}

        {/* Case Table */}
        <Row>
          <Table bordered hover responsive>
            <thead className="thead-light text-center">
              <tr>
                <th>Case Name</th>
                <th>Lead User</th>
                <th>Phone</th>
                <th>Case Category</th>
                <th>Case Stage</th>
                <th>Created At</th>
                <th>Created By</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {isLoading ? (
                <tr>
                  <td colSpan={8} className="text-center">
                    <Spinner color="primary" />
                  </td>
                </tr>
              ) : paginatedCases.length > 0 ? (
                paginatedCases.map((caseItem: CaseInfo) => (
                  <tr key={caseItem.alias}>
                    <td>
                      <Link href={`/dashboard/organization/${caseItem.alias}`}>
                        {caseItem.name}
                      </Link>
                    </td>
                    <td>
                      {caseItem.lead_user
                        ? `${caseItem.lead_user.first_name} ${caseItem.lead_user.last_name}`
                        : "N/A"}
                    </td>
                    <td>{caseItem.lead_user?.phone || "N/A"}</td>
                    <td>
                      {caseItem.case_category.charAt(0).toUpperCase() +
                        caseItem?.case_category.slice(1).toLowerCase()}
                    </td>
                    <td>
                      {caseItem.case_stage.charAt(0).toUpperCase() +
                        caseItem.case_stage.slice(1).toLowerCase()}
                    </td>
                    <td>{formatDateToDMY(caseItem.created_at)}</td>
                    <td>
                      {caseItem.created_by?.first_name}{" "}
                      {caseItem.created_by?.last_name}
                    </td>
                    <td>
                      <Button
                        size="sm"
                        color="success"
                        className="me-2"
                        onClick={() => openUpdateCaseModal(caseItem)}
                      >
                        <i className="icon-pencil-alt"></i>
                      </Button>
                      <Button
                        size="sm"
                        color="danger"
                        onClick={() => openDeleteCaseModal(caseItem)}
                      >
                        <i className="icon-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center">
                    No cases found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Row>

        {/* Pagination */}
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
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page} active={page === currentPage}>
              <PaginationLink onClick={() => setCurrentPage(page)}>
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem disabled={currentPage === pageCount}>
            <PaginationLink
              next
              onClick={() => setCurrentPage(currentPage + 1)}
            />
          </PaginationItem>
          <PaginationItem disabled={currentPage === pageCount}>
            <PaginationLink last onClick={() => setCurrentPage(pageCount)} />
          </PaginationItem>
        </Pagination>
      </CardBody>

      {/* Modals */}
      <AddNewCaseModal
        isOpen={isAddNewCaseModalOpen}
        toggle={toggleAddNewCaseModal}
        onSave={refetchCases}
      />
      <UpdateCaseModal
        isOpen={isUpdateCaseModalOpen}
        toggle={toggleUpdateCaseModal}
        caseData={currentCase as CaseInfo}
        onSave={refetchCases}
      />
      <DeleteCaseModal
        isOpen={isDeleteCaseModalOpen}
        toggle={toggleDeleteCaseModal}
        caseData={currentCase}
        onDelete={() => currentCase && handleCaseDeletion(currentCase.alias)}
      />
    </Card>
  );
};

export default CaseTable;
