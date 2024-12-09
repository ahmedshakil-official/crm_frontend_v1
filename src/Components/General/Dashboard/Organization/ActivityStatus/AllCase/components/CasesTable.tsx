import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";
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
  Table,
} from "reactstrap";
import "../../ActivityStatus.css";
import AddNewCaseModal from "../../Modals/AddNewCaseModal";

export interface CaseInfo {
  alias: string;
  lead: number;
  name: string;
  lead_user: {
    email: string;
    phone: string;
    first_name: string;
    last_name: string;
    profile_image: string;
    user_type: string;
  };
  case_category: string;
  applicant_type: string;
  case_status: string;
  case_stage: string;
  created_by: {
    first_name: string;
    last_name: string;
  };
  updated_by: {
    first_name: string;
    last_name: string;
  };
}

const CaseTable: React.FC = () => {
  const [caseInfo, setCaseInfo] = useState<CaseInfo[]>([]);
  const [isAddNewCaseModalOpen, setIsAddNewCaseModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [casesPerPage] = useState(10);

  const toggleAddNewCaseModal = () =>
    setIsAddNewCaseModalOpen(!isAddNewCaseModalOpen);

  const openAddNewCaseModal = () => {
    toggleAddNewCaseModal();
  };

  const fetchCaseInfo = async () => {
    try {
      const response = await apiClient.get("/cases/");
      const CaseData = Array.isArray(response.data)
        ? response.data
        : response.data.cases;
      setCaseInfo(CaseData || []);
    } catch (error) {
      console.error("Error Fetching Cases", error);
      setCaseInfo([]);
    }
  };

  useEffect(() => {
    fetchCaseInfo();
  }, []);

  const filteredCases = caseInfo.filter((caseItem) =>
    caseItem.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastCase = currentPage * casesPerPage;
  const indexOfFirstCase = indexOfLastCase - casesPerPage;
  const currentCases = filteredCases.slice(indexOfFirstCase, indexOfLastCase);

  const pageCount = Math.ceil(filteredCases.length / casesPerPage);

  return (
    <Card>
      <CardHeader className="pb-0">
        <Row className="align-items-center">
          <Col md="3">
            <h3>All Cases</h3>
          </Col>
          <Col md="6">
            <InputGroup>
              <Input
                type="text"
                placeholder="Search..."
                className="pe-5 rounded z-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <InputGroupText className="position-absolute z-2 fixed-end end-0 top-50 translate-middle-y bg-transparent border-0 pe-3">
                <i className="fa-solid fa-magnifying-glass text-primary"></i>
              </InputGroupText>
            </InputGroup>
          </Col>
          <Col md="3" xs="12" className="text-md-end text-center mt-2 mt-md-0">
            <Button color="primary" onClick={openAddNewCaseModal}>
              Add New Case
            </Button>
          </Col>
        </Row>
        {/* Filter Options */}
        <Card className="pt-3 mt-4 bg-primary p-3 rounded-1">
          <Row className="justify-content-center text-center g-3">
            {/* All Employee Filter */}
            <Col xs="12" sm="6" md="4" lg="2">
              <Input type="select" id="employeeFilter" className="py-1">
                <option value="">All Employees</option>
                <option value="employee1">Employee 1</option>
                <option value="employee2">Employee 2</option>
                <option value="employee3">Employee 3</option>
              </Input>
            </Col>

            {/* Case Category Filter */}
            <Col xs="12" sm="6" md="4" lg="2">
              <Input type="select" id="caseCategory" className="py-1">
                <option value="">All Categories</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </Input>
            </Col>

            {/* Application Type Filter */}
            <Col xs="12" sm="6" md="4" lg="2">
              <Input type="select" id="applicationType" className="py-1">
                <option value="">All Types</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </Input>
            </Col>

            {/* Case Status Filter */}
            <Col xs="12" sm="6" md="4" lg="2">
              <Input type="select" id="caseStatus" className="py-1">
                <option value="">All Statuses</option>
                <option value="status1">Status 1</option>
                <option value="status2">Status 2</option>
                <option value="status3">Status 3</option>
              </Input>
            </Col>

            {/* Case Stage Filter */}
            <Col xs="12" sm="6" md="4" lg="2">
              <Input type="select" id="caseStage" className="py-1">
                <option value="">All Stages</option>
                <option value="stage1">Stage 1</option>
                <option value="stage2">Stage 2</option>
                <option value="stage3">Stage 3</option>
              </Input>
            </Col>

            {/* Show Removed Cases Button */}
            <Col xs="12" sm="6" md="4" lg="2">
              <Button className="btn btn-light text-black w-100">
                Removed Case
              </Button>
            </Col>
          </Row>
        </Card>
      </CardHeader>

      {/* Card Body */}
      <CardBody className="px-0 mx-0">
        <Table bordered hover responsive>
          <thead className="thead-light text-center">
            <tr>
              <th>Case Name</th>
              <th>Lead User</th>
              <th>Case Category</th>
              <th>Applicant Type</th>
              <th>Case Status</th>
              <th>Case Stage</th>
              <th>Created by</th>
              <th>Updated By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {currentCases.length > 0 ? (
              currentCases.map((caseItem) => (
                <tr key={caseItem.alias}>
                  <td>{caseItem.name}</td>
                  <td>
                    {caseItem.lead_user
                      ? `${caseItem.lead_user.first_name} ${caseItem.lead_user.last_name}`
                      : "N/A"}
                  </td>
                  <td>{caseItem.case_category}</td>
                  <td>{caseItem.applicant_type}</td>
                  <td>{caseItem.case_status}</td>
                  <td>
                    <span className="bg-success rounded-4 px-2">
                      {caseItem.case_stage}
                    </span>
                  </td>
                  <td>
                    {caseItem.created_by.first_name}{" "}
                    {caseItem.created_by.last_name}
                  </td>
                  <td>{caseItem.updated_by?.first_name}</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <Button
                        size="sm"
                        color="success"
                        title="Edit"
                        className="me-2"
                      >
                        <i className="icon-pencil-alt"></i>
                      </Button>
                      <Button size="sm" color="danger" title="Delete Case">
                        <i className="icon-trash"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={10} className="text-center">
                  No cases found.
                </td>
              </tr>
            )}
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
          {Array.from({ length: pageCount }, (_, i) => i + 1).map(
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
      {/* Modals  */}
      <AddNewCaseModal
        isOpen={isAddNewCaseModalOpen}
        toggle={toggleAddNewCaseModal}
        onSave={() => fetchCaseInfo()}
      />
    </Card>
  );
};

export default CaseTable;
