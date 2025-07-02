import { Col, Row } from "reactstrap";
import CampaignHistory from "./CampaignHistory/CampaignHistory";
import ComposeWhatsAppMessage from "./ComposeWhatsAppMessage/ComposeWhatsAppMessage";
import MessageTemplates from "./MessageTemplates/MessageTemplates";

const WhatsAppTab: React.FC = () => {
  return (
    <>
      <Row>
        <Col md={6}>
          <ComposeWhatsAppMessage />
        </Col>
        <Col md={6}>
          <MessageTemplates />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <CampaignHistory />
        </Col>
      </Row>
    </>
  );
};

export default WhatsAppTab;
