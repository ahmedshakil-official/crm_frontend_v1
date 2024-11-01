import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath, Sizes } from "@/Constant";
import { AvatarSizeData, SizesSubTitle } from "@/Data/Uikits/Avatars";
import { Card, CardBody, Col } from "reactstrap";

export const AvatarSizes = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <CommonCardHeader title={Sizes} span={SizesSubTitle} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            {AvatarSizeData &&
              AvatarSizeData.map((item, index) => (
                <div key={index} className="avatar">
                  <RatioImage className={`rounded-circle img-${item.class}`} src={`${ImagePath}/avtar/${item.image}`} alt="avatar" />
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
