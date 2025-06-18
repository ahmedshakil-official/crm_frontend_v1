import { Col, Container, Row } from "reactstrap";
import OrganisationBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import CaseCompletionOverTime from "./CaseCompletionOverTime/CaseCompletionOverTime";
import ClientGrowth from "./ClientGrowth/ClientGrowth";
import ComplianceStatus from "./ComplianceStatus/ComplianceStatus";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import MonthlyRevenueTrend from "./MonthlyRevenueTrend/MonthlyRevenueTrend";
import TopPerformingAdvisers from "./TopPerformingAdvisers/TopPerformingAdvisers";
import DocumentApprovalQueue from "./DocumentApprovalQueue/DocumentApprovalQueue";

const OrganisationContainer = () => {
  return (
    <>
      <OrganisationBreadcrumbs
        mainTitle="Organisation Dashboard"
        title="Hello there! Welcome back"
        activePage="Organisation"
      />
      <Container fluid>
        {/* 1st row  */}
        <Row>
          <DashboardOverview />
        </Row>
        {/* 2nd row  */}
        <Row>
          <Col md={6} sm={12}>
            <MonthlyRevenueTrend />
          </Col>
          <Col md={6} sm={12}>
            <CaseCompletionOverTime />
          </Col>
        </Row>
        {/* 3rd row  */}
        <Row>
          <Col md={4} sm={12}>
            <ClientGrowth />
          </Col>
          <Col md={4} sm={12}>
            <ComplianceStatus />
          </Col>
          <Col md={4} sm={12}>
            <TopPerformingAdvisers />
          </Col>
        </Row>
        {/* 4th row  */}
        <Row>
          <Col md={6} sm={12}>
            <DocumentApprovalQueue />
          </Col>
          <Col md={6} sm={12}>
            <TopPerformingAdvisers />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrganisationContainer;
