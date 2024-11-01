import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DefaultToastTitle, ImagePath } from "@/Constant";
import { ColorsSchemeSubTitle } from "@/Data/BonusUi/Toasts";
import Image from "next/image";
import { useState } from "react";
import { Button, Card, CardBody, Col, Toast, ToastBody } from "reactstrap";

export const DefaultToast = () => {
  const [open, setOpen] = useState(true);
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={DefaultToastTitle} span={ColorsSchemeSubTitle} />
        <CardBody className="toast-rtl">
          <Toast className="default-show-toast" isOpen={open}>
            <div className="toast-img toast-header">
              <Image width={30} height={30} className="rounded me-2" src={`${ImagePath}/other-images/profile.png`} alt="profile" />
              <strong className="me-auto">{"CRM"}</strong>
              <small className="d-sm-block d-none">{"10 min ago"}</small>
              <Button close className="p-0" onClick={() => setOpen(false)}></Button>
            </div>
            <ToastBody className="toast-dark">
              <strong className="text-success">{"Well done!"}</strong> {"You successfully read this important message."}
            </ToastBody>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};
