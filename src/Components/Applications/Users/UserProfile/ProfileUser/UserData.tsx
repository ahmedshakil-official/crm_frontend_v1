import { ImagePath } from "@/Constant";
import { Card, Col } from "reactstrap";
import FollowSection from "./FollowSection";
import { InfoSection } from "./InfoSection";
import UserSocialMedia from "./UserSocialMedia";
import Image from "next/image";

const UserData = () => {
  return (
    <Col sm="12">
      <Card className="hovercard text-center">
        <div className="cardheader"></div>
        <div className="user-image">
          <div className="avatar">
            <Image width={100} height={100} alt="" src={`${ImagePath}/user/7.jpg`} />
          </div>
          <div className="icon-wrapper">
            <i className="iconly-Edit icli"></i>
          </div>
        </div>
        <div className="info">
          <InfoSection />
          <hr/>
          <UserSocialMedia />
          <FollowSection />
        </div>
      </Card>
    </Col>
  )
};

export default UserData;
