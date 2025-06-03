import { Container } from "reactstrap";
import Clients from "../../../CommonComponents/Directors/Clients/Clients";
import NetworkBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const ClientsContainer: React.FC = () => {
  return (
    <>
      <NetworkBreadcrumbs
        mainTitle="Network Clients"
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

export default ClientsContainer;
