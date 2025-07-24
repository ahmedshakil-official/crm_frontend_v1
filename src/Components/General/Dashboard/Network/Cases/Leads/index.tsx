import { Container } from "reactstrap";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs/Breadcrumbs";
import Leads from "../../../CommonComponents/Directors/Leads/Leads";

const NetworkLeadsContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs
        title="Lead List"
        subTitle="Welcome to the Lead List"
        parent="Cases"
        child="Leads"
      />
      <Container fluid>
        <Leads />
      </Container>
    </>
  );
};

export default NetworkLeadsContainer;
