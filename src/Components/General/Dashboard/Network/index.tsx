import { Container } from "reactstrap";
import NetworkBreadcrumbs from "./NetworkBreadcrumbs/Breadcrumbs";
import OrganizationCards from "./Organizations/OrganizationCards/OrganizationCards";
import PerformanceOverview from "./PerformanceOverview/PerformanceOverview";

const ContainerNetwork = () => {
  return (
    <>
      <NetworkBreadcrumbs />
      <Container fluid>
        <PerformanceOverview />
        <OrganizationCards />
      </Container>
    </>
  );
};

export default ContainerNetwork;
