import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DismissingDarkAlertTitle } from "@/Constant";
import { DismissAlertSubTitle } from "@/Data/Uikits/Alert";
import { useState } from "react";
import { Alert, Card, CardBody, Col } from "reactstrap";

export const DismissingDarkAlert = () => {
  const [active, setActive] = useState(true);
  const onDismiss = () => setActive(false);

  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={DismissingDarkAlertTitle} span={DismissAlertSubTitle} />
        <CardBody>
          <Alert color="secondary" isOpen={active} toggle={onDismiss} className="mb-0">
            <i className="fa-regular fa-heart" />
            <p className="mb-0">{"Check your update! You should check in on some of those fields below."}</p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};
