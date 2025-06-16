import { Container, Row } from "reactstrap";
import Advisers from "../../CommonComponents/Directors/Advisers/Advisers";
import Clients from "../../CommonComponents/Directors/Clients/Clients";
import Introducers from "../../CommonComponents/Directors/Introducers/Introducers";
import Leads from "../../CommonComponents/Directors/Leads/Leads";
import OrganisationBreadcrumbs from "../Breadcrumbs/Breadcrumbs";

const OrganisationContainer = () => {
  return (
    <>
      <OrganisationBreadcrumbs
        mainTitle="Organisation"
        title="Hello there!"
        activePage="Dashboard"
      />
      <Container fluid>
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

export default OrganisationContainer;
