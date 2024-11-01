import { FullScreenModalData } from "@/Data/Uikits/Modal";
import { Fragment, useState } from "react";
import { Button } from "reactstrap";
import CommonModal from "../../Common/CommonModal";

export const SmallModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = { isOpen: modal, header: true, toggler: toggle, title: "Small modal", size: "sm", bodyClass: "dark-modal" };
  return (
    <>
      <Button color="primary" onClick={toggle}>
        {"Small Modal"}
      </Button>
      <CommonModal modalData={data}>
        {FullScreenModalData &&
          FullScreenModalData.slice(0, 3).map((item, index) => (
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
