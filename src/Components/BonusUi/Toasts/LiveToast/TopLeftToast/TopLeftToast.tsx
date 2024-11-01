import { ImagePath } from "@/Constant";
import Image from "next/image";
import { useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";

export const TopLeftToast = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);
  const handleClick = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 8000);
  };
  return (
    <>
      <Button color="warning" id="liveToastBtn2" onClick={handleClick}>
        {"Top-left toast"}
      </Button>
      <div className="toast-container position-fixed start-0 top-0 p-3 toast-index toast-rtl">
        <Toast id="liveToastBtn2" isOpen={visible}>
          <ToastHeader className="toast-img" toggle={toggle}>
            <Image width={30} height={30} className="rounded me-2" src={`${ImagePath}/other-images/profile.png`} alt="profile" />
            <strong className="me-auto">{"CRM"}</strong>
            <small className="d-sm-block d-none">{"10 min ago"}</small>
          </ToastHeader>
          <ToastBody className="toast-dark">
            <strong className="text-success">{"Well done!"}</strong> {"You successfully read this important message."}
          </ToastBody>
        </Toast>
      </div>
    </>
  );
};
