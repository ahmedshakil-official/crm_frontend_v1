import { Container, Row } from "reactstrap";
import OrganisationBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import DashboardOverview from "./DashboardOverview/DashboardOverview";

const OrganisationContainer = () => {
  return (
    <>
      <OrganisationBreadcrumbs
        mainTitle="Organisation Dashboard"
        title="Hello there! Welcome back"
        activePage="Organisation"
      />
      <Container fluid>
        <Row>
          <DashboardOverview />
        </Row>
      </Container>
    </>
  );
};

export default OrganisationContainer;
