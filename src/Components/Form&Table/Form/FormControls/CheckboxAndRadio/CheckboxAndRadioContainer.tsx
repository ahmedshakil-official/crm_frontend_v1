"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { CheckboxAndRadioTitle, FormControls } from "@/Constant";
import { Container, Row } from "reactstrap";
import { AnimatedButtons } from "./AnimatedButtons/AnimatedButtons";
import { BasicRadioAndCheckbox } from "./BasicRadioAndCheckbox/BasicRadioAndCheckbox";
import { CustomCheckbox } from "./CustomCheckbox/CustomCheckbox";
import { CustomRadio } from "./CustomRadio/CustomRadio";
import { DefaultCheckbox } from "./DefaultCheckbox/DefaultCheckbox";
import { DefaultRadio } from "./DefaultRadio/DefaultRadio";
import { DefaultSwitches } from "./DefaultSwitches/DefaultSwitches";
import { ImagesWithCheckbox } from "./ImagesWithCheckbox/ImagesWithCheckbox";
import { ImagesWithRadio } from "./ImagesWithRadio/ImagesWithRadio";
import { InlineInputTypes } from "./InlineInputTypes/InlineInputTypes";
import { OutlinedCheckboxStyles } from "./OutlinedCheckboxStyles/OutlinedCheckboxStyles";
import { RadioToggleButtons } from "./RadioToggleButtons/RadioToggleButtons";

const CheckboxAndRadioContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={CheckboxAndRadioTitle} parent={FormControls} />
      <Container fluid>
        <Row>
          <DefaultCheckbox />
          <CustomCheckbox />
          <DefaultRadio />
          <ImagesWithCheckbox />
          <ImagesWithRadio />
          <CustomRadio />
          <DefaultSwitches />
          <InlineInputTypes />
          <AnimatedButtons />
          <BasicRadioAndCheckbox />
          <RadioToggleButtons />
          <OutlinedCheckboxStyles />
        </Row>
      </Container>
    </>
  );
};
export default CheckboxAndRadioContainer;
