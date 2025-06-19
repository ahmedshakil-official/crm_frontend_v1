import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";

const mockRoles = [
  { name: "Principal", color: "purple", users: 2 },
  { name: "Adviser", color: "blue", users: 8 },
  { name: "Admin", color: "green", users: 3 },
  { name: "Support", color: "orange", users: 2 },
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
    <div className="mt-4">
      <div className="d-flex gap-3 mb-4">
        {mockRoles.map((role) => (
          <Card
            key={role.name}
            className={`flex-fill text-center ${
              selectedRole === role.name ? "border-primary" : ""
            }`}
            style={{ cursor: "pointer", minWidth: 180 }}
            onClick={() => setSelectedRole(role.name)}
          >
            <CardBody>
              <div
                className={`badge bg-${role.color} mb-2`}
                style={{ fontSize: 18 }}
              >
                {role.name}
              </div>
              <div className="text-muted">{role.users} users</div>
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
