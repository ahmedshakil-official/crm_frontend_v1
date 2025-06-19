import classnames from "classnames";
import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import RolesPermissionsTab from "./RolesPermissionsTab/RolesPermissionsTab";
import UsersTab from "./UsersTab/UsersTab";

const UsersAndRolesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"users" | "roles">("users");

  return (
    <div className="container mt-4">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "users" })}
            onClick={() => setActiveTab("users")}
            style={{ cursor: "pointer" }}
          >
            Users
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "roles" })}
            onClick={() => setActiveTab("roles")}
            style={{ cursor: "pointer" }}
          >
            Roles & Permissions
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="users">{activeTab === "users" && <UsersTab />}</TabPane>
        <TabPane tabId="roles">
          {activeTab === "roles" && <RolesPermissionsTab />}
        </TabPane>
      </TabContent>
    </div>
  );
};

export default UsersAndRolesTabs;
