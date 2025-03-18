import { useAppSelector } from "@/Redux/Hooks";
import { TabContent } from "reactstrap";
import { AdverseTab } from "./Adverse/AdverseTab";
import { ApplicantsDetailsTab } from "./ApplicantsDetails/ApplicantsDetailsTab";
import CreditCommitmentsContent from "./CreditCommitments/CreditCommitmentsContent";
import { EmploymentTab } from "./Employment/EmploymentTab";
import { LoanDetailsTab } from "./LoanDetails/LoanDetailsTab";
import MortgageYourNeedsContent from "./MortgageYourNeeds/MortgageYourNeedsContent";
import PortfolioContent from "./Portfolio/PortfolioContent";
import PropertyDetails from "./PropertyDetails/PropertyDetails";
import SecurityPropertyTab from "./SecurityProperty/SecurityPropertyTab";
import SolicitorsAndAccountantsTab from "./SolicitorsAndAccountants/SolicitorsAndAccountantsTab";
import BudgetPlanner from "./BudgetPlanner/BudgetPlanner";
import { NotesTab } from "./Notes/NotesTab";

// Define a mapping of tab names to components
const tabComponents: Record<string, React.FC> = {
  // DIP
  "Loan Details": LoanDetailsTab,
  "Applicant(s) Details": ApplicantsDetailsTab,
  "Employment/Income": EmploymentTab,
  "Credit Commitments": CreditCommitmentsContent,
  Adverse: AdverseTab,
  Portfolio: PortfolioContent,
  "Property Details": PropertyDetails,
  "Solicitors & Accountants": SolicitorsAndAccountantsTab,
  "Budget Planner": BudgetPlanner,
  "Security Property": SecurityPropertyTab,
  "Mortgage Your Needs": MortgageYourNeedsContent,
  Notes: NotesTab,
};

export const CaseDetailsTabContent: React.FC = () => {
  const basicTab: string | null = useAppSelector(
    (state) => state.caseDetails.basicTabId
  );

  const ActiveTabComponent = basicTab ? tabComponents[basicTab] : null; // Fix: Ensure basicTab is not null

  return (
    <TabContent>
      {ActiveTabComponent ? (
        <ActiveTabComponent />
      ) : (
        <div className=" text-center text-warning fs-3">
          No Content Available
        </div>
      )}
    </TabContent>
  );
};
