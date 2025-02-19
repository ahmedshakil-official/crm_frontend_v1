import { TabContent } from "reactstrap";
import { LoanDetailsTab } from "./LoanDetails/LoanDetailsTab";
import { useAppSelector } from "@/Redux/Hooks";

// Define a mapping of tab numbers to components
const tabComponents: Record<number, React.FC> = {
  1: LoanDetailsTab,
  // 2: AnotherTab,
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
        <div className=" text-center text-warning ">No Content Available</div>
      )}
    </TabContent>
  );
};
