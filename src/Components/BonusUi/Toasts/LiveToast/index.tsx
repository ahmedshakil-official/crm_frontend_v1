import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LiveToastTitle } from "@/Constant";
import { LiveToastSubTitle } from "@/Data/BonusUi/Toasts";
import { Card, CardBody, Col } from "reactstrap";
import { BottomLeftToast } from "./BottomLeftToast/BottomLeftToast";
import { BottomRightToast } from "./BottomRightToast/BottomRightToast";
import { TopLeftToast } from "./TopLeftToast/TopLeftToast";
import { TopRightToast } from "./TopRightToast/TopRightToast";

export const LiveToast = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={LiveToastTitle} span={LiveToastSubTitle} />
        <CardBody className="position-relative common-flex">
          <TopRightToast />
          <BottomRightToast />
          <TopLeftToast />
          <BottomLeftToast />
        </CardBody>
      </Card>
    </Col>
  );
};
