import { Container, Row } from "reactstrap";
import CaseStatus from "../Organization/CaseStatus/CaseStatus";
import AdvisorList from "../Organization/Directors/AdvisorList/AdvisorList";
import ClientList from "../Organization/Directors/ClientList/ClientList";
import IntroducerList from "../Organization/Directors/IntroducerList/IntroducerList";
import LeadList from "../Organization/Directors/LeadList/LeadList";
import NetworkBreadcrumbs from "./NetworkBreadcrumbs/Breadcrumbs";
import OrganizationCards from "./Organizations/OrganizationCards/OrganizationCards";

const ContainerNetwork = () => {
  return (
    <>
      <NetworkBreadcrumbs />
      <Container fluid className="default-dashboard">
        <Row>
          <OrganizationCards />
        </Row>
        {/* load Organization dashboard data  */}
        <Row>
          <CaseStatus />
        </Row>
        <Row>
          <LeadList />
        </Row>
        <Row>
          <ClientList />
        </Row>
        <Row>
          <AdvisorList />
        </Row>
        <Row>
          <IntroducerList />
        </Row>
        {/* load Organization dashboard data end */}
      </Container>
    </>
  );
};

export default ContainerNetwork;
