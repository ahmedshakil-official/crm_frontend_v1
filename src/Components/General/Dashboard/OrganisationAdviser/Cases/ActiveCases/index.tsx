import { Container } from "reactstrap";
import ActiveCases from "../../../CommonComponents/Cases/ActiveCases/ActiveCases";
import OrganisationAdviserBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrganisationAdviserActiveCasesContainer: React.FC = () => {
  return (
    <>
      <OrganisationAdviserBreadcrumbs
        mainTitle="Active Cases"
        title="View and manage active cases"
        parent="Cases"
        activePage="Active Cases"
      />
      <Container fluid>
        <ActiveCases />
      </Container>
    </>
  );
};

export default OrganisationAdviserActiveCasesContainer;
