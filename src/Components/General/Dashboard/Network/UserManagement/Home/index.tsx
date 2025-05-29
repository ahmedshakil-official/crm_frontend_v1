import { Container, Row } from "reactstrap";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import QuickActions from "./QuickActions/QuickActions";
import RecentSystemActivity from "./RecentSystemActivity/RecentSystemActivity";
import SystemAlerts from "./SystemAlerts/SystemAlerts";
import WeeklyActivity from "./WeeklyActivity/WeeklyActivity";
import ManageUser from "./ManageUser/MangageUser";

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
      </Container>
    </>
  );
};

export default UserManagementContainer;
