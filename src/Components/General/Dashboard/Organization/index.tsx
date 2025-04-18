import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Dashboard, Organization, OrganizationTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import CaseStatus from "./CaseStatus/CaseStatus";
import AdvisorList from "./Directors/AdvisorList/AdvisorList";
import ClientList from "./Directors/ClientList/ClientList";
import IntroducerList from "./Directors/IntroducerList/IntroducerList";
import LeadList from "./Directors/LeadList/LeadList";
import EarningsTrend from "./EarningsTrend/EarningsTrend";
import JobToday from "./JobToday/JobToday";
import ProfileGreet from "./ProfileGreet/ProfileGreet";

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
      </Container>
    </>
  );
};

export default MyOrganizationContainer;
