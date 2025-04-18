import { FC } from "react";
import { DisclosureItem } from "../CompianceTabContents/components/DisclosureItem";

const factFindData = [
  {
    reference: "4.1",
    title: "Loan details fully completed",
    answer: null,
  },
  {
    reference: "4.11",
    title: "Has source of lead been recorded",
    answer: null,
  },
  {
    reference: "4.12",
    title: "Is the client located in close/realistic proximity to the advisor? If not, has this been justified in the notes stating what due diligence has been carried out by the adviser?",
    answer: null,
  },
  {
    reference: "4.2",
    title: "Personal details fully completed for all clients (including details of dependents and 3 year address history)",
    answer: null,
  },
  {
    reference: "4.21",
    title: "If retirement age is over state retirement age, has adviser put notes for the plausibility of working to such age.",
    answer: null,
  },
  {
    reference: "4.22",
    title: "Does the occupation compared to retirement age seem realistic?",
    answer: null,
  },
  {
    reference: "4.3",
    title: "Employment details fully completed for all clients",
    answer: null,
  },
  {
    reference: "4.31",
    title: "Has due diligence been completed on FPI, <6 months new job, second jobs including HMRC reference check.",
    answer: null,
  },
  {
    reference: "4.32",
    title: "Does the stated income seem reasonable for the occupation/employment type?",
    answer: null,
  },
  {
    reference: "4.33",
    title: "Does the stated net income seem reasonable for the occupation/employment type?",
    answer: null,
  },
  {
    reference: "4.34",
    title: "Is the client in an occupation where you would expect employee benefits and has this been documented?",
    answer: null,
  },
  {
    reference: "4.4",
    title: "Has the property portfolio tab been fully completed if clients own more than 1 property?",
    answer: null,
  },
  {
    reference: "4.5",
    title: "Has proposed property details been fully completed?",
    answer: null,
  },
  {
    reference: "4.6",
    title: "Has the 'Your Needs' section been fully completed and is it clear what the clients preferences are? (inc Reasons for length of fix, length of term and additional features)",
    answer: null,
  },
  {
    reference: "4.61",
    title: "If I/O, has a repayment vehicle been recorded and does this seem feasible? (if overpayments, have figures been recorded within the budget planner)",
    answer: null,
  },
  {
    reference: "4.62",
    title: "If capital raising, have figures been input and has this been detailed in the notes section?",
    answer: null,
  },
  {
    reference: "4.63",
    title: "If deposit is to come from sale of property/ equity do the figures make sense?",
    answer: null,
  },
  {
    reference: "4.64",
    title: "If consolidating, has the adviser completed the debt con calculator, before & after illustration and recorded detailed notes)",
    answer: null,
  },
  {
    reference: "4.7",
    title: "Has Accountant / Solicitor details been confirmed?",
    answer: null,
  }
];

const FactFindTabContent: FC = () => {
  return (
    <div className="p-3">
      {factFindData.map((item, index) => (
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

export default FactFindTabContent;