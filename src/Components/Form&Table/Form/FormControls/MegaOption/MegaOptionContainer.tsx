"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { FormControls, MegaOptions } from "@/Constant";
import { Container, Row } from "reactstrap";
import DefaultStyle from "./DefaultStyle/DefaultStyle";
import HorizontalStyle from "./HorizontalStyle/HorizontalStyle";
import InlineStyle from "./InlineStyle/InlineStyle";
import OfferStyleBorder from "./OfferStyleBorder/OfferStyleBorder";
import SolidBorderStyle from "./SolidBorderStyle/SolidBorderStyle";
import VariationCheckbox from "./VariationCheckbox/VariationCheckbox";
import VariationRadio from "./VariationRadio";
import VerticalStyle from "./VerticalStyle/VerticalStyle";
import WithoutBordersStyle from "./WithoutBordersStyle/WithoutBordersStyle";

const MegaOptionContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={MegaOptions} parent={FormControls} />
      <Container fluid>
        <Row>
          <VariationRadio />
          <VariationCheckbox />
          <DefaultStyle />
          <WithoutBordersStyle />
          <SolidBorderStyle />
          <OfferStyleBorder />
          <InlineStyle />
          <VerticalStyle />
          <HorizontalStyle />
        </Row>
      </Container>
    </>
  );
};

export default MegaOptionContainer;
