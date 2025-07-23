import Leads from "@/Components/General/Dashboard/CommonComponents/Directors/Leads/Leads";
import { Container } from "reactstrap";
import OrganisationAdviserBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrganisationAdviserLeadsContainer: React.FC = () => {
  return (
    <>
      <OrganisationAdviserBreadcrumbs
        mainTitle="Organisation Adviser Leads"
        title="All Leads in Organisation"
        parent="Cases"
        activePage="Leads"
      />
      <Container fluid>
        <Leads />
      </Container>
    </>
  );
};

export default OrganisationAdviserLeadsContainer;
