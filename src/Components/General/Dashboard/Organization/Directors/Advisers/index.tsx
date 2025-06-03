import { Container } from "reactstrap";
import Advisers from "../../../CommonComponents/Directors/Advisers/Advisers";
import OrganizationBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrganizationAdvisersContainer: React.FC = () => {
  return (
    <>
      <OrganizationBreadcrumbs
        mainTitle="Organization Advisers"
        title="Hello there!"
        parent="Directors"
        activePage="Advisers"
      />
      <Container fluid>
        <Advisers />
      </Container>
    </>
  );
};

export default OrganizationAdvisersContainer;
