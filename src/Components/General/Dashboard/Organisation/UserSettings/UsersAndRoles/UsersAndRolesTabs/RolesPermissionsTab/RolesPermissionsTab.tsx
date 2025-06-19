import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";

const mockRoles = [
  { name: "Principal", color: "primary", users: 2, icon: "fa-crown" },
  { name: "Adviser", color: "secondary", users: 8, icon: "fa-user-group" },
  { name: "Admin", color: "success", users: 3, icon: "fa-shield-halved" },
  { name: "Support", color: "warning", users: 2, icon: "fa-gear" },
];

const mockPermissions: Record<
  string,
  { category: string; permissions: string[] }[]
> = {
  Principal: [
    {
      category: "Dashboard Access",
      permissions: ["View dashboard", "Access analytics"],
    },
    {
      category: "Client Management",
      permissions: [
        "View all clients",
        "Edit client info",
        "Add new clients",
        "Delete clients",
      ],
    },
    {
      category: "Case Management",
      permissions: [
        "View all cases",
        "Update case status",
        "Create new cases",
        "Assign cases",
      ],
    },
    {
      category: "Document Management",
      permissions: [
        "View documents",
        "Share documents",
        "Upload documents",
        "Delete documents",
      ],
    },
    {
      category: "User Management",
      permissions: [
        "View users",
        "Edit user roles",
        "Add users",
        "Deactivate users",
      ],
    },
    {
      category: "System Settings",
      permissions: [
        "View settings",
        "Manage integrations",
        "Modify workflows",
        "System configuration",
      ],
    },
    { category: "Reports", permissions: ["Export reports"] },
  ],
  Adviser: [
    {
      category: "Dashboard Access",
      permissions: ["View dashboard", "Access analytics"],
    },
    {
      category: "Client Management",
      permissions: ["View all clients", "Edit client info", "Add new clients"],
    },
    {
      category: "Case Management",
      permissions: ["View all cases", "Update case status", "Create new cases"],
    },
    {
      category: "Document Management",
      permissions: ["View documents", "Share documents", "Upload documents"],
    },
    {
      category: "User Management",
      permissions: ["View users", "Edit user roles"],
    },
    {
      category: "System Settings",
      permissions: ["View settings", "Manage integrations"],
    },
    { category: "Reports", permissions: ["Export reports"] },
  ],
  // ... other roles ...
};

const RolesPermissionsTab: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState("Principal");

  return (
    <div className="mt-2">
      <div className="d-flex gap-3">
        {mockRoles.map((role) => (
          <Card
            key={role.name}
            className={`flex-fill text-center rounded-3 ${
              selectedRole === role.name ? "border-primary" : ""
            }`}
            style={{ cursor: "pointer", minWidth: 180 }}
            onClick={() => setSelectedRole(role.name)}
          >
            <CardBody className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-3">
                <div
                  className={`d-flex align-items-center justify-content-center p-2 rounded-3 bg-${role.color}`}
                >
                  <i className={`fa-solid ${role.icon} text-white`}></i>
                </div>
                <div className="text-start flex-grow-1e">
                  <div className="fw-bold">{role.name}</div>
                  <div className="text-muted small mb-1">
                    {role.users} users
                  </div>
                </div>
              </div>
              <div>
                <span
                  className={`badge fw-normal mt-1 ${
                    selectedRole === role.name
                      ? `bg-light-${role.color} text-${role.color}`
                      : ""
                  }`}
                  style={{
                    visibility:
                      selectedRole === role.name ? "visible" : "hidden",
                  }}
                >
                  Selected
                </span>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <div>
        <h5 className="mb-3">{selectedRole} Permissions</h5>
        <div className="row">
          {(mockPermissions[selectedRole] || []).map((cat, idx) => (
            <div className="col-md-4 mb-3" key={idx}>
              <Card>
                <CardBody>
                  <strong>{cat.category}</strong>
                  <ul className="list-unstyled mt-2">
                    {cat.permissions.map((perm, i) => (
                      <li key={i}>
                        <input
                          type="checkbox"
                          checked
                          readOnly
                          className="me-2"
                        />{" "}
                        {perm}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RolesPermissionsTab;
