import { Col, Row } from "reactstrap";
import ComposeWhatsAppMessage from "./ComposeWhatsAppMessage/ComposeWhatsAppMessage";
import MessageTemplates from "./MessageTemplates/MessageTemplates";

const WhatsAppTab: React.FC = () => {
  return (
    <Row>
      <Col md={6}>
        <ComposeWhatsAppMessage />
      </Col>
      <Col md={6}>
        <MessageTemplates />
      </Col>
    </Row>
  );
};

export default WhatsAppTab;
