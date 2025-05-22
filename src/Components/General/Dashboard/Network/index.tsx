import { Container, Row } from "reactstrap";
import Charts from "./Charts/Charts";
import NetworkBreadcrumbs from "./NetworkBreadcrumbs/Breadcrumbs";
import NetworkPerformance from "./NetworkPerformance/NetworkPerformance";
import OrganizationCards from "./Organizations/OrganizationCards/OrganizationCards";
import PerformanceOverview from "./PerformanceOverview/PerformanceOverview";
import ProductPenetration from "./ProductPenetration/ProductPenetration";
import RecentActivity from "./RecentActivity/RecentActivity";

const ContainerNetwork = () => {
  return (
    <>
      <NetworkBreadcrumbs />
      <Container fluid>
        <PerformanceOverview />
        <Charts />
        <NetworkPerformance />
        <OrganizationCards />
        <Row>
          <ProductPenetration />
          <RecentActivity />
        </Row>
      </Container>
    </>
  );
};

export default ContainerNetwork;
