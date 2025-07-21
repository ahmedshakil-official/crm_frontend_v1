import { Container, Row } from "reactstrap";
import NetworkBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Charts from "./Charts/Charts";
import NetworkPerformance from "./NetworkPerformance/NetworkPerformance";
import OrganisationCards from "./OrganisationCards/OrganisationCards";
import PerformanceOverview from "./PerformanceOverview/PerformanceOverview";
import ProductPenetration from "./ProductPenetration/ProductPenetration";
import RecentActivity from "./RecentActivity/RecentActivity";
import TopPerformingBrokers from "./TopPerformingBrokers/TopPerformingBrokers";

const ContainerNetwork = () => {
  return (
    <>
      <NetworkBreadcrumbs
        mainTitle="Network Dashboard"
        title="Hello there!"
        activePage="Network"
      />
      <Container fluid>
        <PerformanceOverview />
        <Charts />
        <NetworkPerformance />
        <OrganisationCards />
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
