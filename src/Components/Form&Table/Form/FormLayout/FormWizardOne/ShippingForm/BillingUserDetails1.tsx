import { Col, FormGroup, Input, Label } from "reactstrap";
import { Address, CRMMail, ContactNumber, Email, EnterFirstName, EnterLastName, EnterNumber, FirstName, LastName } from "@/Constant";
import { BillingUserDetailsProp } from "@/Types/FormType";

export const BillingUserDetails1 :React.FC<BillingUserDetailsProp> = ({ studentValidationForm, getUserData }) => {
  const { firstName, lastName, contact, email, address } = studentValidationForm;

  return (
    <>
      <Col sm="6">
        <FormGroup>
          <Label check className="form-label">{FirstName}<span className="text-danger">*</span></Label>
          <Input value={firstName} onChange={getUserData} name="firstName" type="text" placeholder={EnterFirstName} />
        </FormGroup>
      </Col>
      <Col sm="6">
        <FormGroup>
          <Label check className="form-label">{LastName}<span className="text-danger">*</span></Label>
          <Input value={lastName} onChange={getUserData} name="lastName" type="text" placeholder={EnterLastName} />
        </FormGroup>
      </Col>
      <Col sm="6">
        <FormGroup>
          <Label check className="form-label">{ContactNumber}</Label>
          <Input value={contact} onChange={getUserData} name="contact" type="number" placeholder={EnterNumber} />
        </FormGroup>
      </Col>
      <Col sm="6">
        <Label check className="form-label">{Email}<span className="text-danger">*</span></Label>
        <Input value={email} onChange={getUserData} name="email" type="email" placeholder={CRMMail} />
      </Col>
      <Col sm="12">
        <FormGroup>
          <Label check className="form-label">{Address}</Label>
          <Input value={address} onChange={getUserData} type="textarea" name="address" rows={3} />
        </FormGroup>
      </Col>
    </>
  );
};
