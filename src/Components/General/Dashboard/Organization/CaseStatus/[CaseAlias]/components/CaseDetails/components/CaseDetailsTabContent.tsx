import { useAppSelector } from "@/Redux/Hooks";
import { TabContent } from "reactstrap";
import { AdverseTab } from "./Adverse/AdverseTab";
import { ApplicantsDetailsTab } from "./ApplicantsDetails/ApplicantsDetailsTab";
import BudgetPlanner from "./BudgetPlanner/BudgetPlanner";
import CreditCommitmentsContent from "./CreditCommitments/CreditCommitmentsContent";
import { EmploymentTab } from "./Employment/EmploymentTab";
import ExistingProtectionTab from "./ExistingProtection/ExistingProtectionTab";
import { LoanDetailsTab } from "./LoanDetails/LoanDetailsTab";
import MortgageYourNeedsContent from "./MortgageYourNeeds/MortgageYourNeedsContent";
import { NotesTab } from "./Notes/NotesTab";
import PortfolioContent from "./Portfolio/PortfolioContent";
import PropertyDetails from "./PropertyDetails/PropertyDetails";
import SolicitorsAndAccountantsTab from "./SolicitorsAndAccountants/SolicitorsAndAccountantsTab";

// Define a mapping of tab names to components
const tabComponents: Record<string, React.FC> = {
  // DIP
  "Loan Details": LoanDetailsTab,
  "Applicant(s) Details": ApplicantsDetailsTab,
  "Employment/Income": EmploymentTab,
  "Credit Commitments": CreditCommitmentsContent,
  Adverse: AdverseTab,
  Portfolio: PortfolioContent,
  "Security Property": PropertyDetails,
  "Solicitors & Accountants": SolicitorsAndAccountantsTab,
  "Budget Planner": BudgetPlanner,
  "Existing Protection": ExistingProtectionTab,
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
