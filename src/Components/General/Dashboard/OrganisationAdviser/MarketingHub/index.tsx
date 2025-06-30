import { Container } from "reactstrap";
import OrganisationAdviserBreadcrumbs from "../Breadcrumbs/Breadcrumbs";

const OrganisationAdviserMarketingHubContainer: React.FC = () => {
  return (
    <>
      <OrganisationAdviserBreadcrumbs
        mainTitle="Marketing Hub"
        title="Hello there!"
        activePage="Marketing Hub"
      />
      <Container fluid>
        <h1 className="text-danger text-center">Under Development</h1>
      </Container>
    </>
  );
};

export default OrganisationAdviserMarketingHubContainer;
