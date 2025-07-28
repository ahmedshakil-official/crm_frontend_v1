import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonComponents/Breadcrumbs/Breadcrumbs";
import CaseCompletionOverTime from "./CaseCompletionOverTime/CaseCompletionOverTime";
import ClientGrowth from "./ClientGrowth/ClientGrowth";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import DocumentApprovalQueue from "./DocumentApprovalQueue/DocumentApprovalQueue";
import MonthlyRevenueTrend from "./MonthlyRevenueTrend/MonthlyRevenueTrend";
import RecentAuditLogs from "./RecentAuditLogs/RecentAuditLogs";
import TopPerformingAdvisers from "./TopPerformingAdvisers/TopPerformingAdvisers";

const OrganisationContainer = () => {
  return (
    <>
      <Breadcrumbs title="Dashboard" subTitle="Hello there! Welcome back" />
      <Container fluid>
        {/* 1st row  */}
        <DashboardOverview />
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
          <Col md={6} sm={12}>
            <ClientGrowth />
          </Col>
          <Col md={6} sm={12}>
            <TopPerformingAdvisers />
          </Col>
        </Row>
        {/* 4th row  */}
        <Row>
          <Col md={6} sm={12}>
            <DocumentApprovalQueue />
          </Col>
          <Col md={6} sm={12}>
            <RecentAuditLogs />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrganisationContainer;
