import { Col, Row } from "reactstrap";
import MarketingAnalyticsOverview from "./MarketingAnalyticsOverview/MarketingAnalyticsOverview";
import SocialMediaPerformance from "./SocialMediaPerformance/SocialMediaPerformance";
import WhatsAppCampaignPerformance from "./WhatsAppCampaignPerformance/WhatsAppCampaignPerformance";

const AnalyticsTab: React.FC = () => {
  return (
    <>
      <Row>
        <Col md="12">
          <MarketingAnalyticsOverview />
        </Col>
      </Row>
      <Row>
        <Col md="6" sm="12">
          <SocialMediaPerformance />
        </Col>
        <Col md="6" sm="12">
          <WhatsAppCampaignPerformance />
        </Col>
      </Row>
    </>
  );
};

export default AnalyticsTab;
