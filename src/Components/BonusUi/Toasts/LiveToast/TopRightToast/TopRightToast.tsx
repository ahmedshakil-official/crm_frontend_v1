import { ImagePath } from "@/Constant";
import Image from "next/image";
import { useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";

export const TopRightToast = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);
  const handleClick = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 8000);
  };
  return (
    <>
      <Button color="primary" id="liveToast" onClick={handleClick}>
        {"Top-right toast"}
      </Button>
      <div className="toast-container position-fixed top-0 end-0 p-3 toast-index toast-rtl">
        <Toast id="liveToast" isOpen={visible}>
          <ToastHeader className="toast-img" toggle={toggle}>
            <Image width={30} height={30} className="rounded me-2" src={`${ImagePath}/other-images/profile.png`} alt="profile" />
            <strong className="me-auto">{"CRM"}</strong>
            <small>{"5 min ago"}</small>
          </ToastHeader>
          <ToastBody className="toast-dark">{"Hello, I'm a web-designer."}</ToastBody>
        </Toast>
      </div>
    </>
  );
};
