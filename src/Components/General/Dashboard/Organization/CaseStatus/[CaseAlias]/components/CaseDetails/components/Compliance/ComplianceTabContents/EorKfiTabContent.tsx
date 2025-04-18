import { FC } from "react";
import { DisclosureItem } from "../CompianceTabContents/components/DisclosureItem";

const eorKfiData = [
  {
    reference: "6.11",
    title: "Has the adviser sourced in line with mortgage requirements? E.g No fees / Fix",
    answer: null,
  },
  {
    reference: "6.12",
    title: "Does the loan term, amount and property value match the figures stated in Mortgage Requirements",
    answer: null,
  },
  {
    reference: "6.13",
    title: "Are the results stored in order of client preference (E.g True Cost / Total Monthly Cost / Other)",
    answer: null,
  },
  {
    reference: "6.14",
    title: "Is the recommended product showing on the Evidence of Research?",
    answer: null,
  },
  {
    reference: "6.21",
    title: "Is the address on the KFI correct?",
    answer: null,
  },
  {
    reference: "6.22",
    title: "Does the figures, term, repayment method and additional features match the mortgage requirements",
    answer: null,
  },
  {
    reference: "6.23",
    title: "Does the monthly payment fit within disposable income?",
    answer: null,
  },
  {
    reference: "6.24",
    title: "Are fees disclosed correctly and support those in the disclosure documents?",
    answer: null,
  },
  {
    reference: "6.25",
    title: "Lender Fees Added? 2 Illustrations Needed - One with fees added, one with fees paid upfront",
    answer: null,
  },
  {
    reference: "6.26",
    title: "Has Illustration been produced at the correct time (after sourcing and prior to application)",
    answer: null,
  },
  {
    reference: "6.27",
    title: "Interest only? Requires Repayment Illustration comparison (+If Int only with fees added, require Repayment comparison with fees added)",
    answer: null,
  },
  {
    reference: "6.3",
    title: "Has the product tab been fully completed with product details",
    answer: null,
  }
];

const EorKfiTabContent: FC = () => {
  return (
    <div className="p-3">
      {eorKfiData.map((item, index) => (
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

export default EorKfiTabContent;