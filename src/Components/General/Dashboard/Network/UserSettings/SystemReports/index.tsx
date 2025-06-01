import { Container, Row } from "reactstrap";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import CaseAdviserActivityTrends from "./CaseAdviserActivityTrends/CaseAdviserActivityTrends";
import ComplianceStatusDistribution from "./ComplianceStatusDistribution/ComplianceStatusDistribution";
import KeyPerformanceMetrics from "./KeyPerformanceMetrics/KeyPerformanceMetrics";
import SystemReportsAnalytics from "./SystemReportsAnalytics/SystemReportsAnalytics";

const SystemReportsContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
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
