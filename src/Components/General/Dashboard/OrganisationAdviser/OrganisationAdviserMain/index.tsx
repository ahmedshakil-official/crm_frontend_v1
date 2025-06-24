import { Col, Container, Row } from "reactstrap";
import OrganisationAdviserBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import CaseStatusOverview from "./CaseStatusOverview/CaseStatusOverview";
import MonthlyPerformance from "./MonthlyPerformance/MonthlyPerformance";
import MyClients from "./MyClients/MyClients";
import UpcomingTasks from "./UpcommingTasks/UpCommingTasks";
import DocumentStatus from "./DocumentStatus/DocumentStatus";

const OrganisationAdviserContainer: React.FC = () => {
  return (
    <>
      <OrganisationAdviserBreadcrumbs
        mainTitle="Organisation Adviser Dashboard"
        title="Hello! there"
        activePage="Adviser"
      />
      <Container fluid>
        {/* 1st row  */}
        <Row>
          <DashboardOverview />
        </Row>
        {/* 2nd row  */}
        <Row>
          <Col md={6} sm={12}>
            <MonthlyPerformance />
          </Col>
          <Col md={6} sm={12}>
            <CaseStatusOverview />
          </Col>
        </Row>
        {/* 3rd row  */}
        <Row>
          <Col md={6} sm={12}>
            <MyClients />
          </Col>
          <Col md={6} sm={12}>
            <UpcomingTasks />
          </Col>
        </Row>
        {/* 4th row  */}
        <Row>
          <DocumentStatus />
        </Row>
      </Container>
    </>
  );
};

export default OrganisationAdviserContainer;
