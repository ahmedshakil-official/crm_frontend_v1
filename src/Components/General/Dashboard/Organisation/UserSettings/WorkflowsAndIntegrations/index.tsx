import { Container } from "reactstrap";
import OrganisationBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import WorkflowsAndIntegrationsOverview from "./WorkflowsAndIntegrationsOverview/WorkflowsAndIntegrationsOverview";

const WorkflowsAndIntegrationContainer: React.FC = () => {
  return (
    <>
      <OrganisationBreadcrumbs
        mainTitle="Workflows & Integrations"
        title="Manage workflows and integrations"
        parent="User Settings"
        activePage="Workflows & Integrations"
      />
      <Container fluid>
        <WorkflowsAndIntegrationsOverview />
      </Container>
    </>
  );
};

export default WorkflowsAndIntegrationContainer;
