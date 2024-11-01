const InvoiceAddSection = () => {
  return (
    <>
      <tr>
        <td className="p-0">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr style={{ padding: "28px 0", display: "flex", justifyContent: "space-between" }}>
                <td className="p-0">
                  <span style={{ fontSize: 16, fontWeight: 500, opacity: "0.8" }}>CLIENT DETAILS</span>
                  <h4 style={{ fontWeight: 600, margin: "12px 0 5px 0", fontSize: 18 }}>Brooklyn Simmons</h4>
                  <span style={{ width: "54%", display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }}>2118 Thornridge Cir. Syracuse, Connecticut 35624, United State</span>
                  <span style={{ lineHeight: 2, fontSize: 18, fontWeight: 400, opacity: "0.8" }}>Phone : (239) 555-0108</span>
                </td>
                <td className="p-0">
                  <span style={{ fontSize: 16, fontWeight: 500, opacity: "0.8" }}>SHIPPING ADDRESS</span>
                  <h4 style={{ fontWeight: 600, margin: "12px 0 5px 0", fontSize: 18 }}>Brooklyn Simmons</h4>
                  <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
                  <span style={{ lineHeight: 2, fontSize: 18, fontWeight: 400, opacity: "0.8" }}>Phone : (219) 555-0114</span>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td className="p-0">
          <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 20 }}> </span>
        </td>
      </tr>
    </>
  );
};

export default InvoiceAddSection;
