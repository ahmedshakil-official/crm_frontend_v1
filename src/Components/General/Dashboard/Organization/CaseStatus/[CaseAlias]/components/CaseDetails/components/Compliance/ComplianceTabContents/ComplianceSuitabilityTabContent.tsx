import { FC } from "react";
import { DisclosureItem } from "./components/DisclosureItem";

const suitabilityData = [
  {
    reference: "8.1",
    title:
      "Has the Suitability letter been generated and sent to the client within 5 working days?",
    answer: null,
  },
  {
    reference: "8.11",
    title:
      "Post Application changes - has an addendum letter been issued or suitability letter amended and reissued?",
    answer: null,
  },
  {
    reference: "8.12",
    title:
      "If the applicants live at separate addresses, Is there confirmation a copy has been sent to both clients?",
    answer: null,
  },
  {
    reference: "8.13",
    title:
      "If this is a replacement suitability letter, has the statement ' This Suitability letter replaces the previous one sent to you on XX/XX/XX because...'?",
    answer: null,
  },
  {
    reference: "8.2",
    title: "Has the reasons for mortgage been personalised",
    answer: null,
  },
  {
    reference: "8.21",
    title: "Has the meeting discussion been personalised?",
    answer: null,
  },
  {
    reference: "8.22",
    title:
      "Has 'your circumstances and objectives been personalised'? including justification if objectives have not been met and why? / If client is paying ERC, has this been fully justified including calculations? Is the transaction suitable & TCF? (COBS 9.4.8)",
    answer: null,
  },
  {
    reference: "8.23",
    title:
      "Has Budget and Affordability been personalised? and irrelevant sections removed?",
    answer: null,
  },
  {
    reference: "8.3",
    title: "Has new mortgage details been completed?",
    answer: null,
  },
  {
    reference: "8.31",
    title: "Has Recommended Mortgage Section 1 been personalised?",
    answer: null,
  },
  {
    reference: "8.32",
    title: "Has Recommended mortgage section 2 been personalised?",
    answer: null,
  },
  {
    reference: "8.33",
    title:
      "Has 'Why are we recommending this repayment method' been completed? (Does it match 'Your Needs?') / If I/O - does it state 2 KFI's have been provided for comparison? Is there evidence of the repayment vehicle - where applicable.",
    answer: null,
  },
  {
    reference: "8.34",
    title:
      "Has 'Why are we recommending this mortgage type' been completed? Is there confirmation that the mortgage is affordable during and after the initial benefit rate period?",
    answer: null,
  },
  {
    reference: "8.35",
    title:
      "Has 'Why are we recommending this mortgage term' been completed? (If the shortest term has not been recommended (as per clients disposable income), has justification been included with the warning of increased cost? If I/O - ensure that the term has not been linked to affordability",
    answer: null,
  },
  {
    reference: "8.36",
    title:
      "Has 'Why are we recommending this mortgage lender' been completed? including if the cheapest product on EOR has not been recommended, has this been justified?",
    answer: null,
  },
  {
    reference: "8.37",
    title:
      "Has 'Why are we recommending this mortgage amount' been completed? If Debt Con - is there justification why this is suitable?",
    answer: null,
  },
  {
    reference: "8.4",
    title: "Has 'What are the cost and fees' been completed?",
    answer: null,
  },
  {
    reference: "8.5",
    title:
      "Has 'What are the disadvantages and risks' been selected as per the type of case?",
    answer: null,
  },
  {
    reference: "8.6",
    title: "Has the adviser personalised 'What is the cost of our advice'?",
    answer: null,
  },
  {
    reference: "8.61",
    title: "Has the adviser included 'Right of Reflection'?",
    answer: null,
  },
  {
    reference: "8.62",
    title: "Has the Protection section been personalised?",
    answer: null,
  },
  {
    reference: "8.63",
    title: "Has the B&C section been personalised?",
    answer: null,
  },
  {
    reference: "8.64",
    title: "Has the Wills section been personalised and included?",
    answer: null,
  },
  {
    reference: "8.7",
    title:
      "Does the recommended product, interest rate type & initial benefit period match the 'Your Needs' section?",
    answer: null,
  },
];

const ComplianceSuitabilityTabContent: FC = () => {
  return (
    <div className="p-3">
      {suitabilityData.map((item, index) => (
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

export default ComplianceSuitabilityTabContent;
