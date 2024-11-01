"use client";
import { Container, Row } from "reactstrap";
import BasicTableBorderBottomColor from "./BasicTableBorderBottomColor";
import InverseTable from "./InverseTable";
import { HoverableRows } from "./HoverableRows";
import { InverseTablePrimary } from "./InverseTablePrimary";
import { CaptionTable } from "./CaptionTable";
import { TableHeadOptions } from "./TableHeadOptions";
import { StripedRowInverseTable } from "./StripedRowInverseTable";
import { BreakPointSpecific } from "./BreakPointSpecific";
import { ResponsiveLightBackground } from "./ResponsiveLightBackground";
import { SizingTables } from "./SizingTables";
import { CustomColorHoverStripped } from "./CustomColorHoverStripped";
import { DashedBorder } from "./DashedBorder";
import { ReactstrapTable, ReactstrapBasicTable } from "@/Constant";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";

const BasicTableContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ReactstrapBasicTable} parent={ReactstrapTable} />
      <Container fluid className="basic_table">
        <Row>
          <BasicTableBorderBottomColor />
          <InverseTable />
          <HoverableRows />
          <InverseTablePrimary />
          <CaptionTable />
          <TableHeadOptions />
          <StripedRowInverseTable />
          <BreakPointSpecific />
          <ResponsiveLightBackground />
          <SizingTables />
          <CustomColorHoverStripped />
          <DashedBorder />
        </Row>
      </Container>
    </>
  );
};

export default BasicTableContainer;
