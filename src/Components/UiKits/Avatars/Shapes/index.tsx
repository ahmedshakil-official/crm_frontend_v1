import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath, ShapesTitle } from "@/Constant";
import { AvatarShapeData, ShapesSubTitle } from "@/Data/Uikits/Avatars";
import { Card, CardBody, Col } from "reactstrap";

export const Shapes = () => {
  return (
    <Col xl="4">
      <Card>
        <CommonCardHeader title={ShapesTitle} span={ShapesSubTitle} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            {AvatarShapeData &&
              AvatarShapeData.map((item, index) => (
                <div key={index} className="avatar">
                  <RatioImage className={`img-${item.class}`} src={`${ImagePath}/avtar/${item.image}`} alt="avatar" />
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
