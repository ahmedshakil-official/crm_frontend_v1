import { Container } from "reactstrap";
import Leads from "../../../CommonComponents/Directors/Leads/Leads";
import NetworkBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const NetworkLeadsContainer: React.FC = () => {
  return (
    <>
      <NetworkBreadcrumbs
        mainTitle="Network Leads"
        title="Hello there!"
        parent="Directors"
        activePage="Leads"
      />
      <Container fluid>
        <Leads />
      </Container>
    </>
  );
};

export default NetworkLeadsContainer;
