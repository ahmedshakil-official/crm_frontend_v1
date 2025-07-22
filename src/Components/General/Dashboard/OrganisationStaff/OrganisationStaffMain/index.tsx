import { Col, Container, Row } from "reactstrap";
import OrganisationStaffBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import AdviserTaskOverview from "./AdviserTaskOverview/AdviserTaskOverview";
import CaseProgress from "./CaseProgress/CaseProgress";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import DocumentsWorkflow from "./DocumentsWorkflow/DocumentsWorkflow";
import PendingVerifications from "./PendingDocuments/PendingDocuments";
import Reminders from "./RemindersAndAlerts/RemindersAndAlerts";

const OrganisationStaffContainer: React.FC = () => {
  return (
    <>
      <OrganisationStaffBreadcrumbs
        mainTitle="Organisation Admin & Support Staff Dashboard"
        title="Welcome to your dashboard"
        activePage="Admin & Support Staff"
      />
      <Container fluid>
        {/* 1st row  */}
        <DashboardOverview />
        {/* 2nd row  */}
        <Row>
          <Col md={6} sm={12}>
            <DocumentsWorkflow />
          </Col>
          <Col md={6} sm={12}>
            <CaseProgress />
          </Col>
        </Row>
        {/* 3rd row  */}
        <Row>
          <Col md={6} sm={12}>
            <PendingVerifications />
          </Col>
          <Col md={6} sm={12}>
            <Reminders />
          </Col>
        </Row>
        {/* 4th row  */}
        <Row>
          <Col>
            <AdviserTaskOverview />{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrganisationStaffContainer;
