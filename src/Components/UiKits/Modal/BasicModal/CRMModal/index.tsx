import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { CRMModelForm } from './CRMModelForm';

export const CRMModel = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
          <Button color="primary" className="px-xl-2 px-xxl-3" onClick={toggle}>
            {"Open modal for CRM"}
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
              <ModalHeader className="justify-content-center border-0">
                {"CRM SIGN-UP"}
              </ModalHeader>
              <ModalBody>
                <CRMModelForm />
              </ModalBody>
            </div>
          </Modal>
        </>
      );
}
