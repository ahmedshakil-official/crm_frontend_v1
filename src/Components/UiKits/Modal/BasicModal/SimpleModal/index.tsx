import { ImagePath } from "@/Constant";
import Image from "next/image";
import { useState } from "react";
import { Button } from "reactstrap";
import CommonModal from "../../Common/CommonModal";

export const SimpleModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = { isOpen: modal, toggler: toggle };

  return (
    <>
      <Button color="secondary" className="px-xl-2 px-xxl-3" onClick={toggle}>
        {"Simple"}
      </Button>
      <CommonModal modalData={data}>
        <div className="modal-toggle-wrapper">
          <h4>
            {"Up to "}
            <strong className="font-danger">{"85% OFF"}</strong>
            {", Hurry Up Online Shopping"}
          </h4>
          <div className="modal-img">
            <Image width={200} height={200} src={`${ImagePath}/gif/online-shopping.gif`} alt="online-shopping" />
          </div>
          <p className="text-sm-center">{"Our difficulty in finding regular clothes that was of great quality, comfortable, and didn't impact the environment given way to Creatures of Habit."}</p>
          <Button color="primary" className="d-flex align-items-center gap-2 text-light ms-auto" onClick={toggle}>
            {"Explore More "}
            <i className="fa-solid fa-angles-right" />
          </Button>
        </div>
      </CommonModal>
    </>
  );
};
