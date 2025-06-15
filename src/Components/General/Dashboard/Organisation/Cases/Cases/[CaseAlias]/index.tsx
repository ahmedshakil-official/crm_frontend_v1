import SingleCaseInfo from "@/Components/General/Dashboard/CommonComponents/SingleCaseInfo/SingleCaseInfo";
import OrganisationBreadcrumbs from "../../../Breadcrumbs/Breadcrumbs";

const CaseContainer: React.FC = () => {
  return (
    <>
      <OrganisationBreadcrumbs
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
