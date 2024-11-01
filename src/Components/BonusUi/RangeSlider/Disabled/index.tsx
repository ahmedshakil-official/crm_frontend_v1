import { Card, CardBody, Col } from "reactstrap";
import { Disable } from "@/Constant";
import DisabledForm from "./DisabledForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicSliderData } from "@/Data/BonusUi/RangSlider";

const Disabled = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={Disable} span={BasicSliderData} />
        <CardBody>
          <DisabledForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Disabled;
