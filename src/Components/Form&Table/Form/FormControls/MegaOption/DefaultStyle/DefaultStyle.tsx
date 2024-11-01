import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DefaultStyleMegaOptions } from "@/Constant";
import { MegaOptionDefaultData } from "@/Data/Form&Table/Form/FormControls";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardFooter from "../Common/CommonCardFooter";
import DefaultStyleForm from "./DefaultStyleForm";

const DefaultStyle = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={DefaultStyleMegaOptions} span={MegaOptionDefaultData} />
        <CardBody className="megaoptions-border-space-sm">
          <DefaultStyleForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="primary" color2="light text-dark" />
      </Card>
    </Col>
  );
};

export default DefaultStyle;
