import { FC } from "react";
import { DisclosureItem } from "../CompianceTabContents/components/DisclosureItem";

const dataProtectionData = [
  {
    reference: "2.1",
    title: "Factfind Filled",
    answer: null,
  },

];

const DataProtectionTabContent: FC = () => {
  return (
    <div className="p-3">
      {dataProtectionData.map((item, index) => (
        <DisclosureItem
          key={item.reference}
          reference={item.reference}
          title={item.title}
          answer={item.answer}
          index={index}
        />
      ))}
    </div>
  );
};

export default DataProtectionTabContent;
