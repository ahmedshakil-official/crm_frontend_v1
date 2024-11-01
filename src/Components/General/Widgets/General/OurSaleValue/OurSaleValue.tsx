import OurSaleValueCommon from "@/Components/General/Common/OurSaleValueCommon/OurSaleValueCommon";
import { Col, Row } from "reactstrap";

const OurSaleValue = () => {
  return (
    <Col xl="3" sm="6" className="box-col-6">
      <Row>
        <OurSaleValueCommon />
      </Row>
    </Col>
  );
};

export default OurSaleValue;
