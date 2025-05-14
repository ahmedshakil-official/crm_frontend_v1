import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { CaseInfo } from "@/Types/Organization/Cases/CaseTypes";
import { useParams } from "next/navigation";
import CaseDetails from "../../Organization/CaseStatus/[CaseAlias]/components/CaseDetails/CaseDetails";
import { useGetJointUserInfoQuery } from "@/Redux/Reducers/Organization/Cases/SingleCaseInfo/JointUser/JointUserDetailsApi";
import { useGetSingleCaseDetailsQuery } from "@/Redux/Reducers/Organization/Cases/CaseDetailsApi";

const ClientSingleCaseContainer: React.FC = () => {
  const [caseInfo, setCaseInfo] = useState<CaseInfo>();
  const params = useParams();
  const { casealias } = params;
  console.log(casealias);

  // rtk hooks
  const { data: jointUserInfo, isLoading: isJointUserFetcing } =
    useGetJointUserInfoQuery({
      case_alias: casealias,
    });

  const { data: caseData, isLoading } = useGetSingleCaseDetailsQuery({
    case_alias: casealias,
  });
  useEffect(() => {
    setCaseInfo(caseData || {});
  }, [caseData]);
  return (
    <>
      <Breadcrumbs />
      <Container fluid>
        <CaseDetails caseStage={caseInfo?.case_stage || ""} />
      </Container>
    </>
  );
};

export default ClientSingleCaseContainer;
