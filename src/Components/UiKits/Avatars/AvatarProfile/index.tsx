import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { AvatarProfileTitle, ImagePath } from "@/Constant";
import { AvatarProfileSubTitle } from "@/Data/Uikits/Avatars";
import { Card, CardBody, Col } from "reactstrap";

export const AvatarProfile = () => {
  return (
    <Col xl="4" sm="6">
      <Card className="custom-avatar-profile">
        <CommonCardHeader title={AvatarProfileTitle} span={AvatarProfileSubTitle} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="user-img">
              <RatioImage src={`${ImagePath}/profile.png`} alt="user" />
              <div className="setting-icon">
                <i className="iconly-Setting icli"/>
              </div>
            </div>
            <div className="avatar-intial img-60 bg-light-primary avatar-profile">
              <RatioImage src={`${ImagePath}/users/6.png`} alt="users" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
