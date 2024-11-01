import React from "react";
import { Table } from "reactstrap";

const InvoiceTaxSection = () => {
  return (
    <tr>
      <td className="p-0">
        <Table borderless style={{ width: "100%" }}>
          <tbody>
            <tr style={{ display: "flex", justifyContent: "space-between", margin: "16px 0 24px 0", alignItems: "end" }}>
              <td style={{ display: "flex", gap: 10, padding: "0px" }}>
                <span style={{ fontSize: 16, fontWeight: 600 }}>Payment Teams : </span>
                <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 400, width: "55%" }}>This denotes a payment credit for a full month's supply.</span>
              </td>
              <td className="p-0">
                <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                  <li style={{ display: "flex", paddingBottom: 16 }}>
                    <span style={{ display: "block", width: 95 }}>Subtotal </span>
                    <span style={{ display: "block", width: 25 }}>:</span>
                    <span style={{ display: "block", width: 95, opacity: "0.9", fontWeight: 600 }}>$6100.00</span>
                  </li>
                  <li style={{ display: "flex", paddingBottom: 16 }}>
                    <span style={{ display: "block", width: 95 }}>Tax</span>
                    <span style={{ display: "block", width: 25 }}> :</span>
                    <span style={{ display: "block", width: 95, opacity: "0.9", fontWeight: 600 }}>$50.00</span>
                  </li>
                  <li style={{ display: "flex", paddingBottom: 20 }}>
                    <span style={{ display: "block", width: 95 }}>Discount </span>
                    <span style={{ display: "block", width: 25 }}> :</span>
                    <span style={{ display: "block", width: 95, opacity: "0.9", fontWeight: 600 }}>$30.00</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ display: "block", width: 95 }}>Total Due</span>
                    <span style={{ display: "block", opacity: "0.9", fontWeight: 600, padding: "12px 25px", borderRadius: 5, fontSize: 18 }}>$6120.00</span>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      </td>
    </tr>
  );
};

export default InvoiceTaxSection;
