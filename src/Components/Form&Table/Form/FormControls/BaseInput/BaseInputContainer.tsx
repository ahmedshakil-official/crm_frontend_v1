"use client";
import { Container, Row } from "reactstrap";
import { Sizing } from "./Sizing/Sizing";
import { BasicInput } from "./BasicInput/BasicInput";
import { FlatStyle } from "./FlatStyle/FlatStyle";
import { EdgesStyle } from "./EdgesStyle/EdgesStyle";
import { RaiseStyle } from "./RaiseStyle/RaiseStyle";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { BaseInputs, FormControls } from "@/Constant";
import { BasicForm } from "./BasicForm/BasicForm";

const BaseInputContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={BaseInputs} parent={FormControls} />
      <Container fluid>
        <Row>
          <BasicForm />
          <Sizing />
          <BasicInput />
          <FlatStyle />
          <EdgesStyle />
          <RaiseStyle />
        </Row>
      </Container>
    </>
  );
};

export default BaseInputContainer;
