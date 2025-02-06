import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Dashboard, Organization, OrganizationTitle } from "@/Constant";
import { useState } from "react";
import { Container, Row } from "reactstrap";
import AdvisorList from "./AdvisorList/AdvisorList";
import CaseStatus from "./CaseStatus/CaseStatus";
import ClientList from "./ClientList/ClientList";
import EarningsTrend from "./EarningsTrend/EarningsTrend";
import IntroducerList from "./IntroducerList/IntroducerList";
import JobToday from "./JobToday/JobToday";
import LeadList from "./LeadList/LeadList";
import ProfileGreet from "./ProfileGreet/ProfileGreet";

const MyOrganizationContainer = () => {
  const [isFetchedLead, setIsFetchedLead] = useState(false);
  return (
    <>
      <Breadcrumbs
        mainTitle={Organization}
        parent={Dashboard}
        title={OrganizationTitle}
      />
      <Container fluid className="default-dashboard">
        <Row>
          <ProfileGreet />
          <EarningsTrend />
          <JobToday />
        </Row>
        <Row>
          <CaseStatus
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
      </Container>
    </>
  );
};

export default MyOrganizationContainer;
