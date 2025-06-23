import { Container } from "reactstrap";
import OrganisationAdviserBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Clients from "../../../CommonComponents/Directors/Clients/Clients";

const OrganisationDirectorsClientsContainer: React.FC = () => {
  return (
    <>
      <OrganisationAdviserBreadcrumbs
        mainTitle="Clients"
        title="Hello! there"
        activePage="Adviser"
      />
      <Container fluid>
        <Clients/>
      </Container>
    </>
  );
};

export default OrganisationDirectorsClientsContainer;
