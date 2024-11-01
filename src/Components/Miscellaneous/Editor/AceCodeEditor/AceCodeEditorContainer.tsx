"use client";
import { Container, Row } from "reactstrap";
import { CssMode } from "./CssMode";
import { HtmlMode } from "./HtmlMode";
import { JavascriptMode } from "./JavascriptMode";
import { PhpMode } from "./PhpMode";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { AceCodeEditorTitle, EditorTitle } from "@/Constant";

const AceCodeEditorContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={AceCodeEditorTitle} parent={EditorTitle} />
      <Container fluid>
        <Row>
          <JavascriptMode />
          <HtmlMode />
          <CssMode />
          <PhpMode />
        </Row>
      </Container>
    </>
  );
};
export default AceCodeEditorContainer;
