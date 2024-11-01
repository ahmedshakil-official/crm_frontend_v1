"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { FormLayout, StepFormWizard } from "@/Constant";
import { Container, Row } from "reactstrap";
import BusinessVerticalWizard from "./BusinessVerticalWizard/BusinessVerticalWizard";
import CustomHorizontalWizard from "./CustomHorizontalWizard/CustomHorizontalWizard";

const FormWizardTwoContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={StepFormWizard} parent={FormLayout}/>
      <Container fluid>
        <Row>
          <CustomHorizontalWizard heading="Custom horizontal wizard" xs={12} />
          <BusinessVerticalWizard heading="Business vertical wizard" firstXl={3} secondXl={9} horizontalWizardClass="vertical-options" />
          <CustomHorizontalWizard differentId heading="Custom vertical wizard" horizontalWizardClass="vertical-options vertical-variations" firstXl={3} secondXl={9} />
          <BusinessVerticalWizard heading="Business horizontal wizard" xs={12} />
        </Row>
      </Container>
    </>
  );
};

export default FormWizardTwoContainer;
