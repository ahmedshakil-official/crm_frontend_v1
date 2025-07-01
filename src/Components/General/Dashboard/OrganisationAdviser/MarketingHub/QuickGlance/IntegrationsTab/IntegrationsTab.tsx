import { Row } from "reactstrap";
import SocialMediaIntegrations from "./SocialMediaIntegrations/SocialMediaIntegrations";
import TeamPermissions from "./TeamPermissions/TeamPermissions";

const IntegrationsTab: React.FC = () => {
  return (
    <Row>
      <SocialMediaIntegrations />
      <TeamPermissions />
    </Row>
  );
};

export default IntegrationsTab;
