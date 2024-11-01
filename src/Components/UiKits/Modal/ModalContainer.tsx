"use client";
import { Container, Row } from "reactstrap";
import { BasicModal } from "./BasicModal/BasicModal";
import { CenteredModal } from "./CenteredModal/CenteredModal";
import { CustomModals } from "./CustomModals";
import { FullscreenModal } from "./FullscreenModal/FullscreenModal";
import { NestedModal } from "./NestedModal";
import { SizeModal } from "./SizeModal/SizeModal";
import { StaticModal } from "./StaticModal";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { ModalTitle, UiKits } from "@/Constant";

const ModalContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ModalTitle} parent={UiKits} />
      <Container fluid>
        <Row className="g-lg-3">
          <BasicModal />
          <SizeModal />
          <FullscreenModal />
          <CenteredModal />
          <NestedModal />
          <StaticModal />
          <CustomModals />
        </Row>
      </Container>
    </>
  );
};
export default ModalContainer;
