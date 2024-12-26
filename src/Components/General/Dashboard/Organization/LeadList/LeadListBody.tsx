import apiClient from "@/services/api-client";
import { FetchLeadsProps, LeadsInfo } from "@/Types/Organization/LeadTypes";
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
import "./LeadList.css";
import AddLeadModal from "./Modals/AddLeadModal";
import DeleteLeadModal from "./Modals/DeleteLeadModal";
import UpdateLeadModal from "./Modals/UpdateLeadModal";
import { toast } from "react-toastify";

const LeadListBody: React.FC<FetchLeadsProps> = ({ setIsFetchedLead }) => {
  const [leads, setLeads] = useState<LeadsInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [leadsPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Partial<LeadsInfo>>({
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
  const [leadToDelete, setLeadToDelete] = useState<LeadsInfo | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);

  const openDeleteModal = (lead: LeadsInfo) => {
    setLeadToDelete(lead);
    toggleDeleteModal();
  };

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.get("/director/leads/");
      const LeadsData = Array.isArray(response.data)
        ? response.data
        : response.data.leads;
      setLeads(LeadsData || []);
    } catch (error) {
      console.error("Error fetching Leads:", error);
      setLeads([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  //delete lead
  const deleteLead = async (alias: string) => {
    if (!alias) return;
    try {
      setIsDeleting(true);
      await apiClient.delete(`/director/leads/${alias}/`);
      fetchLeads(); // Refresh the leads after deletion
      toast.success("Lead deleted successfully.");
    } catch (error) {
      console.error("Error deleting lead:", error);
      toast.error("Failed to delete the lead. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  // openmodals
  const openAddModal = () => {
    toggleModal();
  };

  const openUpdateModal = (lead: LeadsInfo) => {
    setSelectedLead(lead);
    toggleUpdateModal();
  };
  // openmodals end

  const filteredLeads = leads.filter((lead) => {
    const fullName = `${lead?.user?.first_name || ""} ${
      lead?.user?.last_name || ""
    }`.toLowerCase();

    return (
      fullName.includes(searchQuery.toLowerCase()) ||
      lead?.official_email?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirstLead, indexOfLastLead);

  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

  return (
    <div className="container mt-1">
      <Row className="flex justify-content-between py-4">
        <Col md="3">
          <h2>Lead List</h2>
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
            Add Lead
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
            ) : currentLeads.length > 0 ? (
              currentLeads.map((lead) => (
                <tr key={lead.alias}>
                  <td>
                    {lead?.user?.first_name} {lead?.user?.last_name}
                  </td>
                  <td>{lead?.official_email}</td>
                  <td>{lead?.official_phone}</td>
                  <td>{lead?.role}</td>
                  <td>
                    {lead?.created_by?.first_name} {lead?.created_by?.last_name}
                  </td>
                  <td>{new Date(lead.created_at).toLocaleString()}</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                      <Button
                        color="success"
                        size="sm"
                        title="Update User"
                        onClick={() => openUpdateModal(lead)}
                      >
                        <i className="icon-pencil-alt"></i>
                      </Button>
                      <Button
                        color="danger"
                        size="sm"
                        title="Delete User"
                        onClick={() => openDeleteModal(lead)}
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
                  No leads available.
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

      {/* Modals */}
      <AddLeadModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        setIsFetchedLead={setIsFetchedLead}
        onSave={() => fetchLeads()}
      />

      <UpdateLeadModal
        isOpen={isUpdateModalOpen}
        toggle={toggleUpdateModal}
        fetchLeads={fetchLeads}
        onSave={() => {
          setIsFetchedLead = { setIsFetchedLead };
          toggleUpdateModal();
        }}
        selectedLead={selectedLead}
      />
      <DeleteLeadModal
        isOpen={isDeleteModalOpen}
        toggle={toggleDeleteModal}
        onDelete={() => {
          if (leadToDelete) deleteLead(leadToDelete.alias);
          toggleDeleteModal();
        }}
        isDeleting={isDeleting}
        leadName={`${leadToDelete?.user?.first_name} ${leadToDelete?.user?.last_name}`}
      />

      {/* modals end */}
    </div>
  );
};

export default LeadListBody;
