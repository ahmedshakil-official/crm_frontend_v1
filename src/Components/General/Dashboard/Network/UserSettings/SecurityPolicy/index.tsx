import { Container } from "reactstrap";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import SecurityPoliciesManagement from "./SecurityPoliciesManagement/SecurityPoliciesManagement";

const SecurityPolicyContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <Container fluid>
        <SecurityPoliciesManagement />
      </Container>
    </>
  );
};

export default SecurityPolicyContainer;
