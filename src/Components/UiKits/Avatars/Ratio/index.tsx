import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath, RatioTitle } from "@/Constant";
import { AvatarRatioData, RatioSubTitle } from "@/Data/Uikits/Avatars";
import { Card, CardBody, Col } from "reactstrap";

export const Ratio = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={RatioTitle} span={RatioSubTitle} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            {AvatarRatioData &&
              AvatarRatioData.map((item, index) => (
                <div className="avatar ratio" key={index}>
                  <RatioImage className={`b-r-8 img-${item.class}`} src={`${ImagePath}/${item.image}`} alt="avatar" />
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
