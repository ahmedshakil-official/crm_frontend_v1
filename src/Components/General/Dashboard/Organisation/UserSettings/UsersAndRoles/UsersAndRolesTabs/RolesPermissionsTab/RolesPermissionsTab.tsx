import React, { useState } from "react";
import { Card, CardBody, Input } from "reactstrap";

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
      permissions: ["View dashboard", "Access analytics", "Export reports"],
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
      permissions: ["View dashboard", "Access analytics", "Export reports"],
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
  Admin: [
    {
      category: "Dashboard Access",
      permissions: ["View dashboard", "Access analytics", "Export reports"],
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
        "Delete cases",
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
  Support: [
    {
      category: "Dashboard Access",
      permissions: ["View dashboard", "Access analytics", "Export reports"],
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
        "Delete cases",
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
  // ... other roles ...
};

const RolesPermissionsTab: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState("Principal");
  const [selectedPermissions, setSelectedPermissions] = useState<{
    [category: string]: string[];
  }>({});

  return (
    <div className="mt-3">
      <div className="d-flex gap-3">
        {mockRoles.map((role) => (
          <Card
            key={role.name}
            className={`mb-3 flex-fill text-center rounded-3 ${
              selectedRole === role.name ? `border-${role.color}` : ""
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

      <Card className="p-4 rounded-3">
        <div className="d-flex justify-content-between align-items-center mb-3 gap-2">
          <div>
            <h4 className="fw-bold d-flex align-items-center gap-2">
              {(() => {
                const selected = mockRoles.find(
                  (role) => role.name === selectedRole
                );
                if (!selected) return null;
                return (
                  <span
                    className={`d-flex align-items-center justify-content-center p-2 rounded-3 bg-${selected.color}`}
                  >
                    <i
                      className={`fa-solid ${selected.icon} text-white`}
                      style={{ fontSize: "12px" }}
                    ></i>
                  </span>
                );
              })()}
              <span>{selectedRole} Permissions</span>
            </h4>
          </div>
          <div className="d-flex justify-content-end gap-1">
            <button className="btn btn-outline-danger me-2" type="button">
              <i className="fa-solid fa-rotate-left me-1"></i> Reset
            </button>
            <button
              className="btn btn-primary d-flex align-items-center"
              type="button"
            >
              <i className="fa-regular fa-floppy-disk me-1"></i> Save Changes
            </button>
          </div>
        </div>
        <div className="row">
          {(mockPermissions[selectedRole] || []).map((cat, idx) => (
            <div className="col-md-6 mb-2" key={idx}>
              <div className="fw-bold mb-2">{cat.category}</div>
              <div className="row">
                {(() => {
                  // Split permissions into two columns
                  const half = Math.ceil(cat.permissions.length / 2);
                  const left = cat.permissions.slice(0, half);
                  const right = cat.permissions.slice(half);
                  return (
                    <>
                      <div className="col-6">
                        <ul className="list-unstyled">
                          {left.map((perm, i) => (
                            <li
                              key={i}
                              className="mb-2 d-flex align-items-center"
                            >
                              <Input
                                type="checkbox"
                                name={`permission-${cat.category}-${selectedRole}`}
                                value={perm}
                                style={{ cursor: "pointer" }}
                                checked={
                                  Array.isArray(
                                    selectedPermissions[cat.category]
                                  ) &&
                                  selectedPermissions[cat.category].includes(
                                    perm
                                  )
                                }
                                onChange={() => {
                                  setSelectedPermissions((prev) => {
                                    const prevSelected = Array.isArray(
                                      prev[cat.category]
                                    )
                                      ? prev[cat.category]
                                      : [];
                                    if (prevSelected.includes(perm)) {
                                      // Remove
                                      return {
                                        ...prev,
                                        [cat.category]: prevSelected.filter(
                                          (p) => p !== perm
                                        ),
                                      };
                                    } else {
                                      // Add
                                      return {
                                        ...prev,
                                        [cat.category]: [...prevSelected, perm],
                                      };
                                    }
                                  });
                                }}
                                className="me-2"
                              />
                              {perm}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul className="list-unstyled">
                          {right.map((perm, i) => (
                            <li
                              key={i}
                              className="mb-2 d-flex align-items-center"
                            >
                              <Input
                                type="checkbox"
                                name={`permission-${cat.category}-${selectedRole}`}
                                value={perm}
                                style={{ cursor: "pointer" }}
                                checked={
                                  Array.isArray(
                                    selectedPermissions[cat.category]
                                  ) &&
                                  selectedPermissions[cat.category].includes(
                                    perm
                                  )
                                }
                                onChange={() => {
                                  setSelectedPermissions((prev) => {
                                    const prevSelected = Array.isArray(
                                      prev[cat.category]
                                    )
                                      ? prev[cat.category]
                                      : [];
                                    if (prevSelected.includes(perm)) {
                                      // Remove
                                      return {
                                        ...prev,
                                        [cat.category]: prevSelected.filter(
                                          (p) => p !== perm
                                        ),
                                      };
                                    } else {
                                      // Add
                                      return {
                                        ...prev,
                                        [cat.category]: [...prevSelected, perm],
                                      };
                                    }
                                  });
                                }}
                                className="me-2"
                              />
                              {perm}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default RolesPermissionsTab;
