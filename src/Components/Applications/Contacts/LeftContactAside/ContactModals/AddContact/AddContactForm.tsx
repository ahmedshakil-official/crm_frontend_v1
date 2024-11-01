import { Cancel, EmailAddress, Name, Phone, Save } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { createUser, setContactValidation } from "@/Redux/Reducers/ContactReducer";
import { AddContactFormProps, ContactFormProps } from "@/Types/ContactType";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

export const AddContactForm: React.FC<AddContactFormProps> = ({ setModal, toggle }) => {
  const dispatch = useAppDispatch();
  const {register,handleSubmit,formState: { errors }} = useForm<ContactFormProps>();
  const { validate } = useAppSelector((state) => state.contact);
  const addContact: SubmitHandler<ContactFormProps> = (data) => {
    if (data) {
      dispatch(createUser({ data, defaultUser: `user/user.png` }));
      setModal(false);
      dispatch(setContactValidation(false));
    }
  };
  return (
    <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(addContact)} noValidate>
      <Row className="g-2">
        <Col md={12}>
          <FormGroup className="mt-0">
            <Label>{Name}</Label>
            <Row>
              <Col sm={6}>
                <input type="text" className={`form-control ${validate && `${errors.name ? "is-invalid" : "is-valid"}`}`} placeholder="First Name" {...register("name", { required: true })} />
                {errors.name && <div className="text-danger">{"First name is required"}</div>}
              </Col>
              <Col sm={6}>
                <input type="text" className={`form-control ${validate && `${errors.surname ? "is-invalid" : "is-valid"}`}`} placeholder="Last Name" {...register("surname", { required: true })} />
              </Col>
            </Row>
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup className="mt-0">
            <Label>{EmailAddress}</Label>
            <input type="email" className={`form-control ${validate && `${errors.email ? "is-invalid" : "is-valid"}`}`} {...register("email", { required: true })} />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup className="my-0">
            <Label>{Phone}</Label>
            <Row>
              <Col sm={6}>
                <input type="number" className={`form-control ${validate && `${errors.mobile ? "is-invalid" : "is-valid"}`}`} {...register("mobile", { required: true })} />
              </Col>
              <Col sm={6}>
                <Input type="select">
                  <option>{"Mobile"}</option>
                  <option>{"Work"}</option>
                  <option>{"Others"}</option>
                </Input>
              </Col>
            </Row>
          </FormGroup>
        </Col>
      </Row>
      <Button color="secondary" className="me-2" type="submit" onClick={() => dispatch(setContactValidation(true))}>{Save}</Button>
      <Button color="primary" onClick={toggle}>{Cancel}</Button>
    </Form>
  );
};
