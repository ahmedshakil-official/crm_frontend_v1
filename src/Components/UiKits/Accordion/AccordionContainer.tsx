"use client";
import { Container, Row } from "reactstrap";
import { CollapesAccordion } from "./CollapesAccordion";
import { FlushAccordion } from "./FlushAccordion/FlushAccordion";
import { HorizontalAccordion } from "./HorizontalAccordion";
import { IconAccordion } from "./IconAccordion/IconAccordion";
import { MultipleCollapse } from "./MultipleCollapse/MultipleCollapse";
import { OutlineAccordion } from "./OutlineAccordion/OutlineAccordion";
import { SimpleAccordion } from "./SimpleAccordion/SimpleAccordion";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { AccordionTitle, UiKits } from "@/Constant";

const AccordionContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={AccordionTitle} parent={UiKits} />
      <Container fluid>
        <Row>
          <SimpleAccordion />
          <FlushAccordion />
          <MultipleCollapse />
          <IconAccordion />
          <OutlineAccordion />
          <HorizontalAccordion />
          <CollapesAccordion />
        </Row>
      </Container>
    </>
  );
};
export default AccordionContainer;
