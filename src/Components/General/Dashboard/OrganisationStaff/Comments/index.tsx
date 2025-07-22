import { Container } from "reactstrap";
import OrganisationStaffBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import InternalComments from "./InternalComments/InternalComments";

const index: React.FC = () => {
  return (
    <>
      <OrganisationStaffBreadcrumbs
        mainTitle="Comments"
        title="Hello! there"
        activePage="Comments"
      />
      <Container fluid>
        <InternalComments />
      </Container>
    </>
  );
};

export default index;
