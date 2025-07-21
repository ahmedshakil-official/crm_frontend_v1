import { Container } from "reactstrap";
import NetworkBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import SecurityPoliciesManagement from "./SecurityPoliciesManagement/SecurityPoliciesManagement";

const SecurityPolicyContainer: React.FC = () => {
  return (
    <>
      <NetworkBreadcrumbs
        mainTitle="Network Security Policy"
        title="Hello there!"
        parent="User Settings"
        activePage="Security Policy"
      />
      <Container fluid>
        <SecurityPoliciesManagement />
      </Container>
    </>
  );
};

export default SecurityPolicyContainer;
