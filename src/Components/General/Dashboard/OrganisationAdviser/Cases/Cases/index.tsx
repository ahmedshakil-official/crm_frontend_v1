import { Container } from "reactstrap";
import Cases from "../../../CommonComponents/Cases/Cases/Cases";
import OrganisationAdviserBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrganisationAdviserCasesContainer: React.FC = () => {
  return (
    <>
      <OrganisationAdviserBreadcrumbs
        mainTitle="Cases"
        title="Hello! there"
        parent="Cases"
        activePage="All Cases"
      />
      <Container fluid>
        <Cases />
      </Container>
    </>
  );
};

export default OrganisationAdviserCasesContainer;
