import { Container } from "reactstrap";
import Clients from "../../../CommonComponents/Directors/Clients/Clients";
import OrganisationAdviserBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrganisationDirectorsClientsContainer: React.FC = () => {
  return (
    <>
      <OrganisationAdviserBreadcrumbs
        mainTitle="Clients"
        title="Hello! there"
        parent="Directors"
        activePage="Clients"
      />
      <Container fluid>
        <Clients />
      </Container>
    </>
  );
};

export default OrganisationDirectorsClientsContainer;
