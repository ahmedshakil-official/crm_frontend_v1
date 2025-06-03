import Leads from "@/Components/General/Dashboard/CommonComponents/Directors/Leads/Leads";
import OrganizationLeadsBreadcrumbs from "./Breadcrumbs/Breadcrumbs";

const OrganizationLeadsContainer: React.FC = () => {
  return (
    <>
      <OrganizationLeadsBreadcrumbs />
      <Leads />
    </>
  );
};

export default OrganizationLeadsContainer;
