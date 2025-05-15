import React from "react";
import { Container } from "reactstrap";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { useParams } from "next/navigation";
import CaseDetails from "../../Organization/CaseStatus/[CaseAlias]/components/CaseDetails/CaseDetails";
import { useGetSingleCaseDetailsQuery } from "@/Redux/Reducers/Organization/Cases/CaseDetailsApi";
import { useSession } from "next-auth/react";

const ClientSingleCaseContainer: React.FC = () => {
  const { casealias } = useParams();
  const { data: caseData } = useGetSingleCaseDetailsQuery({
    case_alias: casealias,
  });

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
