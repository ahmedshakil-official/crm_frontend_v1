import { Container } from "reactstrap";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import SystemReportsAnalytics from "./SystemReportsAnalytics/SystemReportsAnalytics";

const SystemReportsContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <Container fluid>
        <SystemReportsAnalytics />
      </Container>
    </>
  );
};

export default SystemReportsContainer;
