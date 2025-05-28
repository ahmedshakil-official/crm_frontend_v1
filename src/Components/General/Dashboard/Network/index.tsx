import { Container, Row } from "reactstrap";
import Charts from "./NetworkMain/Charts/Charts";
import NetworkBreadcrumbs from "./NetworkMain/NetworkBreadcrumbs/Breadcrumbs";
import NetworkPerformance from "./NetworkMain/NetworkPerformance/NetworkPerformance";
import OrganizationCards from "./NetworkMain/Organizations/OrganizationCards";
import PerformanceOverview from "./NetworkMain/PerformanceOverview/PerformanceOverview";
import ProductPenetration from "./NetworkMain/ProductPenetration/ProductPenetration";
import RecentActivity from "./NetworkMain/RecentActivity/RecentActivity";
import TopPerformingBrokers from "./NetworkMain/TopPerformingBrokers/TopPerformingBrokers";

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
          <TopPerformingBrokers />
        </Row>
      </Container>
    </>
  );
};

export default ContainerNetwork;
