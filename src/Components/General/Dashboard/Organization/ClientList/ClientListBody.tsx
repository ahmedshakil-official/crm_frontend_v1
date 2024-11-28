import apiClient from "@/services/api-client";
import axios from "axios";

import { ClientList } from "@/Constant";
import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from "reactstrap";
import "./ClientList.css";
import ClientListHeader from "./ClientListHeader";

interface Client {
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

const ClientLeadListBody: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [clientsPerPage] = useState(5); // Number of clients per page

  // Fetch clients from API
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await apiClient.get("/director/clients/");
        const clientsData = Array.isArray(response.data)
          ? response.data
          : response.data.clients;
        setClients(clientsData || []);
      } catch (error: unknown) {
        // Check if error is an instance of AxiosError
        if (axios.isAxiosError(error)) {
          console.error("Axios error occurred:", error.response?.data);
        } else if (error instanceof Error) {
          console.error("Generic error occurred:", error.message);
        } else {
          // Unknown error type
          console.error("Unknown error occurred:", error);
        }
        setClients([]);
      }
    };
    fetchClients();
  }, []);

  // Search query filtering
  const filteredClients = Array.isArray(clients)
    ? clients.filter(
        (client) =>
          client.user.first_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          client.official_email
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      )
    : [];

  // Pagination indices calculation
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = filteredClients.slice(
    indexOfFirstClient,
    indexOfLastClient
  );

  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container p-2">
      <div>
        <ClientListHeader />
      </div>
      <div className="d-flex justify-content-between pt-0 pb-2">
        <h3>{ClientList}</h3>
        <Button color="primary" className="mt-0">
          Add Client
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
          {currentClients.map((client) => (
            <tr key={client.alias}>
              <td>
                {client.user.first_name} {client.user.last_name}
              </td>
              <td>{client.official_email}</td>
              <td>{client.official_phone}</td>
              <td>{client.role}</td>
              <td>
                {client.created_by.first_name} {client.created_by.last_name}
              </td>
              <td>{new Date(client.created_at).toLocaleString()}</td>
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

export default ClientLeadListBody;
