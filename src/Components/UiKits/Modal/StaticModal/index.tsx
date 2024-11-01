import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { StaticModalTitle } from "@/Constant";
import { StaticModalSubTitle } from "@/Data/Uikits/Modal";
import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import CommonModal from "../Common/CommonModal";
import StaticModalForm from "../Common/StaticModalForm";

export const StaticModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const ModalData = { isOpen: modal, toggler: toggle, bodyClass: "dark-sign-up social-profile text-start" };

  return (
    <Col xl="4" xxl="5">
      <Card>
        <CommonCardHeader title={StaticModalTitle} span={StaticModalSubTitle} />
        <CardBody>
          <Button color="primary" onClick={toggle}>
            {"Static backdrop modal"}
          </Button>
          <CommonModal modalData={ModalData}>
            <div className="modal-toggle-wrapper">
              <h4>{"CRM Login"}</h4>
              <p>{"Fill in your information below to continue."}</p>
              <StaticModalForm toggle={toggle} />
            </div>
          </CommonModal>
        </CardBody>
      </Card>
    </Col>
  );
};
