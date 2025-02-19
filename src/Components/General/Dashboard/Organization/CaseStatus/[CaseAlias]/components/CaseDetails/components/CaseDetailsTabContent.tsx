import { useAppSelector } from "@/Redux/Hooks";
import { TabContent } from "reactstrap";
import { ApplicantsDetailsTab } from "./ApplicantsDetails/ApplicantsDetailsTab";
import { LoanDetailsTab } from "./LoanDetails/LoanDetailsTab";

// Define a mapping of tab numbers to components
const tabComponents: Record<number, React.FC> = {
  1: LoanDetailsTab,
  2: ApplicantsDetailsTab,
  // 3: AnotherTab,
};

export const CaseDetailsTabContent: React.FC = () => {
  const basicTab: string = useAppSelector(
    (state) => state.caseDetails.basicTabId
  );

  // Convert string to number
  const ActiveTabComponent = tabComponents[Number(basicTab)];

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
