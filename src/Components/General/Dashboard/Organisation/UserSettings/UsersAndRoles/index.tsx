import { Container } from "reactstrap";
import OrganisationBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import UsersAndRolesOverview from "./UsersAndRolesOverview/UsersAndRolesOverview";

const UsersAndRolesContainer: React.FC = () => {
  return (
    <>
      <OrganisationBreadcrumbs
        mainTitle="Users & Roles"
        title="Manage user access, roles, and permissions"
        parent="User Settings"
        activePage="Users & Roles"
      />
      <Container fluid>
        <UsersAndRolesOverview />
      </Container>
    </>
  );
};

export default UsersAndRolesContainer;
