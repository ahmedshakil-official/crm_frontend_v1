import React, { useState } from "react";
import { Button, Card, CardBody, Col, Toast, ToastHeader } from "reactstrap";
import UniqueToastContent from "../Common/UniqueToastContent";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, UniqueToastTitle } from "@/Constant";
import { ColorsSchemeSubTitle } from "@/Data/BonusUi/Toasts";
import Image from "next/image";

export const UniqueToast = () => {
  const [visible, setVisible] = useState(true);
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={UniqueToastTitle} span={ColorsSchemeSubTitle} />
        <CardBody className="toast-rtl">
          <Toast isOpen={visible}>
            <div className="toast-img toast-header" >
              <Image width={30} height={30} className="rounded me-2" src={`${ImagePath}/other-images/profile.png`} alt="profile" />
              <strong className="me-auto">{"CRM Theme"}</strong>
              <Button close className="p-0" onClick={() => setVisible(false)}></Button>
            </div>
            <UniqueToastContent visible={visible} setVisible={setVisible} />
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};
