import { Container, Row } from "reactstrap";
import NetworkBreadcrumbs from "./components/Breadcrumbs";

const ContainerNetwork = () => {
  return (
    <>
      <NetworkBreadcrumbs />
      <Container fluid className="default-dashboard">
        <Row>Network</Row>
      </Container>
    </>
  );
};

export default ContainerNetwork;
