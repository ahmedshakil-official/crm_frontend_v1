import { Container } from "reactstrap";
import OrganisationAdviserBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import MarketingHubOverview from "./MarketingHubOverview/MarketingHubOverview";
import PlatformConnections from "./PlatformConnections/PlatformConnections";
import QuickGlanceTabs from "./QuickGlance/QuickGlanceTabs";

const OrganisationAdviserMarketingHubContainer: React.FC = () => {
  return (
    <>
      <OrganisationAdviserBreadcrumbs
        mainTitle="Marketing Hub"
        title="Manage your social media and WhatsApp campaigns"
        parent="Users"
        activePage="Marketing Hub"
      />
      <Container fluid>
        <MarketingHubOverview />
        <PlatformConnections />
        <QuickGlanceTabs />
      </Container>
    </>
  );
};

export default OrganisationAdviserMarketingHubContainer;
