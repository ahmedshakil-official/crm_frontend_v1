"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import AddRows from "./AddRows";
import ChildRows from "./ChildRows/ChildRows";
import RowSelectionAndDeletion from "./RowSelectionAndDeletion/RowSelectionAndDeletion";
import CustomFiltering from "./CustomFiltering/CustomFiltering";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { APIDataTables, DataTables } from "@/Constant";

const ApiTableContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={APIDataTables} parent={DataTables}/>
      <Container fluid>
      <Row>
        <AddRows />
        <ChildRows />
        <RowSelectionAndDeletion />
        <CustomFiltering />
      </Row>
    </Container>
    </>
    
  );
};

export default ApiTableContainer;
