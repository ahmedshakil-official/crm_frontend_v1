import { Fragment, useState } from "react";
import CommonModal from "../../Common/CommonModal";
import { Button } from "reactstrap";
import { FullScreenModalData } from "@/Data/Uikits/Modal";

export const FullScreen = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = { isOpen: modal, header: true, class: "modal-fullscreen", toggler: toggle, title: "Extra large modal", bodyClass: "dark-modal" };
  return (
    <>
      <Button color="secondary" onClick={toggle}>
        {"Full Screen Modal"}
      </Button>
      <CommonModal modalData={data}>
        {FullScreenModalData &&
          FullScreenModalData.map((item, index) => (
            <Fragment key={index}>
              <div className="large-modal-header">
                <i className="fa-solid fa-angles-right" />
                <h6>{item.title}</h6>
              </div>
              <p className="modal-padding-space">{item.text}</p>
            </Fragment>
          ))}
      </CommonModal>
    </>
  );
};
