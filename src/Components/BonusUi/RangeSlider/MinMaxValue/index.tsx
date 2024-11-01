import { Card, CardBody, Col } from "reactstrap";
import { MinMaxValues } from "@/Constant";
import MinMaxValueForm from "./MinMaxValueForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicSliderData } from "@/Data/BonusUi/RangSlider";

const MinMaxValue = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={MinMaxValues} span={BasicSliderData} />
        <CardBody>
          <MinMaxValueForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MinMaxValue;
