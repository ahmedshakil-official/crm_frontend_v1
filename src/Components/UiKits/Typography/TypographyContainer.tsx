"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { TypographyTitle, UiKits } from "@/Constant";
import { Container, Row } from "reactstrap";
import { BlockQuotesCard } from "./BlockQuotesCard";
import { ColoredHeadings } from "./ColoredHeadings";
import { DisplayHeading } from "./DisplayHeading";
import { FontWeight } from "./FontWeight";
import { Headings } from "./Headings";
import { InlineTextElements } from "./InlineTextElements";
import { Listing } from "./Listing";
import { TextColor } from "./TextColor";
const TypographyContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={TypographyTitle} parent={UiKits} />
      <Container fluid>
        <Row>
          <Headings />
          <ColoredHeadings />
          <FontWeight />
          <Listing />
          <DisplayHeading />
          <InlineTextElements />
          <TextColor />
          <BlockQuotesCard />
        </Row>
      </Container>
    </>
  );
};
export default TypographyContainer;
