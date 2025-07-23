import { Container } from "reactstrap";
import OrganisationBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrganisationSupportStaffContainer: React.FC = () => {
  return (
    <>
      <OrganisationBreadcrumbs
        mainTitle="Support Staff"
        title="Support Staff Management"
        parent="Directors"
        activePage="Support Staff"
      />
      <Container fluid>
        <h1 className="text-danger text-center">Under Development</h1>
      </Container>
    </>
  );
};

export default OrganisationSupportStaffContainer;
