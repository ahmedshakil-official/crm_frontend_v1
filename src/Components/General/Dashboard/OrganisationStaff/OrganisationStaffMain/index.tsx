import { Container } from "reactstrap";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import OrganisationStaffBreadcrumbs from "../Breadcrumbs/Breadcrumbs";

const OrganisationStaffContainer: React.FC = () => {
  return (
    <>
      <OrganisationStaffBreadcrumbs
        mainTitle="Organisation Staff Dashboard"
        title="Hello! there"
        activePage="Staff"
      />
      <Container fluid>
        {/* 1st row  */}
        <DashboardOverview />
        {/* 2nd row  */}
        {/* <Row>
          <Col md={6} sm={12}>
            <MonthlyPerformance />
          </Col>
          <Col md={6} sm={12}>
            <CaseStatusOverview />
          </Col>
        </Row> */}
        {/* 3rd row  */}
        {/* <Row>
          <Col md={6} sm={12}>
            <MyClients />
          </Col>
          <Col md={6} sm={12}>
            <UpcomingTasks />
          </Col>
        </Row> */}
        {/* 4th row  */}
        {/* <Row>
          <DocumentStatus />
        </Row> */}
      </Container>
    </>
  );
};

export default OrganisationStaffContainer;