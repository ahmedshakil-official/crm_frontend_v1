import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { AvatarPingTitle, ImagePath } from "@/Constant";
import { AvatarPingData, AvatarPingSubTitle } from "@/Data/Uikits/Avatars";
import { Card, CardBody, Col } from "reactstrap";

export const AvatarPing = () => {
  return (
    <Col xl="4" sm="6">
      <Card>
        <CommonCardHeader title={AvatarPingTitle} span={AvatarPingSubTitle} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            {AvatarPingData &&
              AvatarPingData.map((item) => (
                <div className="avatar" key={item.id}>
                  <RatioImage className={`img-${item.class} rounded-circle`} src={`${ImagePath}/${item.src}`} alt="avatar" />
                  <div className={`ping status-${item.status} status`} />
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
