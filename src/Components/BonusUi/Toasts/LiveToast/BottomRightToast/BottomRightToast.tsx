import React, { useState } from "react";
import { Button, CloseButton, Toast, ToastBody } from "reactstrap";

export const BottomRightToast = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);
  const handleClick = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 8000);
  };
  return (
    <>
      <Button color="secondary" id="liveToastBtn1" onClick={handleClick}>
        {"Bottom-right toast"}
      </Button>
      <div className="toast-container position-fixed bottom-0 end-0 p-3 toast-index toast-rtl">
        <Toast id="liveToastBtn1" isOpen={visible}>
          <div className="d-flex justify-content-between alert-secondary">
            <ToastBody>{"Your time over after 5 minute."}</ToastBody>
            <CloseButton variant="white" className="me-2 m-auto" onClick={toggle} />
          </div>
        </Toast>
      </div>
    </>
  );
};
