import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath, ImageSizeTitle } from "@/Constant";
import { ImageData, ImageSubTitle } from "@/Data/Uikits/HelperClasses";
import { Card, CardBody, Col } from "reactstrap";

export const ImageSize = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={ImageSizeTitle} span={ImageSubTitle} />
        <CardBody>
          <div className="gradient-border gap-md-3 gap-2">{ImageData && ImageData.map((item, index) => <RatioImage className={`img-${item} img-h-${item}`} src={`${ImagePath}/avatars/1.jpg`} alt="img-size-50" key={index} />)}</div>
        </CardBody>
      </Card>
    </Col>
  );
};
