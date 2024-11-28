import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Dashboard, Organization, OrganizationTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import ActivityStatus from "./ActivityStatus/ActivityStatus";
import AdvisorList from "./AdvisorList/AdvisorList";
import ClientList from "./ClientList/ClientList";
import EarningsTrend from "./EarningsTrend/EarningsTrend";
import IntroducerList from "./IntroducerList/IntroducerList";
import JobToday from "./JobToday/JobToday";
import LeadList from "./LeadList/LeadList";
import ProfileGreet from "./ProfileGreet/ProfileGreet";
import { useSession } from "next-auth/react";

const MyOrganizationContainer = () => {
  
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
          <ActivityStatus />
        </Row>
        <Row>
          <AdvisorList />
        </Row>
        <Row>
          <LeadList />
        </Row>
        <Row>
          <IntroducerList />
        </Row>
        <Row>
          <ClientList />
        </Row>
      </Container>
    </>
  );
};

export default MyOrganizationContainer;
