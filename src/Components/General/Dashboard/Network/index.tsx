import { Container, Row } from "reactstrap";
import NetworkBreadcrumbs from "./components/Breadcrumbs";
import OrganizationCards from "./components/Organizations/OrganizationCards";
import { useState } from "react";
import ActivityStatus from "../Organization/ActivityStatus/ActivityStatus";
import LeadList from "../Organization/LeadList/LeadList";
import ClientList from "../Organization/ClientList/ClientList";
import AdvisorList from "../Organization/AdvisorList/AdvisorList";
import IntroducerList from "../Organization/IntroducerList/IntroducerList";



const ContainerNetwork = () => {
  const [isFetchedLead, setIsFetchedLead] = useState(false);
  return (
    <>
      <NetworkBreadcrumbs />
      <Container fluid className="default-dashboard">
        <Row>
          <OrganizationCards />
        </Row>
        <Row>
          <ActivityStatus isFetchedLead={isFetchedLead}  setIsFetchedLead={setIsFetchedLead}/>
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
      </Container>
    </>
  );
};

export default ContainerNetwork;
