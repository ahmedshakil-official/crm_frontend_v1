import { Container, Row } from "reactstrap";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import ManageRole from "./ManageRole/ManageRole";
import ManageUser from "./ManageUser/MangageUser";
import QuickActions from "./QuickActions/QuickActions";
import RecentSystemActivity from "./RecentSystemActivity/RecentSystemActivity";
import SystemAlerts from "./SystemAlerts/SystemAlerts";
import WeeklyActivity from "./WeeklyActivity/WeeklyActivity";

const UserManagementContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <Container fluid>
        <DashboardOverview />
        <QuickActions />
        <Row>
          <WeeklyActivity />
          <SystemAlerts />
        </Row>
        <RecentSystemActivity />
        <ManageUser />
        <ManageRole />
      </Container>
    </>
  );
};

export default UserManagementContainer;
