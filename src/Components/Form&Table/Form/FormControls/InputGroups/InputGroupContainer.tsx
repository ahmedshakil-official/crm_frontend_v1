"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { FormControls, InputGroupTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import { BasicInputGroups } from "./BasicInputGroups/BasicInputGroups";
import { ButtonAddons } from "./ButtonAddons/ButtonAddons";
import { ButtonsWithDropdowns } from "./ButtonsWithDropdowns/ButtonsWithDropdowns";
import { CheckboxesAndRadios } from "./CheckboxesAndRadios/CheckboxesAndRadios";
import { CustomFileInput } from "./CustomFileInput/CustomFileInput";
import { CustomForms } from "./CustomForms/CustomForms";
import { MultipleInputs } from "./MultipleInputs/MultipleInputs";
import { SegmentedButtons } from "./SegmentedButtons/SegmentedButtons";
import { Sizing } from "./Sizing/Sizing";
import { VariationAddons } from "./VariationAddons/VariationAddons";

const InputGroupsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={InputGroupTitle} parent={FormControls} />
      <Container fluid>
        <Row>
          <ButtonAddons />
          <CustomForms />
          <CustomFileInput />
          <ButtonsWithDropdowns />
          <SegmentedButtons />
          <CheckboxesAndRadios />
          <Sizing />
          <MultipleInputs />
          <BasicInputGroups />
          <VariationAddons />
        </Row>
      </Container>
    </>
  );
};
export default InputGroupsContainer;
