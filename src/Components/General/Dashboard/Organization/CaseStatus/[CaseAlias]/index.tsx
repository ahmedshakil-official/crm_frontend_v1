import { Dashboard, Organization, OrganizationTitle } from "@/Constant";
import { useGetSingleCaseDetailsQuery } from "@/Redux/Reducers/CaseDetails/CaseDetailsApi";
import { useGetJointUserInfoQuery } from "@/Redux/Reducers/CaseDetails/JointUserDetails/JointUserDetailsApi";
import { CaseInfo } from "@/Types/Organization/CaseTypes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import CalenderContainer from "./components/Calender/CalenderContainer";
import CaseDetails from "./components/CaseDetails/CaseDetails";
import FileManager from "./components/FileManager";
import JointUsers from "./components/JointUsers";
import MeetingHistory from "./components/MeetingHistory";
import SingleCaseBreadcrumbs from "./components/SingleCaseBreadcrumbs";
import SingleCaseInfo from "./components/SingleCaseInfo";

const CaseContainer: React.FC = () => {
  const [caseInfo, setCaseInfo] = useState<CaseInfo>();
  const params = useParams();
  const { casealias } = params;

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
      <SingleCaseBreadcrumbs
        mainTitle={Organization}
        parent={Dashboard}
        title={OrganizationTitle}
        caseInfo={caseInfo}
        isLoading={isLoading}
      />
      <Container fluid>
        <Row>
          <SingleCaseInfo caseInfo={caseInfo} isLoading={isLoading} />
        </Row>
        <Row>
          <CaseDetails caseStage={caseInfo?.case_stage || ""} />
        </Row>
        <Row>
          <FileManager />
        </Row>
        <Row>
          <JointUsers jointUserInfo={jointUserInfo} isLoading={isJointUserFetcing} />
        </Row>
        <Row>
          <MeetingHistory />
        </Row>
        <Row>
          <CalenderContainer />
        </Row>
      </Container>
    </>
  );
};

export default CaseContainer;
