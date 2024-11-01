"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import NumberingWizard from "./NumberingWizard/NumberingWizard";
import StudentValidationForm from "./StudentValidationForm/StudentValidationForm";
import VerticalValidationWizard from "./VerticalValidationWizard/VerticalValidationWizard";
import ShippingForm from "./ShippingForm/ShippingForm";
import { FormLayout, FormWizard } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";

const FormWizardOneContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={FormWizard} parent={FormLayout}/>
      <Container fluid>
        <Row>
          <NumberingWizard />
          <StudentValidationForm />
          <VerticalValidationWizard />
          <ShippingForm />
        </Row>
      </Container>
    </>
  );
};

export default FormWizardOneContainer;
