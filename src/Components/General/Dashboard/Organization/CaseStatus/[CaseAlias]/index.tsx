import LoadingSpinner from "@/app/loading";
import { useGetSingleCaseDetailsQuery } from "@/Redux/Reducers/Organization/Cases/CaseDetailsApi";
import { useGetJointUserInfoQuery } from "@/Redux/Reducers/Organization/Cases/SingleCaseInfo/JointUser/JointUserDetailsApi";
import { CaseInfo } from "@/Types/Organization/Cases/CaseTypes";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Row } from "reactstrap";
import CaseDetails from "./components/CaseDetails/CaseDetails";

const CaseContainer: React.FC = () => {
  const [caseInfo, setCaseInfo] = useState<CaseInfo>();
  const params = useParams();
  const { casealias } = params;
  const router = useRouter();

  // rtk hooks
  const { data: jointUserInfo, isLoading: isJointUserFetcing } =
    useGetJointUserInfoQuery({ case_alias: casealias }, { skip: !casealias });

  const {
    data: caseData,
    isLoading,
    isError,
  } = useGetSingleCaseDetailsQuery(
    { case_alias: casealias },
    { skip: !casealias }
  );

  useEffect(() => {
    if (!isLoading) {
      if (isError || !caseData) {
        router.push("/dashboard/organization");
        toast.error("Find Wrong URL! Redirecting...");
        return;
      }

      if (caseData.alias !== casealias) {
        router.push("/dashboard/organization");
        toast.error("Find Wrong URL! Redirecting...");
        return;
      }

      setCaseInfo(caseData);
    }
  }, [caseData, casealias, router, isLoading, isError]);

  if (isLoading) {
    return (
      <div className="p-4">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError || !caseInfo) {
    return null; // Will redirect in useEffect
  }

  return (
    <>
      <Row>
        <CaseDetails caseStage={caseInfo?.case_stage || ""} />
      </Row>
    </>
  );
};

export default CaseContainer;
