import React, { Fragment, useState } from "react";
import CommonModal from "../../Common/CommonModal";
import { ScrollingModalData } from "@/Data/Uikits/Modal";
import { Button } from "reactstrap";

export const ScrollingModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = { isOpen: modal, header: true, footer: true, toggler: toggle, title: "Scrolling Modal" };
  return (
    <>
      <Button color="success" className="px-xl-2 px-xxl-3" onClick={toggle}>
        {"Scrolling content"}
      </Button>
      <CommonModal modalData={data}>
        <>
          <h4>{"Wed designer"}</h4>
          {ScrollingModalData &&
            ScrollingModalData.map((item, index) => (
              <Fragment key={index}>
                {index === 4 && <h4>{"UX designer"}</h4>}
                <div className={`d-flex ${item.class}`}>
                  <div className="flex-shrink-0">
                    <i className="fa-solid fa-circle-arrow-right text-primary" />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className={index === 3 ? "pb-4" : ""}>{item.text}</p>
                  </div>
                </div>
              </Fragment>
            ))}
        </>
      </CommonModal>
    </>
  );
};
