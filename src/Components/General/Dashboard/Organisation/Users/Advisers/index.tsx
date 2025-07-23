import { Container } from "reactstrap";
import Advisers from "../../../CommonComponents/Directors/Advisers/Advisers";
import OrganisationBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrganisationAdvisersContainer: React.FC = () => {
  return (
    <>
      <OrganisationBreadcrumbs
        mainTitle="Organisation Advisers"
        title="Hello there!"
        parent="Users"
        activePage="Advisers"
      />
      <Container fluid>
        <Advisers />
      </Container>
    </>
  );
};

export default OrganisationAdvisersContainer;
