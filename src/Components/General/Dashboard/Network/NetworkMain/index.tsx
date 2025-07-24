import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonComponents/Breadcrumbs/Breadcrumbs";
import AdviserStatus from "./AdviserStatus/AdviserStatus";
import Charts from "./Charts/Charts";
import OrganisationCards from "./OrganisationCards/OrganisationCards";
import PerformanceOverview from "./PerformanceOverview/PerformanceOverview";
import RecentActivity from "./RecentActivity/RecentActivity";

const ContainerNetwork = () => {
  return (
    <>
      <Breadcrumbs
        title="Dashboard"
        subTitle="Welcome to the Network Dashboard"
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
