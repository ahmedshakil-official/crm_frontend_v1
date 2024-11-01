import { Col, Row } from "reactstrap";
import FaqFeaturesTutorial from "./FaqFeaturesTutorial";
import { FeaturedTutorials } from "@/Constant";

const FAQFeaturesTutorial = () => {
  return (
    <Col lg="12" className="featured-tutorial">
      <div className="header-faq">
        <h3 className="f-w-700 mb-0">{FeaturedTutorials}</h3>
      </div>
      <Row>
        <FaqFeaturesTutorial />
      </Row>
    </Col>
  );
};
export default FAQFeaturesTutorial;
