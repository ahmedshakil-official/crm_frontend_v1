import { Container, Row } from "reactstrap";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import CaseAdviserActivityTrends from "./CaseAdviserActivityTrends/CaseAdviserActivityTrends";
import SystemReportsAnalytics from "./SystemReportsAnalytics/SystemReportsAnalytics";

const SystemReportsContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <Container fluid>
        <SystemReportsAnalytics />
        <Row>
          <CaseAdviserActivityTrends />
        </Row>
      </Container>
    </>
  );
};

export default SystemReportsContainer;
