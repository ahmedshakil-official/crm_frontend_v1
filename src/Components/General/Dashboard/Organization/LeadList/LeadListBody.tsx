import { LeadList } from "@/Constant";
import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from "reactstrap";
import "./LeadList.css";
import LeadListHeader from "./LeadListHeader";

interface Lead {
  alias: string;
  user: {
    first_name: string;
    last_name: string;
  };
  official_email: string;
  official_phone: string;
  role: string;
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
  const [leadsPerPage] = useState(5); // Number of leads per page

  // Fetch leads from API
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await apiClient.get("/director/leads/");
        const leadsData = Array.isArray(response.data)
          ? response.data
          : response.data.leads; // Adjust this based on API structure
        setLeads(leadsData || []); // Ensure it's always an array
      } catch (error) {
        console.error("Error fetching leads:", error);
        setLeads([]); // Fallback to an empty array in case of error
      }
    };
    fetchLeads();
  }, []);

  //search query
  const filteredLeads = Array.isArray(leads)
    ? leads.filter(
        (lead) =>
          lead.user.first_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          lead.official_email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Calculate indices for pagination
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirstLead, indexOfLastLead);

  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container p-2">
      <div>
        <LeadListHeader />
      </div>
      <div className="d-flex justify-content-between pt-0 pb-2">
        <h3>{LeadList}</h3>
        <Button color="primary" className="mt-0">
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
              <td>
                {lead.created_by.first_name} {lead.created_by.last_name}
              </td>
              <td>{new Date(lead.created_at).toLocaleString()}</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2 align-items-center">
                  <Button color="success" size="sm">
                    <i className="icon-pencil-alt"></i>
                  </Button>
                  <Button color="danger" size="sm">
                    <i className="icon-trash"></i>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination className="d-flex justify-content-end p-2">
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink first onClick={() => handlePageChange(1)} />
        </PaginationItem>
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink
            previous
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <PaginationItem
              key={pageNumber}
              active={pageNumber === currentPage}
            >
              <PaginationLink onClick={() => handlePageChange(pageNumber)}>
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink
            next
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationItem>
        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink last onClick={() => handlePageChange(totalPages)} />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default LeadListBody;
