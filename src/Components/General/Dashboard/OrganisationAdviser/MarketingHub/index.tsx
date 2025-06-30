import { Container } from "reactstrap";
import OrganisationAdviserBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import MarketingHubOverview from "./MarketingHubOverview/MarketingHubOverview";

const OrganisationAdviserMarketingHubContainer: React.FC = () => {
  return (
    <>
      <OrganisationAdviserBreadcrumbs
        mainTitle="Marketing Hub"
        title="Manage your social media and WhatsApp campaigns"
        activePage="Marketing Hub"
      />
      <Container fluid>
        <MarketingHubOverview />
      </Container>
    </>
  );
};

export default OrganisationAdviserMarketingHubContainer;
