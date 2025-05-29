import { Container, Row } from "reactstrap";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import QuickActions from "./QuickActions/QuickActions";
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
      </Container>
    </>
  );
};

export default UserManagementContainer;
