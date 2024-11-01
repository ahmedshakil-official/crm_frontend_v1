import React from "react";
import { Table } from "reactstrap";

const InvoiceAmountSection = () => {
  return (
    <tr>
      <td className="p-0 border-bottom">
        <Table borderless style={{ width: "100%" }}>
          <tbody>
            <tr style={{ display: "flex", justifyContent: "space-between", margin: "28px 0", alignItems: "center" }}>
              <td className="p-0">
                <span style={{ fontSize: 16, fontWeight: 600, opacity: "0.8" }}>BANK TRANSFER</span>
                <h4 style={{ fontWeight: 600, margin: "12px 0 5px 0", fontSize: 18, color: "#006666" }}>Leslie Alexander</h4>
                <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400 }}>Bank Account : 0981234098765</span>
                <span style={{ lineHeight: "1.6", fontSize: 18, fontWeight: 400 }}>Code : LEF098756</span>
              </td>
              <td className="p-0">
                <span style={{ fontSize: 16, fontWeight: 600, opacity: "0.8" }}>TOTAL AMOUNT</span>
                <h4 style={{ fontWeight: 600, margin: "12px 0 5px 0", fontSize: 26, color: "#006666" }}>$175.00</h4>
                <span style={{ fontSize: 16, fontWeight: 400, lineHeight: "1.5" }}>All Taxes included </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </td>
    </tr>
  );
};

export default InvoiceAmountSection;
