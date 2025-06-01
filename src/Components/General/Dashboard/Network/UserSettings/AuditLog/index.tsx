import { Container } from "reactstrap";
import AuditLogsAndActivityTracking from "./AuditLogsAndActivityTracking/AuditLogsAndActivityTracking";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

const AuditLogContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <Container fluid>
        <AuditLogsAndActivityTracking />
      </Container>
    </>
  );
};

export default AuditLogContainer;
