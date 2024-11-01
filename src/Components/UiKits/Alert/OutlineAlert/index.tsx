import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { OutlineAlertTitle } from "@/Constant";
import { OutlineAlertSubTitle } from "@/Data/Uikits/Alert";
import { Card, CardBody, Col } from "reactstrap";
import { ClockAlert } from "./ClockAlert";
import { ThumbsAlert } from "./ThumbsAlert";

export const OutlineAlert = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={OutlineAlertTitle} span={OutlineAlertSubTitle} />
        <CardBody>
          <ClockAlert />
          <ThumbsAlert />
        </CardBody>
      </Card>
    </Col>
  );
};
