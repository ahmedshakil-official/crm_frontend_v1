"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import ClipboardOnTextInput from "./ClipboardOnTextInput";
import ClipboardOnTextarea from "./ClipboardOnTextarea";
import ClipboardOnParagraph from "./ClipboardOnParagraph";
import CopyPortionFromParagraph from "./CopyPortionFromParagraph";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Clipboard, FormWidgets } from "@/Constant";

const ClipBoardContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Clipboard} parent={FormWidgets} />
      <Container fluid>
        <Row>
          <ClipboardOnTextInput />
          <ClipboardOnTextarea />
          <ClipboardOnParagraph />
          <CopyPortionFromParagraph />
        </Row>
      </Container>
    </>

  );
};

export default ClipBoardContainer;
