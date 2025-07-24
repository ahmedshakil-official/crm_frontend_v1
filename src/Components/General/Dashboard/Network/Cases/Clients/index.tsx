import { Container } from "reactstrap";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs/Breadcrumbs";
import Clients from "../../../CommonComponents/Directors/Clients/Clients";

const ClientsContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs
        title="Client List"
        subTitle="Welcome to the Client List"
        parent="Cases"
        child="Clients"
      />
      <Container fluid>
        <Clients />
      </Container>
    </>
  );
};

export default ClientsContainer;
