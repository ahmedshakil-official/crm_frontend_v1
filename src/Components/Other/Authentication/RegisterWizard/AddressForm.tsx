import { ConfirmPassword, EmailAddress, Password } from "@/Constant";
import { RegisterWizardForm } from "@/Types/PagesType";
import React from "react";
import { Col, FormGroup, FormText, Input, Label } from "reactstrap";

export const AddressForm: React.FC<RegisterWizardForm> = ({ formValue, updateUserData }) => {
  return (
    <div id="addrescont" className="d-block">
      <FormGroup>
        <Col>
          <Label>{EmailAddress}</Label>
        </Col>
        <Input name="email" onChange={updateUserData} value={formValue.email} type="email" placeholder="name@example.com" />
        <FormText className="text-muted" id="emailHelp">
          {"We'll never share your email with anyone else."}
        </FormText>
      </FormGroup>
      <FormGroup>
        <Col>
          <Label>{Password}</Label>
        </Col>
        <Input name="password" onChange={updateUserData} value={formValue.password} type="password" placeholder="Password" />
      </FormGroup>
      <FormGroup>
        <Col>
          <Label>{ConfirmPassword}</Label>
        </Col>
        <Input name="confirmPassword" onChange={updateUserData} value={formValue.confirmPassword} type="password" placeholder="Enter confirm password" />
      </FormGroup>
    </div>
  );
};
