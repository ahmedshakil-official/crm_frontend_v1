import { Container } from "reactstrap";
import Introducers from "../../../CommonComponents/Directors/Introducers/Introducers";
import OrganisationBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrganisationIntroducersContainer: React.FC = () => {
  return (
    <>
      <OrganisationBreadcrumbs
        mainTitle="Organization Introducers"
        title="Hello there!"
        parent="Directors"
        activePage="Introducers"
      />
      <Container fluid>
        <Introducers />
      </Container>
    </>
  );
};

export default OrganisationIntroducersContainer;
