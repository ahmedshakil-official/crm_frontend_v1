import { useGetSingleCaseDetailsQuery } from "@/Redux/Reducers/Organization/Cases/CaseDetailsApi";
import LoadingSpinner from "@/app/loading";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Container } from "reactstrap";
import CaseDetails from "../../Organization/CaseStatus/[CaseAlias]/components/CaseDetails/CaseDetails";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const ClientSingleCaseContainer: React.FC = () => {
  const { casealias } = useParams();
  const router = useRouter();

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
        router.push("/dashboard/client");
        toast.error("Find Wrong URL! Redirecting...");
        return;
      }

      if (caseData.alias !== casealias) {
        router.push("/dashboard/client");
        toast.error("Find Wrong URL! Redirecting...");
        return;
      }
    }
  }, [caseData, casealias, router, isLoading, isError]);

  if (isLoading) {
    return (
      <div className="p-4">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError || !caseData) {
    return null; // Will redirect in useEffect
  }

  return (
    <>
      <Breadcrumbs />
      <Container fluid>
        <CaseDetails caseStage={caseData?.case_stage || ""} />
      </Container>
    </>
  );
};

export default ClientSingleCaseContainer;
