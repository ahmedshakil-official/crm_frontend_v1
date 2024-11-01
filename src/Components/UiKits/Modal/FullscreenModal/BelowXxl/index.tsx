import React, { Fragment, useState } from "react";
import CommonModal from "../../Common/CommonModal";
import { Button } from "reactstrap";
import { BelowsmData } from "@/Data/Uikits/Modal";

export const BelowXxl = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = { isOpen: modal, header: true, footer: true, toggler: toggle, title: "Full screen below xxl", class: "modal-fullscreen-xxl-down", bodyClass: "dark-modal" };
  return (
    <>
      <Button color="danger" outline onClick={toggle}>
        {"Fullscreen below xxl"}
      </Button>
      <CommonModal modalData={data}>
        <div className="large-modal-header">
          <i className="fa-solid fa-angles-right text-primary" />
          <h6>{"Web design"}</h6>
        </div>
        <p className="modal-padding-space">{"We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI."}</p>
        <div className="modal-details">
          <div className="web-content">
            <h6>{"Web designer"}</h6>
            {BelowsmData &&
              BelowsmData.map((item, index) => (
                <Fragment key={index}>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <i className="fa-solid fa-circle-arrow-right text-primary" />
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <p>{item}</p>
                    </div>
                  </div>
                  {index === 1 && <h6>{"UX designer"}</h6>}
                </Fragment>
              ))}
          </div>
        </div>
      </CommonModal>
    </>
  );
};
