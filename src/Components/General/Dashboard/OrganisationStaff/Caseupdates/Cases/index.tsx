import { Container } from "reactstrap";
import Cases from "../../../CommonComponents/Cases/Cases/Cases";
import OrganisationStaffBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrgStaffCaseUpdateCasesContainer: React.FC = () => {
  return (
    <>
      <OrganisationStaffBreadcrumbs
        mainTitle="Organisation Staff Cases"
        title="View and manage all client cases"
        parent="Case Updates"
        activePage="Cases"
      />

      <Container fluid>
        <Cases />
      </Container>
    </>
  );
};

export default OrgStaffCaseUpdateCasesContainer;
