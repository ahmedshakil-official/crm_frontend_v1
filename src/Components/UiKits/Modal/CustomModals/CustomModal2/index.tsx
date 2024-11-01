import { ImagePath } from "@/Constant";
import Image from "next/image";
import { useState } from "react";
import { Button, Col } from "reactstrap";
import CommonModal from "../../Common/CommonModal";
import StaticModalForm from "../../Common/StaticModalForm";
import { DotText } from "../Common/DotText";

export const CustomModal2 = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = { isOpen: modal, center: true, toggler: toggle, bodyClass: "dark-sign-up social-profile text-start" };
  return (
    <Col xl="4" md="6" className="custom-alert text-center">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="demo-img">
          <DotText />
          <div className="title-wrapper pb-3 modal-heading">
            <h4 className="theme-name mb-0">
              <span>{"Modal 2 - "}</span>
              {"Result Modal"}
            </h4>
            <p>{"Example of CRM login form."}</p>
          </div>
          <div className="overflow-hidden">
            <Image className="img-fluid" width={482} height={308} src={`${ImagePath}/alert/learning.png`} alt="learning" />
            <Button color="primary" className="mx-auto mt-3" onClick={toggle}>
              {"Click Out"}
            </Button>
          </div>
          <CommonModal modalData={data}>
            <div className="modal-toggle-wrapper">
              <h4>{"CRM Login"}</h4>
              <p>{"Fill in your information below to continue."}</p>
              <StaticModalForm toggle={toggle} />
            </div>
          </CommonModal>
        </div>
      </div>
    </Col>
  );
};
