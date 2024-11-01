import { Invoice5FourData, InvoiceFourData } from "@/Data/Applications/Ecommerce/EcommerceData";

const InvoiceTableBody = () => {
  return (
    <tbody>
      {InvoiceFourData.map((data, i) => (
        <tr key={i}>
          <td style={{ width: "12%", textAlign: "center", borderBottom: "1px dashed rgba(82, 82, 108, 0.2)", background: "rgba(48, 142, 135 , 0.1)" }}>
            <span style={{ opacity: "0.8", fontWeight: 600 }}>{i + 1}</span>
          </td>
          <td style={{ padding: 16, borderBottom: "1px dashed rgba(82, 82, 108, 0.2)" }}>
            <h4 style={{ fontWeight: 600, margin: "4px 0px", fontSize: 18, color: "#308e87" }}>{data.title}</h4>
            <span style={{ opacity: "0.8", fontSize: 16 }}>{data.detail}</span>
          </td>
          <td style={{ width: "12%", textAlign: "center", borderBottom: "1px dashed rgba(82, 82, 108, 0.2)", background: "rgba(48, 142, 135 , 0.1)" }}>
            <span style={{ fontWeight: 600 }}>${data.price}.00</span>
          </td>
          <td style={{ width: "12%", textAlign: "center", borderBottom: "1px dashed rgba(82, 82, 108, 0.2)" }}>
            <span style={{ fontWeight: 600 }}>{data.quantity}</span>
          </td>
          <td style={{ width: "12%", textAlign: "center", borderBottom: "1px dashed rgba(82, 82, 108, 0.2)", background: "rgba(48, 142, 135 , 0.1)" }}>
            <span style={{ color: "#308e87", fontWeight: 600, opacity: "0.9" }}>${data.total}.00</span>
          </td>
        </tr>
      ))}
      {Invoice5FourData.map((data, index) => (
        <tr key={index} className="border-bottom-0">
          <td className="border-bottom-0"> </td><td className="border-bottom-0"> </td> <td className="border-bottom-0"> </td>
          <td className="border-bottom-0" style={{ textAlign: "center", padding: "0px" }}>
            <span style={{ opacity: 0.8, fontWeight: 600 }}>{data.title}</span>
          </td>
          <td className="border-bottom-0" style={{ textAlign: "center", display: "block", padding: "3px" }}>
            <span style={{ fontWeight: 600, opacity: 0.9 }}>{data.price}</span>
          </td>
        </tr>
      ))}
      <tr>
        <td className="border-bottom-0"> </td><td className="border-bottom-0"> </td> <td className="border-bottom-0"> </td>
        <td className="border-bottom-0" style={{ width: "12%", textAlign: "center", padding: "0px" }}>
          <span style={{ opacity: 0.8, fontWeight: 600 }}>Total Due</span>
        </td>
        <td className="border-bottom-0" style={{ textAlign: "center", padding: "0px" }}>
          <span style={{ color: "#dee2e6", fontWeight: 600, opacity: 0.9, background: "#308e87", padding: "12px 37px", marginTop: "0px", display: "block" }}>$6120.00</span>
        </td>
      </tr>
    </tbody>
  );
};
export default InvoiceTableBody;
