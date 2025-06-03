import { Container, Row } from "reactstrap";
import OrganizationBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import CaseHistory from "./components/CaseHistory";
import CasesTable from "./components/CasesTable";
import ProfileGreet from "./components/ProfileGreet";
import SuccessFulCase from "./components/SuccessFulCase";

const AllCaseContainer: React.FC = ({}) => {
  return (
    <>
      <OrganizationBreadcrumbs
        mainTitle="Organization Case Status"
        title="Hello there!"
        parent="Organization"
        activePage="Cases"
      />
      <Container fluid className="default-dashboard">
        <Row>
          <ProfileGreet />
          <SuccessFulCase />
          <CaseHistory />
        </Row>
        <Row>
          <CasesTable />
        </Row>
      </Container>
    </>
  );
};

export default AllCaseContainer;
