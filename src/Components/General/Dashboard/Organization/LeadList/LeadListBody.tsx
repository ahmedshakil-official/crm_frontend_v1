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
import "./LeadList.css";
import AddLeadModal from "./Modals/AddLeadModal";
import UpdateLeadModal from "./Modals/UpdateLeadModal";

export interface Lead {
  alias: string;
  user: {
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

const LeadListBody: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [leadsPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Partial<Lead>>({
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

  const fetchLeads = async () => {
    try {
      const response = await apiClient.get("/director/leads/");
      const LeadsData = Array.isArray(response.data)
        ? response.data
        : response.data.leads;
      setLeads(LeadsData || []);
    } catch (error) {
      console.error("Error fetching Leads:", error);
      setLeads([]);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // openmodals
  const openAddModal = () => {
    toggleModal();
  };

  const openUpdateModal = (lead: Lead) => {
    setSelectedLead(lead);
    toggleUpdateModal();
  };
  // openmodals end

  const filteredLeads = leads.filter(
    (lead) =>
      lead.user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.official_email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirstLead, indexOfLastLead);

  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

  return (
    <div className="container p-3">
      <div className="d-flex justify-content-between pt-0 pb-2">
        <h3>Lead List</h3>
        <Button color="primary" className="mt-0" onClick={openAddModal}>
          Add Lead
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
          {currentLeads.map((lead) => (
            <tr key={lead.alias}>
              <td>
                {lead.user.first_name} {lead.user.last_name}
              </td>
              <td>{lead.official_email}</td>
              <td>{lead.official_phone}</td>
              <td>{lead.role}</td>
              {/* <td className="hide">{lead.gender}</td> */}
              <td>
                {lead.created_by.first_name} {lead.created_by.last_name}
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
      <AddLeadModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        onSave={() => fetchLeads()}
      />
      <UpdateLeadModal
        isOpen={isUpdateModalOpen}
        toggle={toggleUpdateModal}
        onSave={() => {
          fetchLeads(); // Refresh the list after saving
          toggleUpdateModal(); // Close the modal
        }}
        selectedLead={selectedLead}
      />
      {/* modals end */}
    </div>
  );
};

export default LeadListBody;
