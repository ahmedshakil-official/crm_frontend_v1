import { Card, CardBody, Col } from "reactstrap";
import { NegativeValues } from "@/Constant";
import NegativeValueForm from "./NegativeValueForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicSliderData } from "@/Data/BonusUi/RangSlider";

const NegativeValue = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={NegativeValues} span={BasicSliderData} />
        <CardBody>
          <NegativeValueForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default NegativeValue;
