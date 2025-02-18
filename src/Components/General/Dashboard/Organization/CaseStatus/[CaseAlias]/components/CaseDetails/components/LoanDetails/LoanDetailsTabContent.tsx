import React from "react";
import { TabContent, TabPane } from "reactstrap";
import LoanDetailsFormTab1 from "./LoanDetailsFormTabs/LoanDetailsFormTab1";
import LoanDetailsFormTab2 from "./LoanDetailsFormTabs/LoanDetailsFormTab2";
import LoanDetailsFormTab3 from "./LoanDetailsFormTabs/LoanDetailsFormTab3";
import LoanDetailsFormTab4 from "./LoanDetailsFormTabs/LoanDetailsFormTab4";

export const LoanDetailsTabContent: React.FC<{ tabId: string }> = ({
  tabId,
}) => {
  return (
    <TabContent activeTab={tabId} className=" w-full">
      <TabPane tabId="1">
        <LoanDetailsFormTab1 />
      </TabPane>
      <TabPane tabId="2">
        <LoanDetailsFormTab2 />
      </TabPane>
      <TabPane tabId="3">
        <LoanDetailsFormTab3 />
      </TabPane>
      <TabPane tabId="4">
        <LoanDetailsFormTab4 />
      </TabPane>
    </TabContent>
  );
};
