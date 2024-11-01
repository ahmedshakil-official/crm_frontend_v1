import { ImagePath } from "@/Constant";
import { OtherModalProps } from "@/Types/UiKitsType";
import Image from "next/image";
import React from "react";
import { Button } from "reactstrap";
import CommonModal from "../Common/CommonModal";

export const OtherModal: React.FC<OtherModalProps> = ({ modal, toggle }) => {
  const ModalData = { isOpen: modal, center: true, toggler: toggle };
  return (
    <CommonModal modalData={ModalData}>
      <div className="modal-toggle-wrapper">
        <ul className="modal-img">
          <li>
            <Image width={100} height={100} src={`${ImagePath}/gif/logout.gif`} alt="logout" />
          </li>
        </ul>
        <h4 className="pt-3 text-center">{"Already leaving??"}</h4>
        <p className="text-center">{"Are you sure want to logout this dashboard?"}</p>
        <span className="d-block text-center mb-4">
          {"Not a member?"}
          <a className="ms-1" href={`/dashboard/ecommerce`}>
            {"Register"}
          </a>
        </span>
        <Button color="dark" className="d-flex m-auto" onClick={toggle}>
          {"Yes, Log out"}
        </Button>
      </div>
    </CommonModal>
  );
};
