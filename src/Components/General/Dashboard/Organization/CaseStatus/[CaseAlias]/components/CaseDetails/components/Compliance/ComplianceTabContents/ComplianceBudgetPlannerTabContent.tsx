import { FC } from "react";
import { DisclosureItem } from "../CompianceTabContents/components/DisclosureItem";

const budgetPlannerData = [
  {
    reference: "5.1",
    title: "Has the credit commitments section been fully completed? (+ cross checked with credit report)",
    answer: null,
  },
  {
    reference: "5.11",
    title: "If any credit commitments, is it clear if the commitments will continue or are being repaid? (debts with less 12 months to run, less than £500 or 0% interest free can not be consolidated)",
    answer: null,
  },
  {
    reference: "5.2",
    title: "If the client has adverse credit, has it been fully documented? (additional notes to confirm how it occurred)",
    answer: null,
  },
  {
    reference: "5.3",
    title: "Has the budget planner been completed in full and does the figures seem reasonable? (information to be compared to bank statements)",
    answer: null,
  },
  {
    reference: "5.31",
    title: "Has all direct debits and liabilities been recorded? (cross reference bank statements to liabilities)",
    answer: null,
  }
];

const ComplianceBudgetPlannerTabContent: FC = () => {
  return (
    <div className="p-3">
      {budgetPlannerData.map((item, index) => (
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

export default ComplianceBudgetPlannerTabContent;