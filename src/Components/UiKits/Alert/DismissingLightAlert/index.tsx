import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DismissingLightAlertTitle } from "@/Constant";
import { DismissAlertSubTitle } from "@/Data/Uikits/Alert";
import { useState } from "react";
import { Alert, Card, CardBody, Col } from "reactstrap";

export const DismissingLightAlert = () => {
  const [active, setActive] = useState(true);
  const onDismiss = () => setActive(false);

  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={DismissingLightAlertTitle} span={DismissAlertSubTitle} />
        <CardBody>
          <Alert color="warning" isOpen={active} toggle={onDismiss} className="mb-0">
            <i className="fa-regular fa-bell" />
            <p className="mb-0">{"Hidden content You should check in on some of those fields below."}</p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};
