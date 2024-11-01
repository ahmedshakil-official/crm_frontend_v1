import { LargeModalData } from "@/Data/Uikits/Modal";
import { Fragment, useState } from "react";
import { Button } from "reactstrap";
import CommonModal from "../../Common/CommonModal";

export const LargeModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = { isOpen: modal, header: true, toggler: toggle, title: "Large modal", size: "lg", bodyClass: "dark-modal" };
  return (
    <>
      <Button color="success" onClick={toggle}>
        {"Large Modal"}
      </Button>
      <CommonModal modalData={data}>
        <div className="large-modal-header">
          <i className="fa-solid fa-angles-right" />
          <h6>{"Start with your goals"}</h6>
        </div>
        <>
          {LargeModalData &&
            LargeModalData.map((item, index) => (
              <Fragment key={index}>
                {index <= 2 && <p className="modal-padding-space mb-0">{item}</p>}
                {index > 2 && (
                  <div className="large-modal-body">
                    <i className="fa-solid fa-share" />
                    <p className="ps-1">{item}</p>
                  </div>
                )}
              </Fragment>
            ))}
        </>
      </CommonModal>
    </>
  );
};
