import React from "react";
import { TabContent, TabPane } from "reactstrap";
import { SimpleTabContentProp } from "@/Types/UiKitsType";
import { LoanDetailsFormFields } from "@/Data/Case/CaseDetails/LoanDetails/Step1Data"; // Ensure correct import
import FormField from "./LoanDetails/LoanDetailsFormFields"; // Ensure correct import

export const CaseDetailsFormTabContent: React.FC<SimpleTabContentProp> = ({
  tabId,
}) => {
  return (
    <TabContent activeTab={tabId} className=" my-5">
      <TabPane tabId={tabId}>
        {/* Ensure tabId is a valid key */}
        {LoanDetailsFormFields[
          tabId as keyof typeof LoanDetailsFormFields
        ]?.map((field) => (
          <FormField key={field.name} {...field} />
        ))}
      </TabPane>
    </TabContent>
  );
};
