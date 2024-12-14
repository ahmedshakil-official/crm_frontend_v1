import { Dashboard, Organization, OrganizationTitle } from "@/Constant";
import apiClient from "@/services/api-client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { CaseInfo } from "../AllCase/components/CasesTable";
import CalenderContainer from "./components/Calender/CalenderContainer";
import FileManager from "./components/FileManager";
import JointUsers from "./components/JointUsers";
import MeetingHistory from "./components/MeetingHistory";
import SingleCaseBreadcrumbs from "./components/SingleCaseBreadcrumbs";
import SingleCaseInfo from "./components/SingleCaseInfo";


const CaseContainer = () => {
  const [caseInfo, setCaseInfo] = useState<CaseInfo>();
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { casealias } = params;

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
      />
      <Container fluid>
        <Row className="row">
          <SingleCaseInfo caseInfo={caseInfo} />
          <FileManager />
        </Row>
        <Row>
          <JointUsers />
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
