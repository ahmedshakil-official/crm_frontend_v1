"use client";
import { Container, Row } from "reactstrap";
import AjaxSourcedData from "./AjaxSourcedData";
import HtmlSourcedData from "./HtmlSourcedData";
import JavaScriptSourcedData from "./JavaScriptSourcedData";
import ServerSideProcessing from "./ServerSideProcessing";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { DATASourceDataTables, DataTables } from "@/Constant";

const DataSourceContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={DATASourceDataTables} parent={DataTables}/>
      <Container fluid>
      <Row>
        <HtmlSourcedData />
        <AjaxSourcedData />
        <JavaScriptSourcedData />
        <ServerSideProcessing />
      </Row>
    </Container>
    </>
    
  );
};

export default DataSourceContainer;
  