import React from "react";
import { Button, Input, Table } from "reactstrap";

const mockUsers = [
  {
    initials: "JS",
    name: "John Smith",
    email: "john.smith@firm.com",
    phone: "+1 (555) 123-4567",
    role: "Principal",
    status: "Active",
    department: "Leadership",
    lastLogin: "2024-01-15",
  },
  {
    initials: "SJ",
    name: "Sarah Johnson",
    email: "sarah.johnson@firm.com",
    phone: "+1 (555) 234-5678",
    role: "Adviser",
    status: "Active",
    department: "Wealth Management",
    lastLogin: "2024-01-14",
  },
  {
    initials: "JM",
    name: "John Doe",
    email: "john.doe@firm.com",
    phone: "+1 (555) 345-6789",
    role: "Admin",
    status: "Active",
    department: "Accounting",
    lastLogin: "2024-01-13",
  },
  {
    initials: "JA",
    name: "John Abrahum",
    email: "john.abr@firm.com",
    phone: "+1 (555) 345-6789",
    role: "Adviser",
    status: "Inactive",
    department: "Accounting",
    lastLogin: "2024-01-13",
  },
  // ... more mock users ...
];

const UsersTab: React.FC = () => {
  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3 gap-2">
        <Input
          className="w-100"
          placeholder="Search users by name, email, or role..."
          type="text"
          style={{ padding: "10px 10px" }}
        />
        <Button color="secondary">Filters</Button>
      </div>
      <Table hover responsive className="rounded-3 overflow-hidden">
        <thead className="text-center bg-light-primary">
          <tr>
            <th className="text-start">User</th>
            <th>Role</th>
            <th>Status</th>
            <th>Department</th>
            <th>Last Login</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((user, idx) => (
            <tr key={idx}>
              <td>
                <div className="d-flex align-items-center">
                  <span
                    className="badge bg-primary rounded-circle me-2"
                    style={{
                      width: 36,
                      height: 36,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                    }}
                  >
                    {user.initials}
                  </span>
                  <div>
                    <div className="fw-bold">{user.name}</div>
                    <div className="text-muted ">
                      <i className="fa-solid fa-envelope me-1 small"></i>
                      <a
                        href={`mailto:${user.email}`}
                        className="text-dark text_decoration_hover small"
                      >
                        {user.email}
                      </a>
                    </div>
                    <div className="text-muted ">
                      <i className="fa-solid fa-phone me-1 small"></i>
                      <a
                        href={`tel:${user.phone}`}
                        className="text-dark text_decoration_hover small"
                      >
                        {user.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-center">
                <span
                  className={`badge bg-${
                    user.role === "Principal"
                      ? "primary"
                      : user.role === "Adviser"
                      ? "info"
                      : user.role === "Admin"
                      ? "success"
                      : "warning"
                  } text-uppercase`}
                >
                  {user.role}
                </span>
              </td>
              <td className="text-center">
                <span
                  className={`badge bg-${
                    user.status === "Active"
                      ? "success"
                      : user.status === "Inactive"
                      ? "secondary"
                      : "warning"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="text-center">{user.department}</td>
              <td className="text-center">
                <i className="fa-solid fa-calendar me-1 small"></i>
                {user.lastLogin}
              </td>
              <td>
                <div className="d-flex justify-content-center align-items-center gap-1">
                  <Button color="secondary" size="sm">
                    <i className="fa-solid fa-eye"></i>
                  </Button>
                  <Button color="success" size="sm">
                    <i className="fa-solid fa-user-pen"></i>
                  </Button>
                  <Button color="primary" size="sm">
                    <i className="fa-solid fa-ellipsis"></i>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersTab;
