import { Container, Row } from "reactstrap";
import NetworkBreadcrumbs from "./Breadcrumbs/Breadcrumbs";
import Charts from "./Charts/Charts";
import NetworkPerformance from "./NetworkPerformance/NetworkPerformance";
import OrganizationCards from "./Organizations/OrganizationCards";
import PerformanceOverview from "./PerformanceOverview/PerformanceOverview";
import ProductPenetration from "./ProductPenetration/ProductPenetration";
import RecentActivity from "./RecentActivity/RecentActivity";
import TopPerformingBrokers from "./TopPerformingBrokers/TopPerformingBrokers";

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
