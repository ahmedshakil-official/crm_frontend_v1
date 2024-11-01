import { Card, CardBody, Col } from "reactstrap";
import { BelowLg } from "./BelowLg";
import { BelowMd } from "./BelowMd";
import { BelowXl } from "./BelowXl";
import { BelowXxl } from "./BelowXxl";
import { FullScreenBelowSm } from "./FullScreenBelowSm";
import { FullScreenOutline } from "./FullScreenOutline";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FullscreenModalTitle } from "@/Constant";
import { FullscreenModalSubTitle } from "@/Data/Uikits/Modal";

export const FullscreenModal = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader headClass="pb-0" title={FullscreenModalTitle} span={FullscreenModalSubTitle} />
        <CardBody className="badge-spacing">
          <FullScreenOutline />
          <FullScreenBelowSm />
          <BelowMd />
          <BelowLg />
          <BelowXl />
          <BelowXxl />
        </CardBody>
      </Card>
    </Col>
  );
};
