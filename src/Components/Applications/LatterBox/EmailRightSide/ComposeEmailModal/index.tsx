import { ComposeMessage, FromHeading, Href, SaveAsDraft, Send } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { addNewEmail, setComposeEmail, setEmailValidation } from "@/Redux/Reducers/LetterBoxSlice";
import { AddNewEmailInterFace } from "@/Types/LatterBoxType";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import EmailSubInput from "./EmailSubInput";

const ComposeEmailModal = () => {
  const [ccShow, setCcShow] = useState(false);
  const [bccShow, setBccShow] = useState(false);
  const { composeEmail, emailValidation } = useAppSelector((state) => state.letterBox);
  const dispatch = useAppDispatch();
  const {register,handleSubmit,formState: { errors },reset,} = useForm<AddNewEmailInterFace>();

  const onSubmitForm: SubmitHandler<AddNewEmailInterFace> = (data) => {
    dispatch(addNewEmail(data));
    dispatch(setEmailValidation(false));
    dispatch(setComposeEmail(false));
    reset();
  };

  return (
    <Modal isOpen={composeEmail} toggle={() => dispatch(setComposeEmail(false))} size="lg" id="compose_mail">
      <ModalHeader toggle={() => dispatch(setComposeEmail(false))}> {ComposeMessage} </ModalHeader>
      <ModalBody className="compose-modal">
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(onSubmitForm)}>
          <Row className="mb-3">
            <Col sm="2"><Label className="col-form-label" htmlFor="composeFrom" check>{FromHeading} :</Label></Col>
            <Col sm="10"><Input id="composeFrom" type="email" /></Col>
          </Row>
          <FormGroup>
            <Row>
              <Col sm="2"><Label className="col-form-label" htmlFor="composeTo" check>To :</Label></Col>
              <Col sm="10">
                <input className={`form-control ${emailValidation && `${errors.userEmail ? "is-invalid" : "is-valid"}`}`} type="email" {...register("userEmail", { required: true })} autoComplete="off" />
                <div className="add-bcc">
                  <div className="d-flex gap-2">
                    <Link className="btn" href={Href} onClick={() => setCcShow(!ccShow)}>Cc</Link>
                    <Link className="btn" href={Href} onClick={() => setBccShow(!bccShow)}>Bcc</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </FormGroup>
          <EmailSubInput ccShow={ccShow} bccShow={bccShow} />
          <FormGroup>
            <Row>
              <Col sm="2"><Label className="col-form-label" for="composeSubject" check>Subject :</Label></Col>
              <Col sm="10"><input className={`form-control ${emailValidation && `${errors.subject ? "is-invalid" : "is-valid"}`}`} type="textarea" {...register("subject", { required: true })} autoComplete="off" /></Col>
            </Row>
          </FormGroup>
          <div className="toolbar-box border-0">
            <div id="editor"><SimpleMdeReact id="editor_container" placeholder="Enter Your Messages..." options={{ autofocus: true, spellChecker: false }} /></div>
          </div>
          <ModalFooter>
            <Button color="light" className="font-dark" onClick={() => dispatch(setComposeEmail(false))}>{SaveAsDraft}</Button>
            <Button color="primary" type="submit" onClick={() => dispatch(setEmailValidation(true))}>{Send}</Button>
          </ModalFooter>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ComposeEmailModal;
