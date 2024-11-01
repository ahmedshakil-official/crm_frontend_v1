import React from "react";
import { Table } from "reactstrap";
import InvoiceTableBody from "./InvoiceTableBody";

const InvoiceTableHead = () => {
  return (
    <Table borderless style={{ width: "100%", borderSpacing: 0 }}>
      <thead>
        <tr style={{ background: "#308e87" }}>
          <th style={{ padding: "18px 15px", textAlign: "left", position: "relative", borderTopLeftRadius: 10 }}>
            <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>Description</span>
          </th>
          <th style={{ padding: "18px 15px", textAlign: "center" }}>
            <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>Unite Price</span>
          </th>
          <th style={{ padding: "18px 15px", textAlign: "center" }}>
            <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>Quantity</span>
          </th>
          <th style={{ padding: "18px 15px", textAlign: "center", position: "relative", borderTopRightRadius: 10 }}>
            <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>Subtotal</span>
          </th>
        </tr>
      </thead>
      <InvoiceTableBody />
    </Table>
  );
};

export default InvoiceTableHead;
