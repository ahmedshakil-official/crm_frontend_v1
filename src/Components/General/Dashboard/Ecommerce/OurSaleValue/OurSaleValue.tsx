import OurSaleValueCommon from "@/Components/General/Common/OurSaleValueCommon/OurSaleValueCommon";
import { Col, Row } from "reactstrap";

const OurSaleValue = () => {
  return (
    <Col xxl="3" xl="4" md="5" className="box-col-4">
      <Row>
        <OurSaleValueCommon  />
      </Row>
    </Col>
  );
};

export default OurSaleValue;
