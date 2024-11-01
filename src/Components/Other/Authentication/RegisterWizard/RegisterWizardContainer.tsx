"use client";
import { useState } from "react";
import { Col, Container, Progress, Row } from "reactstrap";
import { RegisterWizardForm } from "./RegisterWizardForm";
import { RegisterWizardList } from "./RegisterWizardList";
import { SignUpAccount } from "@/Constant";

const RegisterWizardContainer = () => {
  const [level, setLevel] = useState(1);
  const calculateProgressBarValue = () => (level === 1 ? 15 : (level - 1) * 35);

  return (
    <Container className="wizard-4" fluid>
      <Row>
        <Col lg="3" md="4" className="position-relative bg-color">
          <RegisterWizardList level={level} />
        </Col>
        <Col lg="9" md="8" className="p-0">
          <div className="step-container login-card">
            <div>
              <div className="wizard-title text-center">
                <h2>{SignUpAccount}</h2>
                <h5 className="text-muted mb-4">{"Enter your email & password to login"}</h5>
              </div>
              <div className="login-main">
                <Progress value={calculateProgressBarValue()} />
                <RegisterWizardForm setLevel={setLevel} level={level} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default RegisterWizardContainer;
