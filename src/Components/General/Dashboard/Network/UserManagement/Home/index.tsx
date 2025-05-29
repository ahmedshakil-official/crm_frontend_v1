import { Container } from "reactstrap";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import DashboardOverview from "./DashboardOverview/DashboardOverview";

const UserManagementContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <Container fluid>
        <DashboardOverview />
      </Container>
    </>
  );
};

export default UserManagementContainer;
