import { Col, Container, Row } from "reactstrap";
import OrganisationBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import MonthlyRevenueTrend from "./MonthlyRevenueTrend/MonthlyRevenueTrend";

const OrganisationContainer = () => {
  return (
    <>
      <OrganisationBreadcrumbs
        mainTitle="Organisation Dashboard"
        title="Hello there! Welcome back"
        activePage="Organisation"
      />
      <Container fluid>
        <Row>
          <DashboardOverview />
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <MonthlyRevenueTrend />
          </Col>
          <Col md={6} sm={12}></Col>
        </Row>
      </Container>
    </>
  );
};

export default OrganisationContainer;
