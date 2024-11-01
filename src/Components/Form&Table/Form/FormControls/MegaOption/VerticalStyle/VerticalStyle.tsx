import { Card, CardBody, Col } from "reactstrap";
import CommonCardFooter from "../Common/CommonCardFooter";
import { VerticalStyles } from "@/Constant";
import VerticalStyleForm from "./VerticalStyleForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { VerticalStyleData } from "@/Data/Form&Table/Form/FormControls";

const VerticalStyle = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-12">
      <Card className="height-equal">
        <CommonCardHeader title={VerticalStyles} span={VerticalStyleData} />
        <CardBody className="mb-5">
          <VerticalStyleForm />
        </CardBody> 
        <CommonCardFooter footerClass="text-end" color1="primary" color2="light text-dark" />
      </Card> 
    </Col>
  )
};

export default VerticalStyle;
