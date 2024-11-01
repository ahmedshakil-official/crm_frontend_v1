import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { StackingToastsTitle } from "@/Constant";
import { StackingToastsData, StackingToastsSubTitle } from "@/Data/BonusUi/Toasts";
import { useState } from "react";
import { Bell } from "react-feather";
import { Button, Card, CardBody, Col, Toast, ToastBody } from "reactstrap";
import CommonToast from "../Common/CommonToast";

export const StackingToasts = () => {
  const [open, setOpen] = useState(true);
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={StackingToastsTitle} span={StackingToastsSubTitle} />
        <CardBody className="toast-rtl">
          <div className="toast-container position-static">
            <Toast isOpen={open}>
              <div className="toast-header">
                <Bell className="toast-icons toast-primary" />
                <strong className="me-auto">CRM</strong>
                <small className="text-danger">just now</small>
                <Button close className="p-0" onClick={() => setOpen(false)}></Button>
              </div>
              <ToastBody className="toast-dark">{"Hello, I'm a web-designer."}</ToastBody>
            </Toast>
            {StackingToastsData.map((data) => (
              <CommonToast key={data.id} icon={data.icon} strongText={data.strongText} smallClass="text-muted" smallText={data.smallText} bodyText={data.bodyText} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
