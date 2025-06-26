import { Container } from "reactstrap";
import OrganisationAdviserBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrganisationAdviserSupportStaffContainer: React.FC = () => {
  return (
    <>
      <OrganisationAdviserBreadcrumbs
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

export default OrganisationAdviserSupportStaffContainer;
