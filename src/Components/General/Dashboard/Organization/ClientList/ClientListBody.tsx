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
import "./ClientList.css";
import AddClientModal from "./Modals/AddClientModal";

export interface Client {
  alias: string;
  user: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
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

const ClientListBody: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [clientsPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Partial<Client>>({
    user: { first_name: "", last_name: "", email: "", phone: "", password: "" },
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

  const fetchClients = async () => {
    try {
      const response = await apiClient.get("/director/clients/");
      const ClientsData = Array.isArray(response.data)
        ? response.data
        : response.data.clients;
      setClients(ClientsData || []);
    } catch (error) {
      console.error("Error fetching Clients:", error);
      setClients([]);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleSaveClient = async () => {
    try {
      if (selectedClient.alias) {
        await apiClient.patch(
          `/director/clients/${selectedClient.alias}/`,
          selectedClient
        );
      } else {
        await apiClient.post("/director/clients/", selectedClient);
      }
      fetchClients();
      toggleModal();
    } catch (error) {
      console.error("Error saving Client:", error);
    }
  };

  const openAddModal = () => {
    setSelectedClient({
      user: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
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
    toggleModal();
  };

  const openEditModal = (client: Client) => {
    setSelectedClient(client);
    toggleModal();
  };

  const filteredClients = clients.filter(
    (client) =>
      client.user.first_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      client.official_email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = filteredClients.slice(
    indexOfFirstClient,
    indexOfLastClient
  );

  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);

  return (
    <div className="container p-3">
      <div className="d-flex justify-content-between pt-0 pb-2">
        <h3>Client List</h3>
        <Button color="primary" className="mt-0" onClick={openAddModal}>
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
              {/* <td className="hide">{client.gender}</td> */}
              <td>
                {client.created_by.first_name} {client.created_by.last_name}
              </td>
              <td>{new Date(client.created_at).toLocaleString()}</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2 align-items-center">
                  <Button
                    color="success"
                    size="sm"
                    onClick={() => openEditModal(client)}
                  >
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
      <AddClientModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        onSave={() => fetchClients()}
      />
    </div>
  );
};

export default ClientListBody;
