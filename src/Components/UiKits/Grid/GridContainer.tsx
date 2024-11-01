"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { GridTitle, UiKits } from "@/Constant";
import { Container, Row } from "reactstrap";
import { GridColumn } from "./GridColumn/GridColumn";
import { GridOptions } from "./GridOptions/GridOptions";
import { HorizontalAlignment } from "./HorizontalAlignment/HorizontalAlignment";
import { Nesting } from "./Nesting/Nesting";
import { Offset } from "./Offset/Offset";
import { Order } from "./Order/Order";
import { VerticalAlignment } from "./VerticalAlignment/VerticalAlignment";

const GridContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={GridTitle} parent={UiKits} />
      <Container fluid>
        <Row>
          <GridOptions />
          <GridColumn />
          <VerticalAlignment />
          <HorizontalAlignment />
          <Nesting />
          <Order />
          <Offset />
        </Row>
      </Container>
    </>
  );
};
export default GridContainer;
