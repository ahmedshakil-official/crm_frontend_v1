import { FeesTabContentProps } from "@/Types/Organization/CaseDetails/FeeTypes";
import { FC } from "react";
import FeeInTable from "./FeesTabContents/FeesInTable";
import FeeOutTable from "./FeesTabContents/FeesOutTable";

export const FeesTabContent: FC<FeesTabContentProps> = ({
  tabId,
  setTabId,
}) => {
  const renderTabContent = () => {
    switch (tabId) {
      case "1":
        return <FeeInTable />;
      case "2":
        return <FeeOutTable />;
      default:
        return null;
    }
  };

  return <div className="p-4">{renderTabContent()}</div>;
};
