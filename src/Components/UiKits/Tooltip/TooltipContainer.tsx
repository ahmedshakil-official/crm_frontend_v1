"use client";
import { Container, Row } from "reactstrap";
import { BasicTooltip } from "./BasicTooltip";
import { ColoredTooltip } from "./ColoredTooltip";
import { TooltipDirection } from "./TooltipDirection";
import { HtmlTooltip } from "./HtmlTooltip";
import { FilledTooltip } from "./FilledTooltip";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { TooltipTitle, UiKits } from "@/Constant";

const TooltipContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={TooltipTitle} parent={UiKits} />
      <Container fluid>
        <Row>
          <BasicTooltip />
          <ColoredTooltip />
          <TooltipDirection />
          <HtmlTooltip />
          <FilledTooltip />
        </Row>
      </Container>
    </>
  );
};
export default TooltipContainer;
