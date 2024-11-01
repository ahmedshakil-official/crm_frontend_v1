import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Table } from "reactstrap";

export const InvoiceHeadSection = () => {
  return (
    <td className="">
      <Table borderless style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td className="p-0">
              <Image width={90} height={27} className="img-fluid for-light" src={`${ImagePath}/logo/logo-dark.png`} alt="logo-light" />
              <Image width={90} height={27} className="img-fluid for-dark" src={`${ImagePath}/logo/logo1.png`} alt="logo-dark" />
              <address style={{ opacity: "0.8", width: "40%", marginTop: 10, fontStyle: "normal" }}>
                <span style={{ fontSize: 18, lineHeight: "1.5", fontWeight: 500 }}>1982 Harvest Lane New York, NY12210 United State </span>
              </address>
            </td>
            <td style={{ opacity: "0.8", textAlign: "end", padding: "0px" }}>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 500 }}>Email : crm@gmail.com</span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 500 }}>Website: www.crm.com</span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 500 }}>Contact No : (316) 000-0000</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};
