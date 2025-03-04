import { useAppSelector } from "@/Redux/Hooks";
import { TabContent } from "reactstrap";
import { ApplicantsDetailsTab } from "./ApplicantsDetails/ApplicantsDetailsTab";
import { EmploymentTab } from "./Employment/EmploymentTab";
import { LoanDetailsTab } from "./LoanDetails/LoanDetailsTab";
import { AdverseTab } from "./Adverse/AdverseTab";

// Define a mapping of tab names to components
const tabComponents: Record<string, React.FC> = {
  "Loan Details": LoanDetailsTab,
  "Applicant(s) Details": ApplicantsDetailsTab,
  "Employment/Income": EmploymentTab,
  "Adverse": AdverseTab,
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
