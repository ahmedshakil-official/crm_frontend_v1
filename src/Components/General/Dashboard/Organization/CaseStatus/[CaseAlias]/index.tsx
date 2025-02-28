import { Dashboard, Organization, OrganizationTitle } from "@/Constant";
import apiClient from "@/services/api-client";
import { CaseInfo } from "@/Types/Organization/CaseTypes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";

import { useGetJointUserInfoQuery } from "@/Redux/Reducers/CaseDetails/JointUserDetails/JointUserDetailsApi";
import { JointUserProps } from "@/Types/Organization/JointUserTypes";
import CalenderContainer from "./components/Calender/CalenderContainer";
import CaseDetails from "./components/CaseDetails/CaseDetails";
import FileManager from "./components/FileManager";
import JointUsers from "./components/JointUsers";
import MeetingHistory from "./components/MeetingHistory";
import SingleCaseBreadcrumbs from "./components/SingleCaseBreadcrumbs";
import SingleCaseInfo from "./components/SingleCaseInfo";

const CaseContainer: React.FC = () => {
  const [caseInfo, setCaseInfo] = useState<CaseInfo>();
  const [isLoading, setIsLoading] = useState(false);
  // const [jointUserInfo, setJointUserInfo] = useState<JointUserProps[]>([]);
  const params = useParams();
  const { casealias } = params;
  const { data: jointUserInfo, isLoading: isJointUserFetcing } =
    useGetJointUserInfoQuery({
      case_alias: casealias,
    });

  const fetchCaseInfo = async () => {
    setIsLoading(true);
    try {
      const CaseData = await apiClient.get(`/cases/${casealias}`);
      setCaseInfo(CaseData?.data || {});
    } catch (error) {
      console.error("Error Fetching Cases", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseInfo();
  }, []);

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
          <SingleCaseInfo
            caseInfo={caseInfo}
            isLoading={isLoading}
            fetchCaseInfo={fetchCaseInfo}
          />
        </Row>
        <Row>
          <CaseDetails caseStage={caseInfo?.case_stage || ""} />
        </Row>
        <Row>
          <FileManager />
        </Row>
        <Row>
          <JointUsers
            jointUserInfo={jointUserInfo}
            isLoading={isLoading}
          />
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
