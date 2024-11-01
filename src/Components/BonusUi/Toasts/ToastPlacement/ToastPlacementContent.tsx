import { ImagePath } from "@/Constant";
import { ToastPlacementContentProp } from "@/Types/BonusUiType";
import Image from "next/image";
import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

const ToastPlacementContent: React.FC<ToastPlacementContentProp> = ({ selectedPosition }) => {
  return (
    <div className="bg-light position-relative bd-example-toasts">
      <div className={`toast-container p-3 position-absolute ${selectedPosition}`} id="toastPlacement">
        <Toast>
          <div className="toast-header toast-img">
            <Image width={30} height={30} className="rounded me-2" src={`${ImagePath}/other-images/profile.png`} alt="profile" />
            <strong className="me-auto">{"CRM"}</strong>
            <small className="d-sm-block d-none">{"25 min ago"}</small>
          </div>
          <ToastBody className="toast-dark text-dark">
            <p className="toast-content">
              <em className="text-danger">{"Attackers"}</em>
              {" on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations."}
            </p>
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};
export default ToastPlacementContent;
