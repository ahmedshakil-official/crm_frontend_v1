"use client";
import { Container, Row } from "reactstrap";
import TwoFactorAuthentication from "./TwoFactorAuthentication";
import EmailVerification from "./EmailVerification";
import { FormLayout, TwoFactor } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";

const TwoFactorContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={TwoFactor} parent={FormLayout} />
      <Container fluid>
        <Row>
          <TwoFactorAuthentication />
          <EmailVerification />
        </Row>
      </Container>
    </>
  );
};

export default TwoFactorContainer;
