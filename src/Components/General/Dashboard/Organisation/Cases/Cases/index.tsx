import { Container } from "reactstrap";
import Cases from "../../../CommonComponents/Cases/Cases/Cases";
import OrganisationBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const CasesContainer: React.FC = () => {
  return (
    <>
      <OrganisationBreadcrumbs
        mainTitle="Organisation Case Status"
        title="Here you can see all the cases of the organisation"
        parent="Organisation"
        activePage="Cases"
      />
      <Container fluid>
        <Cases />
      </Container>
    </>
  );
};

export default CasesContainer;
