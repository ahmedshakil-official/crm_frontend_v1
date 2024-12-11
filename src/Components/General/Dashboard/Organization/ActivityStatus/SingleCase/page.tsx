import { Dashboard, Organization, OrganizationTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import FileManager from "./components/FileManager";
import JointUsers from "./components/JointUsers";
import MeetingHistory from "./components/MeetingHistory";
import SingleCaseBreadcrumbs from "./components/SingleCaseBreadcrumbs";
import SingleCaseInfo from "./components/SingleCaseInfo";

const CaseContainer = () => {
  return (
    <>
      <SingleCaseBreadcrumbs
        mainTitle={Organization}
        parent={Dashboard}
        title={OrganizationTitle}
      />
      <Container fluid>
        <Row className="row">
          <SingleCaseInfo />
          <FileManager />
        </Row>
        <Row>
          <JointUsers />
          <MeetingHistory />
        </Row>
      </Container>
    </>
  );
};

export default CaseContainer;
