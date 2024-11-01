import React from "react";

const InvoiceTableHead = () => {
  return (
    <thead>
      <tr style={{ background: "#308e87" }}>
        <th style={{ padding: "18px 15px", textAlign: "left" }}>
          <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>Description</span>
        </th>
        <th style={{ padding: "18px 15px", textAlign: "center", borderInline: "3px solid #fff" }}>
          <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>Qty</span>
        </th>
        <th style={{ padding: "18px 15px", textAlign: "center", borderRight: "3px solid #fff" }}>
          <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>Price</span>
        </th>
        <th style={{ padding: "18px 15px", textAlign: "center" }}>
          <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>Subtotal</span>
        </th>
      </tr>
    </thead>
  );
};

export default InvoiceTableHead;
