import { CommonToastProps } from "@/Types/BonusUiType";
import React, { useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";

const CommonToast: React.FC<CommonToastProps> = ({ icon, smallClass, strongText, smallText, bodyText }) => {
  const [open, setOpen] = useState(true);
  return (
    <Toast isOpen={open}>
      <div className="toast-header">
        {icon}
        <strong className="me-auto">{strongText}</strong>
        <small className={smallClass}>{smallText}</small>
        <Button close className="p-0" onClick={() => setOpen(false)}></Button>
      </div>
      <ToastBody className="toast-dark">{bodyText}</ToastBody>
    </Toast>
  );
};
export default CommonToast;
