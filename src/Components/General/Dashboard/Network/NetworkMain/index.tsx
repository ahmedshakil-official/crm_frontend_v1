import { Container, Row } from "reactstrap";
import NetworkBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import AdviserStatus from "./AdviserStatus/AdviserStatus";
import Charts from "./Charts/Charts";
import OrganisationCards from "./OrganisationCards/OrganisationCards";
import PerformanceOverview from "./PerformanceOverview/PerformanceOverview";
import RecentActivity from "./RecentActivity/RecentActivity";

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
        <OrganisationCards />
        <AdviserStatus />
        <Row>
          <RecentActivity />
        </Row>
      </Container>
    </>
  );
};

export default ContainerNetwork;
