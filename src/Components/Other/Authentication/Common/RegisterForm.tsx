import {
  Agreewith,
  CreateAccount,
  CreateYourAccount,
  EmailAddress,
  Href,
  OrganizationName,
  Password,
  Phone,
  SignIn,
  UserType,
  YourName,
} from "@/Constant";
import { LoginFormProp } from "@/Types/PagesType";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { CommonLogo } from "./CommonLogo";
import { SocialLinks } from "./SocialLinks";

export const RegisterForm: React.FC<LoginFormProp> = ({ logoClass }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const toggle = () => setPasswordVisible(!isPasswordVisible);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    organizationName: "",
    userType: "",
    checkbox1: false,
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData({ ...formData, [id]: type === "checkbox" ? checked : value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      name: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      organizationName: "",
      userType: "",
      checkbox1: false,
    });
  };
  return (
    <div>
      <div>
        <CommonLogo logoClass={logoClass} />
      </div>
      <div className="login-main">
        <Form className="theme-form" onSubmit={handleSubmit}>
          <h2 className="text-center">{CreateYourAccount}</h2>
          <p className="text-center">
            {"Enter your personal details to create account"}
          </p>
          <FormGroup>
            <Col>
              <Label className="pt-0">{YourName}</Label>
            </Col>
            <Row className="g-2">
              <Col xs="6">
                <Input
                  type="text"
                  id="name"
                  required
                  placeholder="First name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Col>
              <Col xs="6">
                <Input
                  type="text"
                  id="lastName"
                  required
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Col>
              <Label>{Phone}</Label>
            </Col>
            <Input
              type="number"
              id="phone"
              required
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Col>
              <Label>{EmailAddress}</Label>
            </Col>
            <Input
              type="email"
              id="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Col>
              <Label>{Password}</Label>
            </Col>
            <div className="form-input position-relative">
              <Input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                name="login[password]"
                required
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className="show-hide" onClick={toggle}>
                <span className={!isPasswordVisible ? "show" : ""}></span>
              </div>
            </div>
          </FormGroup>
          <FormGroup>
            <Row className="g-2">
              <Col xs="6">
                <FormGroup>
                  <Label className="pt-0">{OrganizationName}</Label>
                  <Input
                    type="text"
                    id="organizationName"
                    required
                    placeholder="Organization Name"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                  <Label className="pt-0">{UserType}</Label>
                  <Input
                    type="select"
                    id="userType"
                    required
                    value={formData.userType}
                    onChange={handleInputChange}
                    className="form-select-sm f-w-600  text-body-tertiary"
                    style={{ padding: "12px", fontSize: "13px" }}
                  >
                    <option
                      style={{ fontSize: "13px" }}
                      className="form-select-sm text-body-tertiary f-w-600"
                      value="lead"
                    >
                      Lead
                    </option>
                    <option
                      style={{ fontSize: "13px" }}
                      className="form-select-sm text-body-tertiary f-w-600"
                      value="client"
                    >
                      Client
                    </option>
                    <option
                      style={{ fontSize: "13px" }}
                      className="form-select-sm text-body-tertiary f-w-600"
                      value="introducer"
                    >
                      Introducer
                    </option>
                    <option
                      style={{ fontSize: "13px" }}
                      className="form-select-sm text-body-tertiary f-w-600"
                      value="serviceHolder"
                    >
                      Service Holder
                    </option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </FormGroup>

          <FormGroup className="mb-0 checkbox-checked">
            <FormGroup className="checkbox-solid-info" check>
              <Input
                id="checkbox1"
                type="checkbox"
                checked={formData.checkbox1}
                onChange={handleInputChange}
              />
              <Label className="text-muted" htmlFor="checkbox1" check>
                {Agreewith}
              </Label>
              <a className="ms-3" href={Href}>
                {"Privacy Policy"}
              </a>
            </FormGroup>
            <Button color="primary" className="w-100 mt-3" block>
              {CreateAccount}
            </Button>
          </FormGroup>
          <SocialLinks logtext={"Already have an account?"} btntext={SignIn} />
        </Form>
      </div>
    </div>
  );
};
