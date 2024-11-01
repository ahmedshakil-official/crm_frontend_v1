import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Table } from "reactstrap";

const InvoiceHeader = () => {
  return (
    <td className="p-0">
      <Table className="logo-wrappper" style={{ width: "100%" }} borderless>
        <tbody>
          <tr>
            <td className="p-0">
              <Image width={90} height={27} className="img-fluid for-light" src={`${ImagePath}/logo/logo-dark.png`} alt="logo" />
              <Image width={90} height={27} className="img-fluid for-dark" src={`${ImagePath}/logo/logo1.png`} alt="logo" />
              <span style={{ opacity: "0.8", display: "block", marginTop: 10 }}>202-555-0258</span>
            </td>
            <td className="address p-0" style={{ textAlign: "right", opacity: "0.8", width: "16%" }}>
              <span>1982 Harvest Lane New York, NY12210 United State</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceHeader;
