import { Table } from "reactstrap";
import InvoiceTableBody from "./InvoiceTableBody";

const InvoiceTableHead = () => {
  return (
    <Table borderless style={{ width: "100%", borderSpacing: 0 }}>
      <thead>
        <tr style={{ background: "#308e87" }}>
          <th style={{ padding: "18px 15px", textAlign: "center", position: "relative", borderTopLeftRadius: "10px" }}>
            <span style={{ color: "#fff", fontSize: "18px", fontWeight: 600 }}>No.</span>
          </th>
          <th style={{ padding: "18px 16px", textAlign: "left" }}>
            <span style={{ color: "#fff", fontSize: "18px", fontWeight: 600 }}>Description</span>
          </th>
          <th style={{ padding: "18px 15px", textAlign: "center" }}>
            <span style={{ color: "#fff", fontSize: "18px", fontWeight: 600 }}>Unit Price</span>
          </th>
          <th style={{ padding: "18px 15px", textAlign: "center" }}>
            <span style={{ color: "#fff", fontSize: "18px", fontWeight: 600 }}>Quantity</span>
          </th>
          <th style={{ padding: "18px 15px", textAlign: "center", position: "relative", borderTopRightRadius: "10px" }}>
            <span style={{ color: "#fff", fontSize: "18px", fontWeight: 600 }}>Subtotal</span>
          </th>
        </tr>
      </thead>
      <InvoiceTableBody />
    </Table>
  );
};

export default InvoiceTableHead;
