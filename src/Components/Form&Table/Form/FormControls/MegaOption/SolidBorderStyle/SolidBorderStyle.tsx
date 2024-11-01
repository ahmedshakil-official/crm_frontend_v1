import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SolidBorderStyles } from "@/Constant";
import { SolidBorderStyleData } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardFooter from "../Common/CommonCardFooter";
import SolidBorderStyleForm from "./SolidBorderStyleForm";

const SolidBorderStyle = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={SolidBorderStyles} span={SolidBorderStyleData} />
        <CardBody>
          <SolidBorderStyleForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="primary" color2="light text-dark" />
      </Card>
    </Col>
  );
};

export default SolidBorderStyle;
