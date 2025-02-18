import { TabContent } from "reactstrap";
import { LoanDetailsTab } from "./LoanDetails/LoanDetailsTab";

export const CaseDetailsTabContent: React.FC = () => {
  return (
    <TabContent>
      <LoanDetailsTab/>
    </TabContent>
  );
};
