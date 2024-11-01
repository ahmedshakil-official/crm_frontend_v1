import { CommonSelectDropdownProps } from "@/Types/FormType";
import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

const CommonSelectDropdown: React.FC<CommonSelectDropdownProps> = ({ options, title, multiple }) => {
  return (
    <Col>
      <FormGroup>
        <Label>{title}</Label>
        <Input type="select" multiple={multiple}>
          {options.map((_, index) => (
            <option key={index}>{index+1}</option>
          ))}
        </Input>
      </FormGroup>
    </Col>
  );
};
export default CommonSelectDropdown;
