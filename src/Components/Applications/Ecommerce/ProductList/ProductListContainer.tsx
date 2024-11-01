"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Ecommerce, ProductList, SearchTableButton } from "@/Constant";
import { ProductListTableData, ProductListTableDataColumn } from "@/Data/Applications/Ecommerce/EcommerceData";
import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Container, Input, Label, Row } from "reactstrap";
import { StyleSheetManager } from "styled-components";
import { CollapseFilterData } from "./CollapseFilterData";
import { ProductListFilterHeader } from "./ProductListFilterHeader";

const ProductListContainer = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = ProductListTableData.filter((item) => {
    return Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase()));
  });

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "align" && prop !== "grow"}>
      <Breadcrumbs mainTitle={ProductList} parent={Ecommerce} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="list-product-header">
                  <ProductListFilterHeader />
                  <CollapseFilterData />
                </div>
                <div className="list-product">
                  <div className="table-responsive">
                    <DataTable className="custom-scrollbar" data={filteredItems} columns={ProductListTableDataColumn} striped highlightOnHover pagination selectableRows subHeader subHeaderComponent={subHeaderComponentMemo} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </StyleSheetManager>
  );
};

export default ProductListContainer;
