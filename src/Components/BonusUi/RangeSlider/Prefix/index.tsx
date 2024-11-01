import { Card, CardBody, Col } from "reactstrap";
import { Prefixes } from "@/Constant";
import PrefixForm from "./PrefixForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicSliderData } from "@/Data/BonusUi/RangSlider";

const Prefix = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={Prefixes} span={BasicSliderData} />
        <CardBody className="mt-3 mb-3">
          <PrefixForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Prefix;
