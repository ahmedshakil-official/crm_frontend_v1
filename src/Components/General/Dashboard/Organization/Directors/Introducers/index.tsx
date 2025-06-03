import { Container } from "reactstrap";
import Introducers from "../../../CommonComponents/Directors/Introducers/Introducers";
import OrganizationBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrganizationIntroducersContainer: React.FC = () => {
  return (
    <>
      <OrganizationBreadcrumbs
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

export default OrganizationIntroducersContainer;
