import SingleCaseInfo from "@/Components/General/Dashboard/CommonComponents/Cases/Cases/SingleCaseInfo/SingleCaseInfo";
import OrganizationBreadcrumbs from "@/Components/General/Dashboard/Organization/Breadcrumbs/Breadcrumbs";

const CaseContainer: React.FC = () => {
  return (
    <>
      <OrganizationBreadcrumbs
        mainTitle="Organization Case Status"
        title="Hello there!"
        parent="Cases Status"
        activePage="Case"
      />
      <SingleCaseInfo />
    </>
  );
};

export default CaseContainer;
