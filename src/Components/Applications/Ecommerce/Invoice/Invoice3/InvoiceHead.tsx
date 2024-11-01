import { ImagePath } from "@/Constant";
import Image from "next/image";
import React from "react";
import { Table } from "reactstrap";

const InvoiceHead = () => {
  return (
    <tr>
      <td className="p-0">
        <Table borderless style={{ width: "100%", backgroundImage: `url(${ImagePath}/email-template/invoice-3/bg-0.png)`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: 10 }}>
          <tbody>
            <tr>
              <td style={{ padding: "30px 0px 30px 30px" }}>
                <Image width={90} height={27} src={`${ImagePath}/logo/logo-dark.png`} alt="logo" />
                <address className="invoice-text" style={{ opacity: "0.8", width: "36%", marginTop: 10, fontStyle: "normal" }}>
                  <span style={{ fontSize: 18, lineHeight: "1.5", fontWeight: 500 }}>1982 Harvest Lane New York, NY12210 United State</span>
                </address>
              </td>
              <td style={{ textAlign: "end", padding: "30px 30px 30px 0" }}>
                <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, color: "#fff", fontWeight: 700 }}>Invoice</span>
                <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, color: "#fff", fontWeight: 500 }}>Receipt #1923195</span>
                <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, color: "#fff", fontWeight: 500 }}>May 02, 2024</span>
              </td>
            </tr>
          </tbody>
        </Table>
      </td>
    </tr>
  );
};

export default InvoiceHead;
