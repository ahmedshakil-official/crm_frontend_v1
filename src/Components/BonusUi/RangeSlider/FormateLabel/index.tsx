import { Card, CardBody, Col } from "reactstrap";
import { FormattedLabels } from "@/Constant";
import FormateLabelForm from "./FormateLabelForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicSliderData } from "@/Data/BonusUi/RangSlider";

const FormateLabel = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={FormattedLabels} span={BasicSliderData} />
        <CardBody>
          <FormateLabelForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FormateLabel;
