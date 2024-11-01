import { Cancel, EditMoreInformation, EmailAddress, Href, Name, Phone, Save } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { setEditData } from "@/Redux/Reducers/ContactReducer";
import { UpdateUserFormProps, UserProps, UserUpdateType } from "@/Types/ContactType";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import { MoreInformationInputs } from "./MoreInformationInputs";

export const UpdateUserForm: React.FC<UpdateUserFormProps> = ({ editData, userEditCallback }) => {
  const {register,handleSubmit,formState: { errors },} = useForm();
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const onUpdate = (updatedData: UserUpdateType) => {
    let withImageData = { ...updatedData, avatar: editData.avatar || `user/user.png`,id:editData.id };
    userEditCallback(false, withImageData);
    dispatch(setEditData(withImageData));
  };
  return (
    <div className="contact-editform ps-0">
      <Form onSubmit={handleSubmit(onUpdate)}>
        <Row className="g-2">
          <Col md={12}>
            <FormGroup className="mt-0">
              <Label>{Name}</Label>
              <Row>
                <Col sm={6}>
                  <input type="text" defaultValue={editData.name} className={`form-control ${errors.name ? "is-invalid" : ""}`} placeholder="First Name" {...register("name", { required: true })} />
                  {errors.name && <FormFeedback>{"First name is required"}</FormFeedback>}
                </Col>
                <Col sm={6}>
                  <input type="text" defaultValue={editData.surname} className={`form-control ${errors.surname ? "is-invalid" : ""}`} placeholder="Last Name" {...register("surname", { required: true })} />
                  {errors.surname && <FormFeedback>{"Last name is required"}</FormFeedback>}
                </Col>
              </Row>
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup className="mt-0">
              <Label>{EmailAddress}</Label>
              <input type="email" defaultValue={editData.email} className={`form-control ${errors.email ? "is-invalid" : ""}`} {...register("email", { required: true })} />
              {errors.email && <FormFeedback>{"Please enter your email"}</FormFeedback>}
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup className="mt-0">
              <Label>{Phone}</Label>
              <Row className="g-3">
                <Col sm={6}>
                  <input type="number" defaultValue={editData.mobile} className={`form-control ${errors.mobile ? "is-invalid" : ""}`} {...register("mobile", { required: true })} />
                  {errors.mobile && <FormFeedback>{"Please enter Mobile number"}</FormFeedback>}
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
        {show ? (
          <MoreInformationInputs />
        ) : (
          <a className="ps-0 edit-information" href={Href} onClick={() => setShow(true)}>{EditMoreInformation}</a>
        )}
        <Button color="secondary" className="update-contact me-1">{Save}</Button>
        <Button color="primary" onClick={() => userEditCallback(false, editData as UserProps)}>{Cancel}</Button>
      </Form>
    </div>
  );
};
