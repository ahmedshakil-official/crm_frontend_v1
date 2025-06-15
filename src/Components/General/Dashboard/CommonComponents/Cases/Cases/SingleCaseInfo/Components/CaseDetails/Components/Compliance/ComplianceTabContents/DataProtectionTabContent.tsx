import { FC } from "react";
import { DisclosureItem } from "./components/DisclosureItem";
import { useGetComplianceQuery } from "@/Redux/Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/Compliance/ComplianceApi";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { RootState } from "@/Redux/Store";
import {
  updateComplianceAnswer,
  updateComplianceComment,
} from "@/Redux/Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/Compliance/ComplianceSlice";
import { ComplianceState } from "@/Types/Organization/Cases/CaseDetails/ComplianceTypes";

const DataProtectionTabContent: FC = () => {
  const { casealias } = useParams();
  const { data: complianceData } = useGetComplianceQuery({
    case_alias: casealias,
  });
  const dispatch = useAppDispatch();
  const updatedComplianceData = useAppSelector(
    (state: RootState) => state.compliance
  );

  const dataProtectionData = [
    {
      reference: "2.1",
      title: "Factfind Filled",
      name: "factfind_filled",
      textName: "factfind_filled_text",
      answer:
        updatedComplianceData.factfind_filled !== undefined
          ? updatedComplianceData.factfind_filled
          : complianceData?.factfind_filled || null,
      comment:
        updatedComplianceData.factfind_filled_text !== undefined
          ? updatedComplianceData.factfind_filled_text
          : complianceData?.factfind_filled_text || null,
    },
  ];

  const handleAnswerChange = (name: string, value: string) => {
    dispatch(
      updateComplianceAnswer({ field: name as keyof ComplianceState, value })
    );
  };

  const handleCommentChange = (name: string, value: string | null) => {
    dispatch(
      updateComplianceComment({ field: name as keyof ComplianceState, value })
    );
  };
  return (
    <div className="p-3">
      {dataProtectionData.map((item, index) => (
        <DisclosureItem
          key={item.reference}
          name={item.name}
          textName={item.textName}
          reference={item.reference}
          title={item.title}
          answer={item.answer}
          comment={item.comment}
          index={index}
          onAnswerChange={handleAnswerChange}
          onCommentChange={handleCommentChange}
        />
      ))}
    </div>
  );
};

export default DataProtectionTabContent;
