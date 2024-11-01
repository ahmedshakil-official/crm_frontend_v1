import { UniqueToastContentProps } from "@/Types/BonusUiType";
import React from "react";
import { Button, ToastBody } from "reactstrap";

const UniqueToastContent: React.FC<UniqueToastContentProps> = ({ visible, setVisible }) => {
  const toggle = () => setVisible(!visible);
  return (
    <ToastBody className="toast-dark">
      <h6 className="mb-2">{"Your account will be permanently deleted?"}</h6>
      <p className="mb-0">{"Do you intend to continue?"}</p>
      <div className="mt-2 pt-2 border-top d-flex gap-2">
        <Button color="dark" size="sm">
          {"I'm not sure"}
        </Button>
        <Button color="danger" size="sm" onClick={toggle}>
          {"Remove My Account"}
        </Button>
      </div>
    </ToastBody>
  );
};
export default UniqueToastContent;
