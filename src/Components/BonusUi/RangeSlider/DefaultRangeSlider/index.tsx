import { Card, CardBody, Col } from "reactstrap";
import { DefaultRangeSliders } from "@/Constant";
import  DefaultRangeSliderForm  from "./DefaultRangeSliderForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicSliderData } from "@/Data/BonusUi/RangSlider";

const DefaultRangeSlider = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={DefaultRangeSliders} span={BasicSliderData} />
        <CardBody>
          <DefaultRangeSliderForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultRangeSlider;
