import { Container, Row } from "reactstrap";
import NetworkBreadcrumbs from "./NetworkBreadcrumbs/Breadcrumbs";
import OrganizationCards from "./Organizations/OrganizationCards/OrganizationCards";

const ContainerNetwork = () => {
  return (
    <>
      <NetworkBreadcrumbs />
      <Container fluid>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row>
          <OrganizationCards />
        </Row>
      </Container>
    </>
  );
};

export default ContainerNetwork;
