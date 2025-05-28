import { useGetOrganizationListQuery } from "@/Redux/Reducers/Network/Organization/OrganizationListApi";
import { OrganizationsProps } from "@/Types/Network/OrganizationsTypes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  Button,
  Card,
  CardBody,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Spinner,
} from "reactstrap";
import AddOrganizationModal from "./Modals/AddOrganizationModal";
import "./Organization.css";

const OrganizationCards = () => {
  const [organizations, setOrganizations] = useState<OrganizationsProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  //RTK Hooks
  const { data: organizationList, isLoading } = useGetOrganizationListQuery({
    search: searchQuery,
  });

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Fetch organizations when the search query changes
  useEffect(() => {
    try {
      if (organizationList) {
        setOrganizations(organizationList);
      }
    } catch (error) {
      console.error("Error fetching organizations:", error);
    }
  }, [organizationList]);

  // Pagination logic
  const totalPages = Math.ceil(organizations.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrganizations = organizations.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Row>
      <Card>
        <Row className="flex justify-content-between py-4">
          <Col md="3">
            <h4 className="mb-4 fw-bold">Organizations</h4>
          </Col>
          <Col>
            <InputGroup>
              <Input
                type="text"
                placeholder="Search Organization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <InputGroupText className="bg-success rounded-start-0 border-start-0">
                <FaSearch />
              </InputGroupText>
            </InputGroup>
          </Col>
          <Col md="3" xs="12" className="text-md-end text-center mt-2 mt-md-0">
            <Button color="primary" onClick={toggleModal}>
              Add Organization
            </Button>
          </Col>
        </Row>
        <Row>
          {isLoading ? (
            <Row className="pb-4 d-flex justify-content-center">
              <Spinner color="primary" />
            </Row>
          ) : currentOrganizations.length > 0 ? (
            currentOrganizations.map((item) => (
              <Col
                sm="6"
                xxl="3"
                lg="4"
                xl="4"
                className="col-ed-4 box-col-4"
                key={item.slug}
              >
                <Card className="bg-white border organization_card opacity-100 p-3 position-relative">
                  <Link
                    href={item?.website || "#"}
                    target="_blank"
                    className="text-muted position-absolute top-0 end-0 p-3"
                  >
                    <i
                      style={{ fontSize: "10px" }}
                      className="fa-solid fa-up-right-from-square"
                    ></i>
                  </Link>

                  <CardBody className="p-0 ">
                    <div className="d-flex gap-2">
                      <div className="mt-0 rounded-circle overflow-hidden border-1 border-primary">
                        <Image
                          width="28"
                          height="28"
                          className="img-fluid object-fit-cover"
                          src={item.logo || "/assets/images/network/logo.jpg"}
                          alt="Organization"
                        />
                      </div>
                      <h5 className="mb-1">
                        <Link
                          className="text-black fw-bold text_decoration_hover"
                          href={`/dashboard/network/organization/${item.slug}`}
                        >
                          {item.name}
                        </Link>
                      </h5>
                    </div>
                    <div className="mt-2">
                      <Link
                        href={`mailto:${item.email}`}
                        className="fs-6 text_decoration_hover mb-2"
                      >
                        <small> {item.email}</small>
                      </Link>
                    </div>

                    <div className="d-flex justify-content-between mt-3 pt-2 border-top">
                      <Col className="border-end">
                        <div className="text-center ">
                          <h5 className="mb-0">15</h5>
                          <span className="text-primary small">Cases</span>
                        </div>
                      </Col>
                      <Col className="border-end">
                        <div className="text-center ">
                          <h5 className="mb-0">10</h5>
                          <span className="text-primary small">Employees</span>
                        </div>
                      </Col>
                      <Col className="">
                        <div className="text-center">
                          <h5 className="mb-0">14</h5>
                          <span className="text-primary small">Clients</span>
                        </div>
                      </Col>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))
          ) : (
            <Row className="text-center">
              <p>Organization not found!</p>
            </Row>
          )}
        </Row>
        {/* Pagination and total organizations */}
        <Row>
          <div className="d-flex justify-content-between align-items-center px-3 pb-3">
            <div className="px-2">
              <p className="text-success">
                Showing 1 to {Math.min(8, currentOrganizations?.length || 0)} of{" "}
                {organizations?.length || 0} Organizations
              </p>
            </div>

            {organizations.length > itemsPerPage && (
              <Pagination className="d-flex justify-content-end align-items-center">
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
                        <PaginationLink
                          onClick={() => setCurrentPage(pageNumber)}
                        >
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
                        (pageNumber) =>
                          pageNumber > 1 && pageNumber < totalPages
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
                      <PaginationLink
                        onClick={() => setCurrentPage(totalPages)}
                      >
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
                  <PaginationLink
                    last
                    onClick={() => setCurrentPage(totalPages)}
                  />
                </PaginationItem>
              </Pagination>
            )}
          </div>
        </Row>

        {/* Add Organization Modal */}
        <AddOrganizationModal isOpen={isModalOpen} toggleModal={toggleModal} />
      </Card>
    </Row>
  );
};

export default OrganizationCards;
