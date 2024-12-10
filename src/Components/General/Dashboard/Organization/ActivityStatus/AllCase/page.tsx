import { Dashboard, Organization, OrganizationTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import AllCaseBreadcrumbs from "./components/AllCaseBreadcrumbs";
import CaseHistory from "./components/CaseHistory";
import CasesTable from "./components/CasesTable";
import ProfileGreet from "./components/ProfileGreet";
import SuccessFulCase from "./components/SuccessFulCase";

const AllCaseContainer = () => {
  return (
    <>
      <AllCaseBreadcrumbs
        mainTitle={Organization}
        parent={Dashboard}
        title={OrganizationTitle}
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
