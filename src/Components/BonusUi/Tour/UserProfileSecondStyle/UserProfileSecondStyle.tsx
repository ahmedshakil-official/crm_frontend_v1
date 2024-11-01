import { Card, Col, Row } from "reactstrap";
import { CommonTourFooter } from "../Common/CommonTourFooter";
import CommonTourHeader from "../Common/CommonTourHeader";
import CommonTourSocialMedia from "../Common/CommonTourSocialMedia";
import { SecondStyleAboutSection } from "./SecondStyleAboutSection";

const UserProfileSecondStyle = () => {
  return (
    <Col sm="12" className="step5">
      <Card>
        <div className="profile-img-style">
          <Row className="g-2">
            <CommonTourHeader date="25 Jan" time="6 min read" />
            <Col sm="4" className="colalign-self-center mt-0 text-end">
              <CommonTourSocialMedia time="3 min ago" className="step6" />
            </Col>
          </Row>
          <hr />
          <SecondStyleAboutSection />
          <CommonTourFooter />
        </div>
      </Card>
    </Col>
  );
};

export default UserProfileSecondStyle;
