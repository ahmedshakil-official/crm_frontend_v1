import { Container } from "reactstrap";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs/Breadcrumbs";

const OrganisationAdviserReportingContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs
        title="Reporting"
        subTitle="Manage Reporting..."
        parent="Users"
        child="Reporting"
      />
      <Container fluid>
        <h1 className="text-danger text-center">Under Development</h1>
      </Container>
    </>
  );
};

export default OrganisationAdviserReportingContainer;
