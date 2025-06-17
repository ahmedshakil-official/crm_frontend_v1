import { Col, Container, Row } from "reactstrap";
import OrganisationBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import CaseCompletionOverTime from "./CaseCompletionOverTime/CaseCompletionOverTime";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import MonthlyRevenueTrend from "./MonthlyRevenueTrend/MonthlyRevenueTrend";
import ClientGrowth from "./ClientGrowth/ClientGrowth";
import ComplianceStatus from "./ComplianceStatus/ComplianceStatus";

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
          <Col md={6} sm={12}>
            <CaseCompletionOverTime />
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={12}>
            <ClientGrowth />
          </Col>
          <Col md={4} sm={12}>
            <ComplianceStatus />
          </Col>
          <Col md={4} sm={12}>
           
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrganisationContainer;
