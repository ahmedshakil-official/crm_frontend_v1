import { useState } from "react";
import { Container, Row } from "reactstrap";
import ActivityStatus from "../Organization/ActivityStatus/ActivityStatus";
import AdvisorList from "../Organization/AdvisorList/AdvisorList";
import ClientList from "../Organization/ClientList/ClientList";
import IntroducerList from "../Organization/IntroducerList/IntroducerList";
import LeadList from "../Organization/LeadList/LeadList";
import NetworkBreadcrumbs from "./Organizations/NetworkBreadcrumbs/Breadcrumbs";
import OrganizationCards from "./Organizations/OrganizationCards/OrganizationCards";


const ContainerNetwork = () => {
  const [isFetchedLead, setIsFetchedLead] = useState(false);
  return (
    <>
      <NetworkBreadcrumbs />
      <Container fluid className="default-dashboard">
        <Row>
          <OrganizationCards />
        </Row>
        {/* load Organization dashboard data  */}
        <Row>
          <ActivityStatus
            isFetchedLead={isFetchedLead}
            setIsFetchedLead={setIsFetchedLead}
          />
        </Row>
        <Row>
          <LeadList setIsFetchedLead={setIsFetchedLead} />
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
