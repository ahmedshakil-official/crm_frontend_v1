import React, { Fragment, useState } from "react";
import CommonModal from "../../Common/CommonModal";
import { Button } from "reactstrap";
import { ScrollingModalData } from "@/Data/Uikits/Modal";

export const FullScreenOutline = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = { isOpen: modal, header: true, footer: true, class: "modal-fullscreen", toggler: toggle, title: "Full screen modal", button: "Save", bodyClass: "dark-modal" };
  return (
    <>
      <Button color="secondary" outline onClick={toggle}>
        {"Fullscreen modal"}
      </Button>
      <CommonModal modalData={data}>
        <div className="large-modal-header">
          <i className="fa-solid fa-angles-right text-primary" />
          <h6>{"Web design"} </h6>
        </div>
        <p className="modal-padding-space">{"We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI."}</p>
        <div className="modal-details">
          <div className="web-content">
            <h6>{"Web designer"}</h6>
            {ScrollingModalData &&
              ScrollingModalData.map((item, index) => (
                <Fragment key={index}>
                  {index === 4 && <h6>{"UX designer "}</h6>}
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <i className="fa-solid fa-circle-arrow-right text-primary text-primary" />
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </Fragment>
              ))}
          </div>
        </div>
      </CommonModal>
    </>
  );
};
