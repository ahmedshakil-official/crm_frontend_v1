import { FC } from "react";
import { DisclosureItem } from "./components/DisclosureItem";

const disclosureData = [
  {
    reference: "1.1",
    title: "Terms of Business (Signed & Dated)",
    answer: null,
  },
  {
    reference: "1.2",
    title: "Privacy Notice (Signed & Dated)",
    answer: null,
  },
  {
    reference: "1.3",
    title:
      "Fee Agreement (Signed & Dated) - are fees reasonable and in line with approved fee statement?",
    answer: null,
  },
];

const DisclosureDocumentsTabContent: FC = () => {
  return (
    <div className="p-3">
      {disclosureData.map((item, index) => (
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

export default DisclosureDocumentsTabContent;
