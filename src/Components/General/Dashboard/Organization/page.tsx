import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Dashboard, Organization, OrganizationTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import EarningsTrend from "./EarningsTrend/EarningsTrend";
import JobToday from "./JobToday/JobToday";
import ListOfEmployee from "./ListOfEmployee/ListOfEmployee";
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
          <ListOfEmployee />
        </Row>
      </Container>
    </>
  );
};

export default MyOrganizationContainer;
