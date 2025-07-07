import { Col, Row } from "reactstrap";
import MarketingAnalyticsOverview from "./MarketingAnalyticsOverview/MarketingAnalyticsOverview";

const AnalyticsTab: React.FC = () => {
  return (
    <>
      <Row>
        <Col md="12">
          <MarketingAnalyticsOverview />
        </Col>
      </Row>
    </>
  );
};

export default AnalyticsTab;
