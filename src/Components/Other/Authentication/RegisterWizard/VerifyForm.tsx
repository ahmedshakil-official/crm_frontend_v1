import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";
import { Birthday, Country, State } from "@/Constant";
import { RegisterWizardForm } from "@/Types/PagesType";
import { verifyFormCountry } from "@/Data/Pages/PagesData";

export const VerifyForm: React.FC<RegisterWizardForm> = ({ formValue, updateUserData }) => {
  return (
    <div id="verifycont" className="d-block">
      <FormGroup>
        <Col>
          <Label>{Birthday}</Label>
        </Col>
        <Input type="date" onChange={updateUserData} value={formValue.birthDate} name="birthDate" />
      </FormGroup>
      <FormGroup>
        <Col>
          <Label>{State}</Label>
        </Col>
        <Input value={formValue.state} onChange={updateUserData} name="state" placeholder="Ontario" type="text" />
      </FormGroup>
      <FormGroup>
        <Col>
          <Label>{Country} </Label>
        </Col>
        <Input onChange={updateUserData} type="select" className="selectpicker countrypicker" name="country">
          {verifyFormCountry.map((item, index) => (
            <option value="" key={index}>
              {item}
            </option>
          ))}
        </Input>
      </FormGroup>
    </div>
  );
};
