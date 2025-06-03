import { Container, Row } from "reactstrap";
import NetworkBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import CaseAdviserActivityTrends from "./CaseAdviserActivityTrends/CaseAdviserActivityTrends";
import ComplianceStatusDistribution from "./ComplianceStatusDistribution/ComplianceStatusDistribution";
import KeyPerformanceMetrics from "./KeyPerformanceMetrics/KeyPerformanceMetrics";
import SystemReportsAnalytics from "./SystemReportsAnalytics/SystemReportsAnalytics";

const SystemReportsContainer: React.FC = () => {
  return (
    <>
      <NetworkBreadcrumbs
        mainTitle="Network System Reports"
        title="Hello there!"
        parent="User Settings"
        activePage="System Reports"
      />
      <Container fluid>
        <SystemReportsAnalytics />
        <Row>
          <CaseAdviserActivityTrends />
          <ComplianceStatusDistribution />
        </Row>
        <KeyPerformanceMetrics />
      </Container>
    </>
  );
};

export default SystemReportsContainer;
