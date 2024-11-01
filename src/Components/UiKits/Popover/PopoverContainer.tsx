"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { PopoverTitle, UiKits } from "@/Constant";
import { Container, Row } from "reactstrap";
import { BasicPopover } from "./BasicPopover/BasicPopover";
import { PopoverDirection } from "./PopoverDirection/PopoverDirection";
import { PopoverOffset } from "./PopoverOffset/PopoverOffset";

const PopoverContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={PopoverTitle} parent={UiKits} />
      <Container fluid>
        <Row className="popover-main">
          <BasicPopover />
          <PopoverDirection />
          <PopoverOffset />
        </Row>
      </Container>
    </>
  );
};
export default PopoverContainer;
