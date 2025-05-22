import { Container } from "reactstrap";
import Charts from "./Charts/Charts";
import NetworkBreadcrumbs from "./NetworkBreadcrumbs/Breadcrumbs";
import NetworkPerformance from "./NetworkPerformance/NetworkPerformance";
import OrganizationCards from "./Organizations/OrganizationCards/OrganizationCards";
import PerformanceOverview from "./PerformanceOverview/PerformanceOverview";

const ContainerNetwork = () => {
  return (
    <>
      <NetworkBreadcrumbs />
      <Container fluid>
        <PerformanceOverview />
        <Charts />
        <NetworkPerformance />
        <OrganizationCards />
      </Container>
    </>
  );
};

export default ContainerNetwork;
