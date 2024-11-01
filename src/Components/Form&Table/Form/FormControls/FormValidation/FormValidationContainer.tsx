"use client";
import { Container, Row } from "reactstrap";
import { BrowserDefaults } from "./BrowserDefaults/BrowserDefaults";
import { TooltipFormValidation } from "./TooltipFormValidation/TooltipFormValidation";
import { ValidationForm } from "./ValidationForm/ValidationForm";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { FormControls, FormValidationTitle } from "@/Constant";

const FormValidationContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={FormValidationTitle} parent={FormControls} />
      <Container fluid>
        <Row>
          <TooltipFormValidation />
          <BrowserDefaults />
          <ValidationForm />
        </Row>
      </Container>
    </>
  );
};
export default FormValidationContainer;
