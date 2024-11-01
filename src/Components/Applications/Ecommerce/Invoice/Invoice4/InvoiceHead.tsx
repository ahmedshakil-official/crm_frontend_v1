import { ImagePath } from "@/Constant";
import Image from "next/image";
import React from "react";
import { Table } from "reactstrap";

const InvoiceHead = () => {
  return (
    <tr>
      <td className="p-0">
        <Table borderless style={{ width: "100%" }}>
          <tbody>
            <tr style={{ padding: "28px 0 5px", display: "flex", justifyContent: "space-between" }}>
              <td className="p-0">
                <h4 style={{ fontSize: 42, fontWeight: 600, color: "#308e87", margin: 0 }}>INVOICE</h4>
                <ul style={{ listStyle: "none", display: "flex", gap: 15, padding: 0, margin: "20px 0" }}>
                  <li className="invoice-text">
                    <span style={{ fontSize: 18, fontWeight: 600, opacity: "0.8" }}>Invoice to :</span>
                  </li>
                  <li className="invoice-text">
                    <span style={{ fontWeight: 600, fontSize: 18, display: "block", color: "#308e87", marginBottom: 8 }}>Brooklyn Simmons</span>
                    <span style={{ width: "75%", display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
                    <span style={{ lineHeight: "1.9", fontSize: 18, fontWeight: 400, opacity: "0.8", display: "block" }}>Phone : (219) 555-0114</span>
                    <span style={{ lineHeight: "1.7", fontSize: 18, fontWeight: 400, opacity: "0.8", display: "block" }}>Email : yourmail@themesforest.com</span>
                    <span style={{ lineHeight: "1.7", fontSize: 18, fontWeight: 400, opacity: "0.8", display: "block" }}>Website: www.websites.com</span>
                  </li>
                </ul>
              </td>
              <td className="p-0">
                <Image width={90} height={27} className="img-fluid for-light" src={`${ImagePath}/logo/logo-dark.png`} alt="logo-light" />
                <Image width={90} height={27} className="img-fluid for-dark" src={`${ImagePath}/logo/logo1.png`} alt="logo-dark" />
                <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }}>2118 Thornridge Cir. Syracuse, Connecticut 35624, United State</span>
                <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }}>Phone : (239) 000-0000</span>
                <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }}>Email : crm@gmail.com</span>
                <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }}>Website: www.crm.com</span>
              </td>
            </tr>
          </tbody>
        </Table>
      </td>
    </tr>
  );
};

export default InvoiceHead;
