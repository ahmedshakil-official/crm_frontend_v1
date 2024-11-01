"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import CommonOrders from "./OrderHistoryData/CommonOrders";
import DataTableOrderHistory from "./OrderHistoryData/DataTableOrderHistory";
import Breadcrumbs from "@/CommonComponent/Breadcrumbs";
import { Cancelled, CancelledOrder, Ecommerce, NewOrder, Processing, RecentOrders, Shipped, ShippedOrder } from "@/Constant";

const OrderHistoryContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={RecentOrders} parent={Ecommerce} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <CommonOrders title={NewOrder} btn={Processing} color={"primary"} />
            <CommonOrders title={ShippedOrder} btn={Shipped} color={"success"} />
            <CommonOrders title={CancelledOrder} btn={Cancelled} color={"danger"} />
            <DataTableOrderHistory />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderHistoryContainer;
