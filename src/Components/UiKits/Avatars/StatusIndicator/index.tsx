import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath, StatusIndicatorTitle } from "@/Constant";
import { AvatarStatusData, StatusSubTitle } from "@/Data/Uikits/Avatars";
import { Card, CardBody, Col } from "reactstrap";

export const StatusIndicator = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <CommonCardHeader title={StatusIndicatorTitle} span={StatusSubTitle} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            {AvatarStatusData &&
              AvatarStatusData.map((item, index) => (
                <div className="avatar" key={index}>
                  <RatioImage className={`rounded-circle img-${item.class}`} src={`${ImagePath}/${item.image}`} alt="avatar" />
                  <div className={`status status-${item.status}`} />
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
