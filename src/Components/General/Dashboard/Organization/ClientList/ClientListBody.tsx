import apiClient from "@/services/api-client";

import { ClientInfoProps } from "@/Types/Organization/ClientTypes";
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
import "./ClientList.css";
import AddClientModal from "./Modals/AddClientModal";
import DeleteClientModal from "./Modals/DeleteClientModal";
import UpdateClientModal from "./Modals/UpdateClientModal";
import { toast } from "react-toastify";

const ClientListBody: React.FC = () => {
  const [clients, setClients] = useState<ClientInfoProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [clientsPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<
    Partial<ClientInfoProps>
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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [clientToDelete, setClientToDelete] = useState<ClientInfoProps | null>(
    null
  );

  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);

  const openDeleteModal = (client: ClientInfoProps) => {
    setClientToDelete(client);
    toggleDeleteModal();
  };

  const fetchClients = async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.get("/director/clients/");
      const ClientsData = Array.isArray(response.data)
        ? response.data
        : response.data.clients;
      setClients(ClientsData || []);
    } catch (error) {
      console.error("Error fetching Clients:", error);
      setClients([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  //delete fanctionality
  const deleteClient = async (alias: string) => {
    if (!alias) return;
    try {
      setIsLoading(true);
      await apiClient.delete(`/director/clients/${alias}/`);
      fetchClients();
      toast.success("Client deleted successfully.");
    } catch (error) {
      console.error("Error deleting client:", error);
      toast.error("Failed to delete the client. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // openmodals
  const openAddModal = () => {
    toggleModal();
  };

  const openUpdateModal = (client: ClientInfoProps) => {
    setSelectedClient(client);
    toggleUpdateModal();
  };
  // openmodals end

  const filteredClients = clients.filter((client) => {
    const fullName = `${client?.user?.first_name || ""} ${
      client?.user?.last_name || ""
    }`.toLowerCase();

    return (
      fullName.includes(searchQuery.toLowerCase()) ||
      client?.official_email?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = filteredClients.slice(
    indexOfFirstClient,
    indexOfLastClient
  );

  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);

  return (
    <div className="container mt-1">
      <Row className="flex justify-content-between py-4">
        <Col md="3">
          <h2>Client List</h2>
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
            Add Client
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
            ) : currentClients.length > 0 ? (
              currentClients.map((client) => (
                <tr key={client.alias}>
                  <td>
                    {client?.user?.first_name} {client?.user?.last_name}
                  </td>
                  <td>{client.official_email}</td>
                  <td>{client.official_phone}</td>
                  <td>{client.role}</td>
                  <td>
                    {client?.created_by?.first_name}{" "}
                    {client?.created_by?.last_name}
                  </td>
                  <td>{new Date(client?.created_at).toLocaleString()}</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center gap-2 align-items-center">
                      <Button
                        color="success"
                        size="sm"
                        title="Update User"
                        onClick={() => openUpdateModal(client)}
                      >
                        <i className="icon-pencil-alt"></i>
                      </Button>
                      <Button
                        color="danger"
                        size="sm"
                        title="Delete User"
                        onClick={() => openDeleteModal(client)}
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
                  No clients available.
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

      {/* modals */}
      <AddClientModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        onSave={() => fetchClients()}
      />
      <UpdateClientModal
        isOpen={isUpdateModalOpen}
        toggle={toggleUpdateModal}
        fetchClients={fetchClients}
        onSave={() => {
          toggleUpdateModal();
        }}
        selectedClient={selectedClient}
      />
      <DeleteClientModal
        isOpen={isDeleteModalOpen}
        toggle={toggleDeleteModal}
        onDelete={() => {
          if (clientToDelete) deleteClient(clientToDelete.alias);
          toggleDeleteModal();
        }}
        isLoading={isLoading}
        clientName={`${clientToDelete?.user?.first_name} ${clientToDelete?.user?.last_name}`}
      />
      {/* modals end */}
    </div>
  );
};

export default ClientListBody;
