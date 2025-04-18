import { FC } from "react";
import { DisclosureItem } from "../CompianceTabContents/components/DisclosureItem";

const applicationData = [
  {
    reference: "7.1",
    title: "Do the personal details match the factfind?",
    answer: null,
  },
  {
    reference: "7.2", 
    title: "Does the employment and income details match the factfind?",
    answer: null,
  },
  {
    reference: "7.3",
    title: "Does the property and loan details match the factfind?",
    answer: null,
  },
  {
    reference: "7.4",
    title: "Does the mortgage application confirm who submitted the application?",
    answer: null,
  }
];

const ComplianceApplicationTabContent: FC = () => {
  return (
    <div className="p-3">
      {applicationData.map((item, index) => (
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

export default ComplianceApplicationTabContent;