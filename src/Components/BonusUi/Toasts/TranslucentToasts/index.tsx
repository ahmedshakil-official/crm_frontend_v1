import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { TranslucentToastsTitle } from "@/Constant";
import { TranslucentToastSubTitle, TranslucentToastsData } from "@/Data/BonusUi/Toasts";
import { useState } from "react";
import { Disc } from "react-feather";
import { Button, Card, CardBody, Col, Toast, ToastBody } from "reactstrap";
import CommonToast from "../Common/CommonToast";

export const TranslucentToasts = () => {
  const [open, setOpen] = useState(true);
  return (
    <Col md="6">
      <Card className="overflow-hidden">
        <CommonCardHeader title={TranslucentToastsTitle} span={TranslucentToastSubTitle} />
        <CardBody className="toast-rtl bg-dark">
          <div className="toast-container">
            <Toast isOpen={open}>
              <div className="toast-header">
                <Disc className="toast-icons toast-info" />
                <strong className="me-auto">CRM</strong>
                <small className="text-muted d-sm-block d-none">11 mins ago</small>
                <Button close className="p-0" onClick={() => setOpen(false)}></Button>
              </div>
              <ToastBody className="toast-dark">{"Hello, I'm a web-designer."}</ToastBody>
            </Toast>
            {TranslucentToastsData.map((data) => (
              <CommonToast key={data.id} icon={data.icon} strongText={data.strongText} smallClass={`d-sm-block d-none text-${data.smallClass}`} smallText={data.smallText} bodyText={data.bodyText} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
