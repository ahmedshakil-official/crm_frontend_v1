import { Container, Row } from "reactstrap";
import OrganisationStaffBreadcrumbs from "../Breadcrumbs/Breadcrumbs";
import AdviserClientFilterBar from "./AdviserClientFilterBar/AdviserClientFilterBar";
import ClientLists from "./ClientLists/ClientLists";

const OrgStaffAdviserClientContainer: React.FC = () => {
  return (
    <>
      <OrganisationStaffBreadcrumbs
        mainTitle="Adviser Clients"
        title="Manage and view all client files across advisers"
        activePage="Adviser Clients"
      />
      <Container fluid>
        <AdviserClientFilterBar />
        <Row>
          <ClientLists />
        </Row>
      </Container>
    </>
  );
};

export default OrgStaffAdviserClientContainer;
