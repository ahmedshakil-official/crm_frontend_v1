import {
  useGetComplianceQuery,
  useUpdateComplianceMutation,
} from "@/Redux/Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/Compliance/ComplianceApi";
import { FeesTabContentProps } from "@/Types/Organization/Cases/CaseDetails/FeeTypes";
import { useParams } from "next/navigation";
import { FC } from "react";
import AntiMoneyLaunderingTabContent from "./ComplianceTabContents/AntiMoneyLaunderingTabContent";
import ComplianceApplicationTabContent from "./ComplianceTabContents/ComplianceApplicationTabContent";
import ComplianceBudgetPlannerTabContent from "./ComplianceTabContents/ComplianceBudgetPlannerTabContent";
import ComplianceSuitabilityTabContent from "./ComplianceTabContents/ComplianceSuitabilityTabContent";
import DataProtectionTabContent from "./ComplianceTabContents/DataProtectionTabContent";
import DisclosureDocumentsTabContent from "./ComplianceTabContents/DisclosureDocumentsTabContent";
import EorKfiTabContent from "./ComplianceTabContents/EorKfiTabContent";
import FactFindTabContent from "./ComplianceTabContents/FactFindTabContent";
import MandatoryDocumentationTabContent from "./ComplianceTabContents/MandatoryDocumentationTabContent";

export const ComplianceTabContents: FC<FeesTabContentProps> = ({
  tabId,
  setTabId,
}) => {
  const renderTabContent = () => {
    const { casealias } = useParams();
    // rtk hooks
    const { data: complianceData, isLoading } = useGetComplianceQuery({
      case_alias: casealias,
    });
    const [updateCompliance, { isLoading: isUpdating }] =
      useUpdateComplianceMutation();

    switch (tabId) {
      case "1":
        return <DisclosureDocumentsTabContent />;
      case "2":
        return <DataProtectionTabContent />;
      case "3":
        return <AntiMoneyLaunderingTabContent />;
      case "4":
        return <MandatoryDocumentationTabContent />;
      case "5":
        return <FactFindTabContent />;
      case "6":
        return <ComplianceBudgetPlannerTabContent />;
      case "7":
        return <EorKfiTabContent />;
      case "8":
        return <ComplianceApplicationTabContent />;
      case "9":
        return <ComplianceSuitabilityTabContent />;
      default:
        return null;
    }
  };

  return <div className="p-4">{renderTabContent()}</div>;
};
