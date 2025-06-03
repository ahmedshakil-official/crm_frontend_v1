import Clients from "../../../CommonComponents/Directors/Clients/Clients";
import ClientsBreadcrumbs from "./Breadcrumbs/Breadcrumbs";

const ClientsContainer: React.FC = () => {
  return (
    <>
      <ClientsBreadcrumbs />
      <Clients />
    </>
  );
};

export default ClientsContainer;
