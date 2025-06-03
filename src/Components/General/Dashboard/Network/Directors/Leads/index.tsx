import Leads from "../../../CommonComponents/Directors/Leads/Leads";
import NetworkDirectorsBreadcrumbs from "../Breadcrumbs/Breadcrumbs";

const NetworkLeadsContainer: React.FC = () => {
  return (
    <>
      <NetworkDirectorsBreadcrumbs title="Leads" />
      <Leads />
    </>
  );
};

export default NetworkLeadsContainer;
