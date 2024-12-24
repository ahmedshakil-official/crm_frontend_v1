import { Container, Row } from "reactstrap";
import NetworkBreadcrumbs from "./components/Breadcrumbs";
import OrganizationCards from "./components/Organizations/OrganizationCards";


const ContainerNetwork = () => {
  return (
    <>
      <NetworkBreadcrumbs />
      <Container fluid className="default-dashboard">
        <Row>
          <OrganizationCards />
        </Row>
      </Container>
    </>
  );
};

export default ContainerNetwork;
