import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomModalsTitle } from "@/Constant";
import { CustomModalSubTitle } from "@/Data/Uikits/Modal";
import { Card, CardBody, Col, Row } from "reactstrap";
import { CustomModal1 } from "./CustomModal1";
import { CustomModal2 } from "./CustomModal2";
import { CustomModal3 } from "./CustomModal3";

export const CustomModals = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader headClass="pb-0" title={CustomModalsTitle} span={CustomModalSubTitle} />
        <CardBody>
          <Row className="g-3">
            <CustomModal1 />
            <CustomModal2 />
            <CustomModal3 />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
