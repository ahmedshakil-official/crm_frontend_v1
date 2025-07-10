import { Col, Container, Row } from "reactstrap";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import OrganisationStaffBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import DocumentsWorkflow from "./DocumentsWorkflow/DocumentsWorkflow";
import CaseStatusOverview from "../../OrganisationAdviser/OrganisationAdviserMain/CaseStatusOverview/CaseStatusOverview";
import CaseProgress from "./CaseProgress/CaseProgress";
import MyClients from "../../OrganisationAdviser/OrganisationAdviserMain/MyClients/MyClients";
import Reminders from "./RemindersAndAlerts/RemindersAndAlerts";
import PendingDocuments from "./PendingDocuments/PendingDocuments";
import PendingVerifications from "./PendingDocuments/PendingDocuments";
import AdviserTaskOverview from "./AdviserTaskOverview/AdviserTaskOverview";

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
