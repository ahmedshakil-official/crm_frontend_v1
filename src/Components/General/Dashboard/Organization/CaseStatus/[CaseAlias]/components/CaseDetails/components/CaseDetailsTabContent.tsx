import React from "react";
import { TabContent, TabPane } from "reactstrap";
import { CaseDetailsFormTab } from "./CaseDetailsFormTab";

export const CaseDetailsTabContent: React.FC = () => {
  return (
    <TabContent>
      <CaseDetailsFormTab/>
    </TabContent>
  );
};
