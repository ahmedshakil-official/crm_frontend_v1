import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, NestedModalTitle } from "@/Constant";
import { NestedModalImage, NestedModalSubTitle } from "@/Data/Uikits/Modal";
import Image from "next/image";
import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import CommonModal from "../Common/CommonModal";
import { OtherModal } from "./OtherModal";

export const NestedModal = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const toggle2 = () => setOpen(!open);
  const data = { isOpen: modal, center: true, toggler: toggle };
  return (
    <Col xl="4" xxl="4">
      <Card>
        <CommonCardHeader headClass="pb-0" title={NestedModalTitle} span={NestedModalSubTitle} />
        <CardBody>
          <Button color="dark" onClick={toggle}>
            {"Open first modal"}
          </Button>
          <CommonModal modalData={data}>
            <div className="modal-toggle-wrapper">
              <ul className="modal-img">
                {NestedModalImage.map((item, index) => (
                  <li key={index}>
                    <Image width={100} height={100} src={`${ImagePath}/gif/${item}.gif`} alt="whatsapp" />
                  </li>
                ))}
              </ul>
              <h6>{"Remove your complete account from your phone or tablet to sign out of the Gmail app."}</h6>
              <Button color="dark" className="rounded-pill w-100 mt-4" onClick={toggle2}>
                {"Connect new account"}
              </Button>
              <Button color="transparent" className="rounded-pill w-100 dark-toggle-btn" onClick={toggle}>
                {"Cancel"}
              </Button>
            </div>
          </CommonModal>
          <OtherModal modal={open} toggle={toggle2} />
        </CardBody>
      </Card>
    </Col>
  );
};
