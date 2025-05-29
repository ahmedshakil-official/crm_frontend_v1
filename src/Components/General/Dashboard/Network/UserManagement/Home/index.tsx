import { Container } from "reactstrap";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import QuickActions from "./QuickActions/QuickActions";

const UserManagementContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <Container fluid>
        <DashboardOverview />
        <QuickActions/>
      </Container>
    </>
  );
};

export default UserManagementContainer;
