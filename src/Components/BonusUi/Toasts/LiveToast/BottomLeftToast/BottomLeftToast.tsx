import React, { useState } from "react";
import { Button, Toast, ToastHeader } from "reactstrap";
import UniqueToastContent from "../../Common/UniqueToastContent";
import Image from "next/image";
import { ImagePath } from "@/Constant";

export const BottomLeftToast = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);
  const handleClick = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 8000);
  };
  return (
    <>
      <Button color="success" id="liveToastBtn3" onClick={handleClick}>
        {"Bottom-left toast"}
      </Button>
      <div className="toast-container position-fixed start-0 bottom-0 p-3 toast-index toast-rtl">
        <Toast id="liveToast3" isOpen={visible}>
          <ToastHeader className="toast-img" toggle={toggle}>
            <Image width={30} height={30} className="rounded me-2" src={`${ImagePath}/other-images/profile.png`} alt="profile" />
            <strong className="me-auto">{"CRM"}</strong>
          </ToastHeader>
          <UniqueToastContent visible={visible} setVisible={setVisible} />
        </Toast>
      </div>
    </>
  );
};
