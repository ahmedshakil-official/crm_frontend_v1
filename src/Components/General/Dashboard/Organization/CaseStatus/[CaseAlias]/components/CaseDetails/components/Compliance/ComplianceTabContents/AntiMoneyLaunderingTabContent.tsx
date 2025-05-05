import { FC } from "react";
import { DisclosureItem } from "./components/DisclosureItem";

const amlData = [
  {
    reference: "3.1",
    title: "Nivo IDV check (Run & Completed)",
    answer: null,
  },
  {
    reference: "3.2",
    title:
      "Financial Sanctions checked and copy on file (dated prior to research)",
    answer: null,
  },
  {
    reference: "3.3",
    title: "Proof of ID (In Date & Certified)",
    answer: null,
  },
  {
    reference: "3.4",
    title: "Proof of Address (In Date & Certified)",
    answer: null,
  },
];

const AntiMoneyLaunderingTabContent: FC = () => {
  return (
    <div className="p-3">
      {amlData.map((item, index) => (
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

export default AntiMoneyLaunderingTabContent;
