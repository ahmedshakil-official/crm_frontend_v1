import { Dashboard, Organization, OrganizationTitle } from "@/Constant";
import { Container, Row } from "reactstrap";
import SingleCaseBody from "./components/SingleCaseBody";
import SingleCaseBreadcrumbs from "./components/SingleCaseBreadcrumbs";

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
          <SingleCaseBody />
        </Row>
      </Container>
    </>
  );
};

export default CaseContainer;
