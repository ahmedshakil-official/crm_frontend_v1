import Leads from "@/Components/General/Dashboard/CommonComponents/Directors/Leads/Leads";
import LeadsBreadcrumbs from "./Breadcrumbs/Breadcrumbs";
const LeadsContainer: React.FC = () => {
  return (
    <>
      <LeadsBreadcrumbs />
      <Leads />
    </>
  );
};

export default LeadsContainer;
