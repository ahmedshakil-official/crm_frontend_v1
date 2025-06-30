import { Container } from "reactstrap";
import OrganisationAdviserBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import MarketingHubOverview from "./MarketingHubOverview/MarketingHubOverview";
import PlatformConnections from "./PlatformConnections/PlatformConnections";

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
        <PlatformConnections />
      </Container>
    </>
  );
};

export default OrganisationAdviserMarketingHubContainer;
