import { Cancel, ImagePath, Print, PrintPreview } from "@/Constant";
import { PrintModalProps } from "@/Types/ContactType";
import Image from "next/image";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";

export const PrintModal: React.FC<PrintModalProps> = ({ printModal, selectedUser, toggleCallback }) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const printModalToggle = () => {
    toggleCallback(false);
  };
  return (
    <Modal className="modal-bookmark" isOpen={printModal} toggle={printModalToggle} centered>
      <ModalHeader toggle={printModalToggle}>{PrintPreview}</ModalHeader>
      <ModalBody className="list-persons">
        <div className="profile-mail pt-0" ref={componentRef}>
          <div className="common-flex align-items-center">
            <Image width={120} height={120} className="img-fluid rounded-circle" src={`${ImagePath}/${selectedUser.avatar}`} alt="" />
            <div className="flex-grow-1 mt-0">
              <h4>
                <span>{selectedUser.name}</span>
                <span>{selectedUser.surname}</span>
              </h4>
              <p>{selectedUser.email}</p>
            </div>
          </div>
          <div className="email-general">
            <h5>{"General"}</h5>
            <p>{"Email Address"} :<span className="font-primary" id="mailadd">{selectedUser.email}</span></p>
          </div>
        </div>
        <ReactToPrint
          trigger={() => (
            <Button color="success" className="me-1">
              {Print}
            </Button>
          )}
          content={() => componentRef.current}
        />
        <Button color="primary" onClick={printModalToggle}>
          {Cancel}
        </Button>
      </ModalBody>
    </Modal>
  );
};
