"use client";
import { Container, Row } from "reactstrap";
import { ColorsScheme } from "./ColorsScheme";
import { DefaultToast } from "./DefaultToast";
import { LiveToast } from "./LiveToast";
import { StackingToasts } from "./StackingToasts";
import { ToastPlacement } from "./ToastPlacement";
import { TranslucentToasts } from "./TranslucentToasts";
import { UniqueToast } from "./UniqueToast";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { BonusUi, ToastsTitle } from "@/Constant";

const ToastsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ToastsTitle} parent={BonusUi} />
      <Container fluid>
        <Row>
          <LiveToast />
          <ColorsScheme />
          <StackingToasts />
          <TranslucentToasts />
          <DefaultToast />
          <UniqueToast />
          <ToastPlacement />
        </Row>
      </Container>
    </>
  );
};
export default ToastsContainer;
