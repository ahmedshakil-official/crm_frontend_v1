import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Dashboard, Organization, OrganizationTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import EarningsTrend from "./EarningsTrend/EarningsTrend";
import EmployeeList from "./EmployeeList/EmployeeList";
import IntroducerList from "./IntroducerList/IntroducerList";
import JobToday from "./JobToday/JobToday";
import LeadList from "./LeadList/LeadList";
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
          <EmployeeList />
          <LeadList />
          <IntroducerList />
        </Row>
      </Container>
    </>
  );
};

export default MyOrganizationContainer;
