import Clients from "../../../CommonComponents/Directors/Clients/Clients";
import OrganizationBreadcrumbs from "../../Breadcrumbs/Breadcrumbs";

const OrganizationClientsContainer: React.FC = () => {
  return (
    <>
      <OrganizationBreadcrumbs
        mainTitle="Organization Clients"
        title="Hello there!"
        parent="Directors"
        activePage="Clients"
      />
      <Clients />
    </>
  );
};

export default OrganizationClientsContainer;
