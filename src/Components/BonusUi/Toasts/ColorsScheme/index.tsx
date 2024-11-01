import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ColorsSchemesTitle } from "@/Constant";
import { ColorsSchemeSubTitle } from "@/Data/BonusUi/Toasts";
import { useState } from "react";
import { Card, CardBody, CloseButton, Col, Toast, ToastBody } from "reactstrap";

export const ColorsScheme = () => {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={ColorsSchemesTitle} span={ColorsSchemeSubTitle} />
        <CardBody className="toast-rtl">
          <Toast fade className="default-show-toast align-items-center text-light border-0 bg-warning" isOpen={open}>
            <div className="d-flex justify-content-between">
              <ToastBody>{"Your time over after 5 minute."}</ToastBody>
              <CloseButton variant="white" className="me-2 m-auto" onClick={toggle} />
            </div>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};
