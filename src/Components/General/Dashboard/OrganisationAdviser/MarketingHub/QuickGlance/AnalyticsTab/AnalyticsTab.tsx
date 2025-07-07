import { Col, Row } from "reactstrap";
import LeadConversionFunnel from "./LeadConversionFunnel/LeadConversionFunnel";
import MarketingAnalyticsOverview from "./MarketingAnalyticsOverview/MarketingAnalyticsOverview";
import SocialMediaPerformance from "./SocialMediaPerformance/SocialMediaPerformance";
import WhatsAppCampaignPerformance from "./WhatsAppCampaignPerformance/WhatsAppCampaignPerformance";
import CampaignROIDistribution from "./CampaignROIDistribution/CampaignROIDistribution";

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
      <Row>
        <Col md="6" sm="12">
          <LeadConversionFunnel />
        </Col>
        <Col md="6" sm="12">
          <CampaignROIDistribution />
        </Col>
      </Row>
    </>
  );
};

export default AnalyticsTab;
