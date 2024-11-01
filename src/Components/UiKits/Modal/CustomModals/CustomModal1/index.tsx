import { useState } from "react";
import { Button, Col } from "reactstrap";
import CommonModal from "../../Common/CommonModal";
import { DotText } from "../Common/DotText";
import { CustomModal1Body } from "./CustomModal1Body";
import Image from "next/image";
import { ImagePath } from "@/Constant";

export const CustomModal1 = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = { isOpen: modal, center: true, toggler: toggle };
  return (
    <Col xl="4" md="6" className="custom-alert text-center">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="demo-img">
          <DotText />
          <div className="title-wrapper pb-3 modal-heading">
            <h4 className="theme-name mb-0">
              <span>{"Modal 1 -"}</span>
              {"Profile Modal"}
            </h4>
            <p>{"Example of CRM dashboard profile card."}</p>
          </div>
          <div className="overflow-hidden">
            <Image width={482} height={263} className="img-fluid" src={`${ImagePath}/alert/social.png`} alt="social" />
            <Button color="primary" className="mx-auto mt-3" onClick={toggle}>
              {"Click Out"}
            </Button>
          </div>
          <CommonModal modalData={data}>
            <CustomModal1Body />
          </CommonModal>
        </div>
      </div>
    </Col>
  );
};
