import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath, MouseOverTitle } from "@/Constant";
import { AutoPlayData } from "@/Data/BonusUi/ReactstrapCarousel";
import { Card, CardBody, Col } from "reactstrap";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MouseWheelVariant = () => {
  return (
    <Col xl="6" xs="12">
      <Card className="auto-slider">
        <CommonCardHeader title={MouseOverTitle} span={AutoPlayData} />
        <CardBody>
          <Swiper pagination={{ clickable: true }} modules={[Pagination]} slidesPerView={3} spaceBetween={10} className="mouseSwiper">
            <div className="swiper-wrapper">
              {[...Array(11)].map((_, index) => (
                <SwiperSlide key={index}>
                  <RatioImage src={`${ImagePath}/slider/${index+1}.jpg`} alt="Drawing-room" />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MouseWheelVariant;
