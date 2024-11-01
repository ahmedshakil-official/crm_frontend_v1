import SwiperSlideCommon from "@/Components/General/Common/SwiperSlideCommon/SwiperSlideCommon";
import { SwiperSlideCommon1Data, SwiperSlideCommon2Data } from "@/Data/General/Dashboard/Ecommerce/EcommerceData";
import { Card, CardBody, Col } from "reactstrap";

const SwiperSlide = () => {
  return (
    <>
      <Col xxl="3" xl="4" sm="6" className="box-col-6">
        <Card>
          <CardBody>
            <SwiperSlideCommon sliderData={SwiperSlideCommon1Data}/>
          </CardBody>
        </Card>
      </Col>
      <Col xxl="3" xl="4" sm="6" className="box-col-6">
        <Card>
          <CardBody>
            <SwiperSlideCommon sliderData={SwiperSlideCommon2Data}/>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default SwiperSlide;
