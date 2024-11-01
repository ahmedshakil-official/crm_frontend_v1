import { InvoiceSixTable } from "@/Data/Applications/Ecommerce/EcommerceData";

const InvoiceSixTableHeader = () => {
  return (
    <>
      {InvoiceSixTable.map((data, i) => (
        <td className="item" key={i}>
          <h6 className="p-2 mb-0">{data}</h6>
        </td>
      ))}
    </>
  );
};

export default InvoiceSixTableHeader;
