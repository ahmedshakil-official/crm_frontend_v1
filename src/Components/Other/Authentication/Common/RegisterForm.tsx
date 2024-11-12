import {
  Agreewith,
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
import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { CommonLogo } from "./CommonLogo";
import { SocialLinks } from "./SocialLinks";

export const RegisterForm: React.FC<LoginFormProp> = ({ logoClass }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const toggle = () => setPasswordVisible(!isPasswordVisible);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    organization_name: "",
    user_type: "",
    checkbox1: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData({ ...formData, [id]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Attempting to register:", formData);
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Response received:", response);

      if (response.status === 200) {
        alert("Registration successful!");
      }
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Server responded with error:", error.response.data);
        alert(
          `Registration failed: ${
            error.response.data.message || "Please try again."
          }`
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("No response from server.");
      } else {
        console.error("Error in setup:", error.message);
        alert("An error occurred during registration setup.");
      }
    }

    setFormData({
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      password: "",
      organization_name: "",
      user_type: "",
      checkbox1: false,
    });
  };

  return (
    <div>
      <CommonLogo logoClass={logoClass} />
      <div className="login-main">
        <Form className="theme-form" onSubmit={handleSubmit}>
          <h2 className="text-center">
            {CreateYourAccount || "Create Your Account"}
          </h2>
          <p className="text-center">
            Enter your personal details to create an account
          </p>
          <FormGroup>
            <Col>
              <Label className="pt-0">{YourName || "Your Name"}</Label>
            </Col>
            <Row className="g-2">
              <Col xs="6">
                <Input
                  type="text"
                  id="first_name"
                  required
                  placeholder="First name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                />
              </Col>
              <Col xs="6">
                <Input
                  type="text"
                  id="last_name"
                  required
                  placeholder="Last name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Col>
              <Label>{Phone || "Phone"}</Label>
            </Col>
            <Input
              type="tel"
              id="phone"
              required
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Col>
              <Label>{EmailAddress || "Email Address"}</Label>
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
              <Label>{Password || "Password"}</Label>
            </Col>
            <div className="form-input position-relative">
              <Input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
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
                  <Label className="pt-0">
                    {OrganizationName || "Organization Name"}
                  </Label>
                  <Input
                    type="text"
                    id="organization_name"
                    required
                    placeholder="Organization Name"
                    value={formData.organization_name}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                  <Label className="pt-0">{UserType || "User Type"}</Label>
                  <Input
                    type="select"
                    id="user_type"
                    required
                    value={formData.user_type}
                    onChange={handleInputChange}
                    className="form-select-sm f-w-600  text-body-tertiary"
                    style={{ padding: "12px", fontSize: "13px" }}
                  >
                    <option
                      className="form-select-sm f-w-600  text-body-tertiary"
                      style={{ padding: "12px", fontSize: "13px" }}
                      value=""
                      disabled
                    >
                      Select user type
                    </option>
                    <option
                      className="form-select-sm f-w-600  text-body-tertiary"
                      style={{ padding: "12px", fontSize: "13px" }}
                      value="lead"
                    >
                      Lead
                    </option>
                    <option
                      className="form-select-sm f-w-600  text-body-tertiary"
                      style={{ padding: "12px", fontSize: "13px" }}
                      value="client"
                    >
                      Client
                    </option>
                    <option
                      className="form-select-sm f-w-600  text-body-tertiary"
                      style={{ padding: "12px", fontSize: "13px" }}
                      value="introducer"
                    >
                      Introducer
                    </option>
                    <option
                      className="form-select-sm f-w-600  text-body-tertiary"
                      style={{ padding: "12px", fontSize: "13px" }}
                      value="serviceHolder"
                    >
                      Service Holder
                    </option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup className="checkbox-checked">
            <FormGroup check>
              <Input
                id="checkbox1"
                type="checkbox"
                checked={formData.checkbox1}
                onChange={handleInputChange}
              />
              <Label className="text-muted" htmlFor="checkbox1" check>
                {Agreewith || "Agree with the terms"}
              </Label>
              <a className="ms-3" href={Href || "#"}>
                Privacy Policy
              </a>
            </FormGroup>
            <Button color="primary" className="w-100 mt-3">
              {/* {CreateAccount} */}
              Create Account
            </Button>
          </FormGroup>
          <SocialLinks
            logtext="Already have an account?"
            btntext={SignIn || "Sign In"}
          />
        </Form>
      </div>
    </div>
  );
};
