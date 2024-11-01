import { Table } from "reactstrap";

export const InvoiceTexSection = () => {
  return (
    <td className="p-0 border-bottom">
      <Table responsive borderless style={{width:400,}}>
        <tfoot>
          <tr>
            <td style={{padding: "5px 24px 5px 0",paddingTop: 15,textAlign: "end", display:"flex", justifyContent:"space-between"}}>
              <span style={{fontSize: 18,fontWeight: 400,}}>Subtotal</span>
              <span style={{marginLeft: 8,fontSize: 18,}}>:</span>
            </td>
            <td style={{padding: "5px 0",textAlign: "left",paddingTop: 15,}}>
              <span style={{fontSize: 18,}}>$26,400.00</span>
            </td>
          </tr>
          <tr>
            <td style={{padding: "5px 24px 5px 0",textAlign: "end",display:"flex", justifyContent:"space-between"}}>
              <span style={{fontSize: 18,fontWeight: 400,}}>VAT (0%)</span>
              <span style={{marginLeft: 8,fontSize: 18,}}>:</span>
            </td>
            <td style={{padding: "5px 0",textAlign: "left",paddingTop: 0,}}>
              <span style={{fontSize: 18,}}>$0.00</span>
            </td>
          </tr>
          <tr>
            <td style={{padding: "5px 24px 5px 0",textAlign: "end",display:"flex", justifyContent:"space-between"}}>
              <span style={{fontSize: 18,fontWeight: 400,}}>Shipping Rate</span>
              <span style={{marginLeft: 8,fontSize: 18,}}>:</span>
            </td>
            <td style={{padding: "5px 0",textAlign: "left",paddingTop: 0,}}>
              <span style={{fontSize: 18,}}>$10.00</span>
            </td>
          </tr>
          <tr>
            <td style={{padding: "12px 24px 22px 0",display:"flex", justifyContent:"space-between"}}>
              <span style={{fontWeight: 600,fontSize: 20,}}>Total Amount</span>
              <span style={{marginLeft: 8,}}>:</span>
            </td>
            <td style={{padding: "12px 24px 22px 0",textAlign: "left",}}>
              <span style={{fontWeight: 500,fontSize: 20,color: "#006666",}}>$26,410.00</span>
            </td>
          </tr>
        </tfoot>
      </Table>
    </td>
  );
};
