import { Container, Row } from "reactstrap";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import CaseAdviserActivityTrends from "./CaseAdviserActivityTrends/CaseAdviserActivityTrends";
import SystemReportsAnalytics from "./SystemReportsAnalytics/SystemReportsAnalytics";
import ComplianceStatusDistribution from "./ComplianceStatusDistribution/ComplianceStatusDistribution";

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
      </Container>
    </>
  );
};

export default SystemReportsContainer;
