import { Container } from "reactstrap";
import NetworkBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import AuditLogsAndActivityTracking from "./AuditLogsAndActivityTracking/AuditLogsAndActivityTracking";

const AuditLogContainer: React.FC = () => {
  return (
    <>
      <NetworkBreadcrumbs
        mainTitle="Network Audit Log"
        title="Hello there!"
        parent="Reports & Tasks"
        activePage="Audit Log"
      />
      <Container fluid>
        <AuditLogsAndActivityTracking />
      </Container>
    </>
  );
};

export default AuditLogContainer;
