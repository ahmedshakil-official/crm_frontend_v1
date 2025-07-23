import { Container } from "reactstrap";
import OrganisationBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import UsersAndRolesOverview from "./UsersAndRolesOverview/UsersAndRolesOverview";
import UsersAndRolesTabs from "./UsersAndRolesTabs/UsersAndRolesTabs";

const UsersAndRolesContainer: React.FC = () => {
  return (
    <>
      <OrganisationBreadcrumbs
        mainTitle="Users & Roles"
        title="Manage user access, roles, and permissions"
        parent="Reports & Tasks"
        activePage="Users & Roles"
      />
      <Container fluid>
        <UsersAndRolesOverview />
        <UsersAndRolesTabs />
      </Container>
    </>
  );
};

export default UsersAndRolesContainer;
