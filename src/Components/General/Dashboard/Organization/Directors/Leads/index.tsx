import Leads from "@/Components/General/Dashboard/CommonComponents/Directors/Leads/Leads";
import { Container } from "reactstrap";
import OrganizationBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrganizationLeadsContainer: React.FC = () => {
  return (
    <>
      <OrganizationBreadcrumbs
        mainTitle="Organization Leads"
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

export default OrganizationLeadsContainer;
