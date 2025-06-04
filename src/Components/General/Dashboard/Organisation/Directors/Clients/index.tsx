import { Container } from "reactstrap";
import Clients from "../../../CommonComponents/Directors/Clients/Clients";
import OrganisationBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrganisationClientsContainer: React.FC = () => {
  return (
    <>
      <OrganisationBreadcrumbs
        mainTitle="Organization Clients"
        title="Hello there!"
        parent="Directors"
        activePage="Clients"
      />
      <Container fluid>
        <Clients />
      </Container>
    </>
  );
};

export default OrganisationClientsContainer;
