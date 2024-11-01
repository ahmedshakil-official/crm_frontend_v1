import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CenteredModalTitle, ImagePath } from "@/Constant";
import { CenteredModalSubTitle } from "@/Data/Uikits/Modal";
import Image from "next/image";
import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import CommonModal from "../Common/CommonModal";

export const CenteredModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = { isOpen: modal, center: true, toggler: toggle };
  return (
    <Col xxl="3" xl="4">
      <Card>
        <CommonCardHeader title={CenteredModalTitle} span={CenteredModalSubTitle} />
        <CardBody>
          <Button color="success" onClick={toggle}>
            {"Vertically centered"}
          </Button>
          <CommonModal modalData={data}>
            <div className="modal-toggle-wrapper">
              <ul className="modal-img">
                <li>
                  <Image width={100} height={100} src={`${ImagePath}/gif/danger.gif`} alt="error" />
                </li>
              </ul>
              <h4 className="text-center pb-2">{"Ohh! Something went wrong!"}</h4>
              <p className="text-center">{"Attackers on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations."}</p>
              <Button color="secondary" className="d-flex m-auto" onClick={toggle}>
                {"Close"}
              </Button>
            </div>
          </CommonModal>
        </CardBody>
      </Card>
    </Col>
  );
};
