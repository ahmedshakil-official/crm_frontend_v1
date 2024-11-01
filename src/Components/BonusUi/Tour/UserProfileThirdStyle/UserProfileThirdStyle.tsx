import { Card, Col, Row } from "reactstrap";
import { CommonTourFooter } from "../Common/CommonTourFooter";
import CommonTourHeader from "../Common/CommonTourHeader";
import CommonTourSocialMedia from "../Common/CommonTourSocialMedia";
import { ThirdStyleAboutSection } from "./ThirdStyleAboutSection";

const UserProfileThirdStyle = () => {
  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <Row className="g-2">
            <CommonTourHeader date="25 Jan" time="1 min read" />
            <Col sm="4" className="align-self-center mt-0 text-end">
              <CommonTourSocialMedia time="10 Hours ago" className="step7" />
            </Col>
          </Row>
          <hr />
          <ThirdStyleAboutSection />
          <CommonTourFooter />
        </div>
      </Card>
    </Col>
  );
};

export default UserProfileThirdStyle;
