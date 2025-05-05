import { FC } from "react";
import { DisclosureItem } from "./components/DisclosureItem";

const mandatoryDocData = [
  {
    reference: "4.1",
    title:
      "Proof of Income (Latest 3 months Payslips + P60 / 2 Years SA302 and TYO)",
    answer: null,
  },
  {
    reference: "4.2",
    title:
      "Proof of Deposit (Latest mortgage statement for Remo / Gifted Deposit / Bank Statement)",
    answer: null,
  },
  {
    reference: "4.3",
    title: "Bank statements (Latest 3 months showing inc & exp)",
    answer: null,
  },
  {
    reference: "4.4",
    title: "Credit Reports",
    answer: null,
  },
  {
    reference: "4.5",
    title: "Affordability Calculator (Selected Lender)",
    answer: null,
  },
  {
    reference: "4.6",
    title:
      "Evidence of Research (Showing Selected Lender) + Mortgage Illustration(/s)",
    answer: null,
  },
  {
    reference: "4.7",
    title: "Agreement in Principle",
    answer: null,
  },
  {
    reference: "4.8",
    title: "Signed Application Form",
    answer: null,
  },
  {
    reference: "4.9",
    title: "Suitability Letter - Signed",
    answer: null,
  },
  {
    reference: "4.91",
    title: "Mortgage Offer",
    answer: null,
  },
  {
    reference: "4.92",
    title: "Debt Consolidation Calculator (+Before & After Illustrations)",
    answer: null,
  },
  {
    reference: "4.93",
    title: "Shared Equity Documentation",
    answer: null,
  },
  {
    reference: "4.94",
    title: "Proof of Lending into Retirement (if applicable for Resi)",
    answer: null,
  },
  {
    reference: "4.95",
    title:
      "Proof of Repayment Vehicle (for Resi Int only OR BTL int only unless sale of security property)",
    answer: null,
  },
];

const MandatoryDocumentationTabContent: FC = () => {
  return (
    <div className="p-3">
      {mandatoryDocData.map((item, index) => (
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

export default MandatoryDocumentationTabContent;
