import { BelowsmData } from "@/Data/Uikits/Modal";
import { Fragment, useState } from "react";
import { Button } from "reactstrap";
import CommonModal from "../../Common/CommonModal";

export const FullScreenBelowSm = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = { isOpen: modal, header: true, footer: true, toggler: toggle, title: "Full screen below sm", class: "modal-fullscreen-sm-down", bodyClass: "dark-modal" };
  return (
    <>
      <Button color="info" outline onClick={toggle}>
        {"Fullscreen below sm"}
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
                      <i className="fa-solid fa-circle-arrow-right text-primary text-primary" />
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
