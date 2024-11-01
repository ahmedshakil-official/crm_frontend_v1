import SVG from "@/CommonComponent/SVG";
import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Table } from "reactstrap";
import { InvoiceHeadData } from "./InvoiceHeadData";

const InvoiceHead = () => {
  return (
    <tr>
      <td className="p-0">
        <Table borderless style={{ width: "100%" }}>
          <tbody>
            <tr style={{ padding: "28px 0 5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <td className="p-0 border-bottom-0">
                <Image width={90} height={27} className="img-fluid for-light" src={`${ImagePath}/logo/logo-dark.png`} alt="logo-light" />
                <Image width={90} height={27} className="img-fluid for-dark" src={`${ImagePath}/logo/logo1.png`} alt="logo-dark" />
              </td>
              <td className="p-0 border-bottom-0">
                <ul style={{ listStyle: "none", display: "flex", alignItems: "center", background: "linear-gradient(291deg,  #308e87 21.2%, #308e87 83.92%)", padding: "31px 80px", borderBottomLeftRadius: 100, gap: 28 }}>
                  <li>
                    <SVG className="stroke-icon" iconId="call" style={{ height: 14, width: 14, fill: "#fff", marginRight: 10 }} />
                    <span style={{ color: "#FFFFFF", fontWeight: 500, fontSize: 16 }}>(239) 555-0108</span>
                  </li>
                  <li style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.3)", borderRight: "1px solid rgba(255, 255, 255, 0.3)", padding: "0 22px" }}>
                    <SVG iconId="email-box" style={{ height: 16, width: 16, fill: "#fff", marginRight: 10 }} />
                    <span style={{ color: "#FFFFFF", fontWeight: 500, fontSize: 16 }}>crm@gmail.com</span>
                  </li>
                  <li>
                    <SVG iconId="web" style={{ height: 16, width: 16, fill: "#fff", marginRight: 10 }} />
                    <span style={{ color: "#FFFFFF", fontWeight: 500, fontSize: 16 }}>Website: www.crm.com</span>
                  </li>
                </ul>
              </td>
            </tr>
            <InvoiceHeadData/>
          </tbody>
        </Table>
      </td>
    </tr>
  );
};

export default InvoiceHead;
