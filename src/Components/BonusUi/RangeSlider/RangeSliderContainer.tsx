"use client";
import { Container, Row } from "reactstrap";
import DefaultRangeSlider from "./DefaultRangeSlider";
import MinMaxValue from "./MinMaxValue";
import NegativeValue from "./NegativeValue";
import Disabled from "./Disabled";
import Prefix from "./Prefix";
import FormateLabel from "./FormateLabel";
import { BonusUi, RangeSlider } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";

const RangeSliderContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={RangeSlider} parent={BonusUi} />
      <Container fluid>
      <Row>
        <DefaultRangeSlider />
        <MinMaxValue />
        <NegativeValue />
        <Disabled />
        <Prefix />
        <FormateLabel />
      </Row>
    </Container>
    </>
   
  );
};

export default RangeSliderContainer;
