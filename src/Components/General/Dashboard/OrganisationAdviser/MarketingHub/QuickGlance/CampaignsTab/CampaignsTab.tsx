import { Col, Row } from "reactstrap";
import LeadAdCampaigns from "./LeadAdCampaigns/LeadAdCampaigns";

const CampaignsTab: React.FC = () => {
  return (
    <Row>
      <Col md="12">
        <LeadAdCampaigns />
      </Col>
    </Row>
  );
};

export default CampaignsTab;
