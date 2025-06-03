import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Dashboard, Organization, OrganizationTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import Advisers from "../CommonComponents/Directors/Advisers/Advisers";
import Clients from "../CommonComponents/Directors/Clients/Clients";
import Introducers from "../CommonComponents/Directors/Introducers/Introducers";
import Leads from "../CommonComponents/Directors/Leads/Leads";
import CaseStatus from "./CaseStatus/CaseStatus";
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
          <Leads leadsPerPage={5} />
        </Row>
        <Row>
          <Clients clientsPerPage={5} />
        </Row>
        <Row>
          <Advisers advisersPerPage={5} />
        </Row>
        <Row>
          <Introducers introducersPerPage={5} />
        </Row>
      </Container>
    </>
  );
};

export default MyOrganizationContainer;
