import { Container } from "reactstrap";
import Advisers from "../../CommonComponents/Directors/Advisers/Advisers";
import OrganisationStaffBreadcrumbs from "../Breadcrumbs/Breadcrumbs";

const OrgStaffAdvisersContainer: React.FC = () => {
  return (
    <>
      <OrganisationStaffBreadcrumbs
        mainTitle="Organisation Staff Dashboard"
        title="Hello! there"
        activePage="Advisers"
      />
      <Container fluid>
        <Advisers />
      </Container>
    </>
  );
};

export default OrgStaffAdvisersContainer;
