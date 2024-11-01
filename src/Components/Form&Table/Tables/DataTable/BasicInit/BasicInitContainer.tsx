"use client";
import { Container, Row } from "reactstrap";
import { ZeroConfigurationTable } from "./ZeroConfigurationTable";
import StateSaving from "./StateSaving/StateSaving";
import ScrollVerticalDynamicHeight from "./ScrollVerticalDynamicHeight";
import { DataTables, BasicDataTables } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";

const BasicInitContainer = () => {
  return (
    <>
     <Breadcrumbs mainTitle={BasicDataTables} parent={DataTables}/>
      <Container fluid>
        <Row>
          <ZeroConfigurationTable />
          <StateSaving />
          <ScrollVerticalDynamicHeight />
        </Row>
      </Container>
    </>
  );
};

export default BasicInitContainer;
