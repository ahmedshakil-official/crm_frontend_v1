import Clients from "../../../CommonComponents/Directors/Clients/Clients";
import OrganizationClientsBreadcrumbs from "./Breadcrumbs/Breadcrumbs";

const OrganizationClientsContainer: React.FC = () => {
  return (
    <>
      <OrganizationClientsBreadcrumbs />
      <Clients />
    </>
  );
};

export default OrganizationClientsContainer;
